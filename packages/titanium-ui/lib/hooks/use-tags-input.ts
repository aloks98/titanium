'use client';

import * as React from 'react';

// ============================================================
// TYPE DEFINITIONS
// ============================================================

export type TagsInputDelimiter = 'Enter' | 'Tab' | 'Comma' | 'Space';

export interface TagValidation {
  /** Prevent duplicate tags (default: false) */
  allowDuplicates?: boolean;
  /** Maximum number of tags allowed */
  maxTags?: number;
  /** Minimum characters per tag */
  minLength?: number;
  /** Maximum characters per tag */
  maxLength?: number;
  /** Regex pattern for tag validation */
  pattern?: RegExp;
  /** Custom validation function */
  validate?: (value: string, currentTags: string[]) => boolean | string;
}

export interface AutocompleteOption {
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface UseTagsInputOptions {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  validation?: TagValidation;
  options?: AutocompleteOption[];
  filterOptions?: (
    input: string,
    options: AutocompleteOption[],
  ) => AutocompleteOption[];
  delimiters?: TagsInputDelimiter[];
  disabled?: boolean;
  readOnly?: boolean;
  onTagAdd?: (value: string) => void;
  onTagRemove?: (value: string, index: number) => void;
  onValidationError?: (value: string, error: string) => void;
}

export interface UseTagsInputReturn {
  // State
  tags: string[];
  inputValue: string;
  activeTagIndex: number | null;
  isOpen: boolean;
  highlightedOptionIndex: number;
  filteredOptions: AutocompleteOption[];

  // Refs
  inputRef: React.RefObject<HTMLInputElement | null>;
  listRef: React.RefObject<HTMLDivElement | null>;
  tagRefs: React.MutableRefObject<Map<number, HTMLDivElement>>;
  containerRef: React.RefObject<HTMLDivElement | null>;

  // Actions
  addTag: (value: string) => boolean;
  removeTag: (index: number) => void;
  removeLastTag: () => void;
  clearAllTags: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setActiveTagIndex: React.Dispatch<React.SetStateAction<number | null>>;
  focusInput: () => void;
  focusTag: (index: number) => void;

  // Dropdown
  openDropdown: () => void;
  closeDropdown: () => void;
  setHighlightedOptionIndex: React.Dispatch<React.SetStateAction<number>>;
  selectHighlightedOption: () => void;

  // Validation
  getValidationError: (value: string) => string | null;

  // Announcement (for screen readers)
  announcement: string;
  setAnnouncement: React.Dispatch<React.SetStateAction<string>>;

  // Event handlers
  handleInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleTagKeyDown: (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// ============================================================
// DEFAULT FILTER FUNCTION
// ============================================================

function defaultFilterOptions(
  input: string,
  options: AutocompleteOption[],
): AutocompleteOption[] {
  const lowercaseInput = input.toLowerCase().trim();
  if (!lowercaseInput) return options;

  return options.filter((option) => {
    const label = option.label ?? option.value;
    return label.toLowerCase().includes(lowercaseInput);
  });
}

// ============================================================
// HOOK IMPLEMENTATION
// ============================================================

export function useTagsInput(options: UseTagsInputOptions): UseTagsInputReturn {
  const {
    value: controlledValue,
    defaultValue = [],
    onValueChange,
    validation,
    options: autocompleteOptions,
    filterOptions = defaultFilterOptions,
    delimiters = ['Enter'],
    disabled = false,
    readOnly = false,
    onTagAdd,
    onTagRemove,
    onValidationError,
  } = options;

  // Controlled vs uncontrolled value
  const [internalValue, setInternalValue] =
    React.useState<string[]>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const tags = isControlled ? controlledValue : internalValue;

  const setTags = React.useCallback(
    (newTags: string[] | ((prev: string[]) => string[])) => {
      const resolved = typeof newTags === 'function' ? newTags(tags) : newTags;
      if (!isControlled) {
        setInternalValue(resolved);
      }
      onValueChange?.(resolved);
    },
    [isControlled, tags, onValueChange],
  );

  // Input state
  const [inputValue, setInputValue] = React.useState('');

  // Navigation state
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null,
  );

  // Dropdown state
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedOptionIndex, setHighlightedOptionIndex] = React.useState(0);

  // Announcement for screen readers
  const [announcement, setAnnouncement] = React.useState('');

  // Refs
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const tagRefs = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // Filtered options (excluding already selected tags)
  const filteredOptions = React.useMemo(() => {
    if (!autocompleteOptions) return [];
    const filtered = filterOptions(inputValue, autocompleteOptions);
    return filtered.filter((opt) => !tags.includes(opt.value));
  }, [inputValue, autocompleteOptions, filterOptions, tags]);

  // Reset highlighted index when filtered options change
  React.useEffect(() => {
    setHighlightedOptionIndex(0);
  }, []);

  // Validation
  const getValidationError = React.useCallback(
    (value: string): string | null => {
      const v = validation;
      if (!v) return null;

      const trimmed = value.trim();
      if (!trimmed) return 'Tag cannot be empty';

      if (v.minLength && trimmed.length < v.minLength) {
        return `Tag must be at least ${v.minLength} characters`;
      }
      if (v.maxLength && trimmed.length > v.maxLength) {
        return `Tag must be no more than ${v.maxLength} characters`;
      }
      if (v.pattern && !v.pattern.test(trimmed)) {
        return 'Tag format is invalid';
      }
      if (v.allowDuplicates !== true && tags.includes(trimmed)) {
        return 'Tag already exists';
      }
      if (v.maxTags && tags.length >= v.maxTags) {
        return `Maximum of ${v.maxTags} tags allowed`;
      }
      if (v.validate) {
        const result = v.validate(trimmed, tags);
        if (result !== true) {
          return typeof result === 'string' ? result : 'Invalid tag';
        }
      }

      return null;
    },
    [validation, tags],
  );

  // Actions
  const addTag = React.useCallback(
    (value: string): boolean => {
      if (disabled || readOnly) return false;

      const trimmed = value.trim();
      if (!trimmed) return false;

      const error = getValidationError(trimmed);

      if (error) {
        onValidationError?.(trimmed, error);
        setAnnouncement(`Cannot add "${trimmed}": ${error}`);
        return false;
      }

      setTags((prev) => [...prev, trimmed]);
      setInputValue('');
      setActiveTagIndex(null);
      setIsOpen(false);
      onTagAdd?.(trimmed);
      setAnnouncement(`Tag "${trimmed}" added. ${tags.length + 1} total tags.`);
      return true;
    },
    [
      disabled,
      readOnly,
      getValidationError,
      setTags,
      tags.length,
      onTagAdd,
      onValidationError,
    ],
  );

  const removeTag = React.useCallback(
    (index: number) => {
      if (disabled || readOnly) return;
      if (index < 0 || index >= tags.length) return;

      const removedTag = tags[index];
      setTags((prev) => prev.filter((_, i) => i !== index));
      onTagRemove?.(removedTag, index);
      setAnnouncement(
        `Tag "${removedTag}" removed. ${tags.length - 1} remaining.`,
      );

      // Focus management after removal
      if (tags.length === 1) {
        // Last tag removed, focus input
        setActiveTagIndex(null);
        inputRef.current?.focus();
      } else if (index >= tags.length - 1) {
        // Removed last tag, focus previous
        setActiveTagIndex(index - 1);
      } else {
        // Focus same index (next tag slides in)
        setActiveTagIndex(index);
      }
    },
    [disabled, readOnly, tags, setTags, onTagRemove],
  );

  const removeLastTag = React.useCallback(() => {
    if (tags.length > 0) {
      removeTag(tags.length - 1);
    }
  }, [tags.length, removeTag]);

  const clearAllTags = React.useCallback(() => {
    if (disabled || readOnly) return;
    setTags([]);
    setActiveTagIndex(null);
    setAnnouncement('All tags cleared.');
    inputRef.current?.focus();
  }, [disabled, readOnly, setTags]);

  const focusInput = React.useCallback(() => {
    if (!disabled && !readOnly) {
      setActiveTagIndex(null);
      inputRef.current?.focus();
    }
  }, [disabled, readOnly]);

  const focusTag = React.useCallback(
    (index: number) => {
      if (index >= 0 && index < tags.length) {
        setActiveTagIndex(index);
        tagRefs.current.get(index)?.focus();
      }
    },
    [tags.length],
  );

  // Dropdown actions
  const openDropdown = React.useCallback(() => {
    if (autocompleteOptions && autocompleteOptions.length > 0) {
      setIsOpen(true);
      setHighlightedOptionIndex(0);
      if (filteredOptions.length > 0) {
        setAnnouncement(
          `${filteredOptions.length} suggestions available. Use arrow keys to navigate.`,
        );
      }
    }
  }, [autocompleteOptions, filteredOptions.length]);

  const closeDropdown = React.useCallback(() => {
    setIsOpen(false);
    setHighlightedOptionIndex(0);
  }, []);

  const selectHighlightedOption = React.useCallback(() => {
    const option = filteredOptions[highlightedOptionIndex];
    if (option && !option.disabled) {
      addTag(option.value);
    }
  }, [filteredOptions, highlightedOptionIndex, addTag]);

  // Event handlers
  const handleInputKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      const input = event.currentTarget;
      const cursorAtStart = input.selectionStart === 0;
      const hasText = inputValue.trim().length > 0;

      // Handle delimiters
      if (delimiters.includes('Enter') && key === 'Enter') {
        event.preventDefault();
        if (isOpen && filteredOptions.length > 0) {
          selectHighlightedOption();
        } else if (hasText) {
          addTag(inputValue);
        }
        return;
      }

      if (delimiters.includes('Tab') && key === 'Tab' && hasText) {
        event.preventDefault();
        addTag(inputValue);
        return;
      }

      if (delimiters.includes('Comma') && key === ',') {
        event.preventDefault();
        if (hasText) {
          addTag(inputValue);
        }
        return;
      }

      if (delimiters.includes('Space') && key === ' ') {
        event.preventDefault();
        if (hasText) {
          addTag(inputValue);
        }
        return;
      }

      // Backspace - select/delete last tag
      if (key === 'Backspace' && !hasText && cursorAtStart && tags.length > 0) {
        event.preventDefault();
        if (activeTagIndex !== null) {
          removeTag(activeTagIndex);
        } else {
          focusTag(tags.length - 1);
        }
        return;
      }

      // Arrow navigation
      if (key === 'ArrowLeft' && cursorAtStart && tags.length > 0) {
        event.preventDefault();
        focusTag(tags.length - 1);
        return;
      }

      // Dropdown navigation
      if (isOpen && filteredOptions.length > 0) {
        if (key === 'ArrowDown') {
          event.preventDefault();
          setHighlightedOptionIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0,
          );
          return;
        }

        if (key === 'ArrowUp') {
          event.preventDefault();
          setHighlightedOptionIndex((prev) =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1,
          );
          return;
        }

        if (key === 'Escape') {
          event.preventDefault();
          closeDropdown();
          return;
        }
      } else if (key === 'ArrowDown' && autocompleteOptions) {
        event.preventDefault();
        openDropdown();
        return;
      }

      if (key === 'Escape') {
        event.preventDefault();
        setInputValue('');
        closeDropdown();
      }
    },
    [
      inputValue,
      delimiters,
      isOpen,
      filteredOptions,
      tags.length,
      activeTagIndex,
      autocompleteOptions,
      addTag,
      removeTag,
      focusTag,
      selectHighlightedOption,
      openDropdown,
      closeDropdown,
    ],
  );

  const handleTagKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
      const { key } = event;

      switch (key) {
        case 'Backspace':
        case 'Delete':
          event.preventDefault();
          removeTag(index);
          break;

        case 'ArrowLeft':
          event.preventDefault();
          if (index > 0) {
            focusTag(index - 1);
          }
          break;

        case 'ArrowRight':
          event.preventDefault();
          if (index < tags.length - 1) {
            focusTag(index + 1);
          } else {
            focusInput();
          }
          break;

        case 'Home':
          event.preventDefault();
          focusTag(0);
          break;

        case 'End':
          event.preventDefault();
          focusInput();
          break;

        case 'Escape':
          event.preventDefault();
          focusInput();
          break;

        default:
          // Any printable character moves to input
          if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
            focusInput();
            setInputValue(key);
          }
          break;
      }
    },
    [tags.length, removeTag, focusTag, focusInput],
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      setActiveTagIndex(null);

      // Open dropdown when typing if we have options
      if (autocompleteOptions && newValue.trim()) {
        openDropdown();
      } else if (!newValue.trim()) {
        closeDropdown();
      }
    },
    [autocompleteOptions, openDropdown, closeDropdown],
  );

  const handleInputFocus = React.useCallback(
    (_event: React.FocusEvent<HTMLInputElement>) => {
      setActiveTagIndex(null);
      if (
        autocompleteOptions &&
        autocompleteOptions.length > 0 &&
        inputValue.trim()
      ) {
        openDropdown();
      }
    },
    [autocompleteOptions, inputValue, openDropdown],
  );

  const handleInputBlur = React.useCallback(
    (_event: React.FocusEvent<HTMLInputElement>) => {
      // Delay closing to allow click on dropdown options
      setTimeout(() => {
        closeDropdown();
      }, 150);
    },
    [closeDropdown],
  );

  return {
    // State
    tags,
    inputValue,
    activeTagIndex,
    isOpen,
    highlightedOptionIndex,
    filteredOptions,

    // Refs
    inputRef,
    listRef,
    tagRefs,
    containerRef,

    // Actions
    addTag,
    removeTag,
    removeLastTag,
    clearAllTags,
    setInputValue,
    setActiveTagIndex,
    focusInput,
    focusTag,

    // Dropdown
    openDropdown,
    closeDropdown,
    setHighlightedOptionIndex,
    selectHighlightedOption,

    // Validation
    getValidationError,

    // Announcement
    announcement,
    setAnnouncement,

    // Event handlers
    handleInputKeyDown,
    handleTagKeyDown,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
  };
}
