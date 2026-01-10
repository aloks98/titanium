'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { Popover as PopoverPrimitive } from 'radix-ui';
import * as React from 'react';
import {
  type AutocompleteOption,
  type TagsInputDelimiter,
  type TagValidation,
  type UseTagsInputReturn,
  useTagsInput,
} from '@/lib/hooks/use-tags-input';
import { cn } from '@/lib/utils';

// ============================================================
// VARIANT DEFINITIONS
// ============================================================

const tagsInputVariants = cva(
  `
    flex w-full flex-wrap items-center cursor-text
    bg-background border border-input shadow-xs shadow-black/5
    transition-[color,box-shadow]
    focus-within:ring-ring/30 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px]
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10
    dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/20
    [[data-invalid=true]_&]:border-destructive/60 [[data-invalid=true]_&]:ring-destructive/10
    dark:[[data-invalid=true]_&]:border-destructive dark:[[data-invalid=true]_&]:ring-destructive/20
    data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60
    data-[readonly=true]:bg-muted/80 data-[readonly=true]:cursor-not-allowed
  `,
  {
    variants: {
      size: {
        lg: 'min-h-10 px-3 py-1.5 text-sm rounded-md gap-1.5',
        md: 'min-h-9 px-2.5 py-1.5 text-sm rounded-md gap-1.5',
        sm: 'min-h-8 px-2 py-1 text-xs rounded-md gap-1',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const tagsInputTagVariants = cva(
  `
    inline-flex items-center whitespace-nowrap rounded-md
    border font-medium cursor-default
    transition-all duration-150 select-none
    focus:outline-none
    focus-visible:outline-none
  `,
  {
    variants: {
      size: {
        lg: 'h-6 px-2 text-xs gap-1 [&_svg]:size-3.5',
        md: 'h-5 px-1.5 text-xs gap-0.5 [&_svg]:size-3',
        sm: 'h-4 px-1 text-[0.625rem] gap-0.5 [&_svg]:size-2.5',
      },
      variant: {
        default: [
          'bg-secondary text-secondary-foreground border-transparent',
          'data-[active=true]:bg-secondary/80 data-[active=true]:border-primary data-[active=true]:shadow-[0_0_0_1px_var(--color-primary)]',
        ],
        primary: [
          'bg-[var(--color-primary-soft,var(--color-blue-50))] text-[var(--color-primary-accent,var(--color-blue-700))] border-transparent',
          'dark:bg-[var(--color-primary-soft,var(--color-blue-950))] dark:text-[var(--color-primary-soft,var(--color-blue-400))]',
          'data-[active=true]:border-primary data-[active=true]:shadow-[0_0_0_1px_var(--color-primary)]',
        ],
        outline: [
          'bg-transparent border-border text-secondary-foreground',
          'data-[active=true]:border-primary data-[active=true]:bg-primary/5 data-[active=true]:shadow-[0_0_0_1px_var(--color-primary)]',
        ],
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      disabled: false,
    },
  },
);

const tagsInputInputVariants = cva(
  `
    flex-1 min-w-[80px] bg-transparent outline-none
    placeholder:text-muted-foreground/80
    disabled:cursor-not-allowed
  `,
  {
    variants: {
      size: {
        lg: 'text-sm h-6',
        md: 'text-sm h-5',
        sm: 'text-xs h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const tagsInputListVariants = cva(
  `
    z-50 min-w-[8rem] max-h-[300px] overflow-y-auto overflow-x-hidden rounded-md
    border border-border bg-popover p-1
    shadow-md shadow-black/5 text-popover-foreground
    data-[state=open]:animate-in data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
    data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2
  `,
);

const tagsInputOptionVariants = cva(
  `
    relative flex w-full cursor-default select-none items-center
    rounded-sm px-2 py-1.5 text-sm outline-hidden text-foreground
    data-[highlighted=true]:bg-accent data-[highlighted=true]:text-accent-foreground
    data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50
  `,
);

// ============================================================
// CONTEXT
// ============================================================

type TagsInputSize = 'sm' | 'md' | 'lg';
type TagsInputTagVariant = 'default' | 'primary' | 'outline';

interface TagsInputContextValue extends UseTagsInputReturn {
  size: TagsInputSize;
  tagVariant: TagsInputTagVariant;
  disabled: boolean;
  readOnly: boolean;
  registerTagRef: (index: number, node: HTMLDivElement | null) => void;
  id: string;
  validation?: TagValidation;
}

const TagsInputContext = React.createContext<TagsInputContextValue | null>(
  null,
);

function useTagsInputContext() {
  const context = React.useContext(TagsInputContext);
  if (!context) {
    throw new Error('TagsInput components must be used within TagsInput');
  }
  return context;
}

// ============================================================
// TYPES
// ============================================================

interface TagsInputRootProps
  extends Omit<
      React.ComponentProps<'div'>,
      'defaultValue' | 'value' | 'onChange'
    >,
    VariantProps<typeof tagsInputVariants> {
  // Core value props (controlled/uncontrolled)
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;

  // Input behavior
  placeholder?: string;
  delimiters?: TagsInputDelimiter[];
  addOnBlur?: boolean;

  // Validation
  validation?: TagValidation;

  // Autocomplete mode
  options?: AutocompleteOption[];
  filterOptions?: (
    inputValue: string,
    options: AutocompleteOption[],
  ) => AutocompleteOption[];
  createOption?: boolean;

  // States
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;

  // Styling
  tagVariant?: TagsInputTagVariant;

  // Form integration
  name?: string;

  // Callbacks
  onTagAdd?: (value: string) => void;
  onTagRemove?: (value: string, index: number) => void;
  onInputChange?: (value: string) => void;
  onValidationError?: (value: string, error: string) => void;
}

interface TagsInputTagProps
  extends Omit<React.ComponentProps<'div'>, 'children'>,
    VariantProps<typeof tagsInputTagVariants> {
  index: number;
  children: React.ReactNode;
}

type TagsInputTagTextProps = React.ComponentProps<'span'>;

type TagsInputTagRemoveProps = Omit<React.ComponentProps<'button'>, 'children'>;

interface TagsInputInputProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'value' | 'onChange'> {}

type TagsInputClearProps = React.ComponentProps<'button'>;

type TagsInputListProps = React.ComponentProps<'div'>;

interface TagsInputOptionProps extends React.ComponentProps<'div'> {
  option: AutocompleteOption;
  index: number;
}

type TagsInputEmptyProps = React.ComponentProps<'div'>;

// ============================================================
// TAG INDEX CONTEXT (for remove button)
// ============================================================

const TagIndexContext = React.createContext<number | null>(null);

// ============================================================
// ROOT COMPONENT
// ============================================================

function TagsInput({
  className,
  size = 'md',
  tagVariant = 'default',
  value,
  defaultValue = [],
  onValueChange,
  placeholder,
  delimiters = ['Enter'],
  validation,
  options,
  filterOptions,
  createOption = true,
  disabled = false,
  readOnly = false,
  required,
  name,
  children,
  onTagAdd,
  onTagRemove,
  onValidationError,
  id: providedId,
  ...props
}: TagsInputRootProps) {
  const generatedId = React.useId();
  const id = providedId ?? generatedId;

  const state = useTagsInput({
    value,
    defaultValue,
    onValueChange,
    validation,
    options,
    filterOptions,
    delimiters,
    disabled,
    readOnly,
    onTagAdd,
    onTagRemove,
    onValidationError,
  });

  const registerTagRef = React.useCallback(
    (index: number, node: HTMLDivElement | null) => {
      if (node) {
        state.tagRefs.current.set(index, node);
      } else {
        state.tagRefs.current.delete(index);
      }
    },
    [state.tagRefs],
  );

  const contextValue: TagsInputContextValue = {
    ...state,
    size: size ?? 'md',
    tagVariant,
    disabled,
    readOnly,
    registerTagRef,
    id,
    validation,
  };

  const handleContainerClick = React.useCallback(
    (e: React.MouseEvent) => {
      // Only focus input if clicking on the container itself, not on tags
      if (e.target === e.currentTarget) {
        state.focusInput();
      }
    },
    [state],
  );

  return (
    <TagsInputContext.Provider value={contextValue}>
      <div
        ref={state.containerRef}
        data-slot="tags-input"
        data-disabled={disabled || undefined}
        data-readonly={readOnly || undefined}
        role="group"
        aria-label="Tag input"
        className={cn(tagsInputVariants({ size }), className)}
        onClick={handleContainerClick}
        {...props}
      >
        {/* Hidden input for form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={state.tags.join(',')}
            required={required}
          />
        )}

        {/* Render children (tags + input) */}
        {children}

        {/* Live region for announcements */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {state.announcement}
        </div>
      </div>

      {/* Autocomplete dropdown */}
      {options && options.length > 0 && (
        <PopoverPrimitive.Root
          open={state.isOpen && state.filteredOptions.length > 0}
        >
          <PopoverPrimitive.Anchor
            virtualRef={state.containerRef as React.RefObject<HTMLDivElement>}
          />
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              ref={state.listRef}
              data-slot="tags-input-list"
              role="listbox"
              id={`${id}-listbox`}
              aria-label="Suggestions"
              className={cn(tagsInputListVariants())}
              sideOffset={4}
              align="start"
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              {state.filteredOptions.map((option, index) => (
                <TagsInputOptionInternal
                  key={option.value}
                  option={option}
                  index={index}
                />
              ))}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      )}
    </TagsInputContext.Provider>
  );
}

// ============================================================
// TAG COMPONENT
// ============================================================

function TagsInputTag({
  className,
  index,
  variant,
  size,
  children,
  ...props
}: TagsInputTagProps) {
  const {
    activeTagIndex,
    setActiveTagIndex,
    handleTagKeyDown,
    registerTagRef,
    size: contextSize,
    tagVariant,
    disabled,
    readOnly,
    tags,
  } = useTagsInputContext();

  const isActive = activeTagIndex === index;
  const effectiveSize = size ?? contextSize;
  const effectiveVariant = variant ?? tagVariant;

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!disabled && !readOnly) {
        setActiveTagIndex(index);
      }
    },
    [disabled, readOnly, setActiveTagIndex, index],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      handleTagKeyDown(e, index);
    },
    [handleTagKeyDown, index],
  );

  return (
    <TagIndexContext.Provider value={index}>
      <div
        ref={(node) => registerTagRef(index, node)}
        role="option"
        aria-selected="true"
        aria-setsize={tags.length}
        aria-posinset={index + 1}
        data-slot="tags-input-tag"
        data-active={isActive || undefined}
        tabIndex={isActive ? 0 : -1}
        className={cn(
          tagsInputTagVariants({
            size: effectiveSize,
            variant: effectiveVariant,
            disabled,
          }),
          className,
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </div>
    </TagIndexContext.Provider>
  );
}

function TagsInputTagText({
  className,
  children,
  ...props
}: TagsInputTagTextProps) {
  return (
    <span
      data-slot="tags-input-tag-text"
      className={cn('truncate max-w-[150px]', className)}
      {...props}
    >
      {children}
    </span>
  );
}

function TagsInputTagRemove({ className, ...props }: TagsInputTagRemoveProps) {
  const { removeTag, disabled, readOnly, tags } = useTagsInputContext();
  const index = React.useContext(TagIndexContext);

  if (index === null) {
    throw new Error('TagsInputTagRemove must be used within TagsInputTag');
  }

  const tagValue = tags[index];

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      removeTag(index);
    },
    [removeTag, index],
  );

  if (disabled || readOnly) {
    return null;
  }

  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={`Remove tag: ${tagValue}`}
      data-slot="tags-input-tag-remove"
      disabled={disabled || readOnly}
      className={cn(
        'inline-flex items-center justify-center rounded-sm -me-0.5',
        'opacity-60 hover:opacity-100 transition-opacity',
        'focus:outline-none disabled:pointer-events-none',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <X />
    </button>
  );
}

// ============================================================
// INPUT COMPONENT
// ============================================================

function TagsInputInput({
  className,
  placeholder,
  ...props
}: TagsInputInputProps) {
  const {
    inputValue,
    inputRef,
    handleInputKeyDown,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    size,
    disabled,
    readOnly,
    isOpen,
    highlightedOptionIndex,
    filteredOptions,
    id,
    tags,
    validation,
  } = useTagsInputContext();

  const highlightedOption = filteredOptions[highlightedOptionIndex];
  const isMaxTagsReached = validation?.maxTags
    ? tags.length >= validation.maxTags
    : false;

  return (
    <input
      ref={inputRef}
      type="text"
      role="combobox"
      data-slot="tags-input-input"
      value={inputValue}
      disabled={disabled || isMaxTagsReached}
      readOnly={readOnly}
      placeholder={isMaxTagsReached ? 'Max tags reached' : placeholder}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-listbox`}
      aria-activedescendant={
        isOpen && highlightedOption
          ? `${id}-option-${highlightedOptionIndex}`
          : undefined
      }
      aria-autocomplete="list"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      className={cn(tagsInputInputVariants({ size }), className)}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      {...props}
    />
  );
}

// ============================================================
// CLEAR COMPONENT
// ============================================================

function TagsInputClear({
  className,
  children,
  ...props
}: TagsInputClearProps) {
  const { clearAllTags, tags, disabled, readOnly } = useTagsInputContext();

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      clearAllTags();
    },
    [clearAllTags],
  );

  if (tags.length === 0) return null;

  return (
    <button
      type="button"
      aria-label="Clear all tags"
      data-slot="tags-input-clear"
      disabled={disabled || readOnly}
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        'text-muted-foreground hover:text-foreground transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded-sm',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children ?? <X className="size-4" />}
    </button>
  );
}

// ============================================================
// AUTOCOMPLETE COMPONENTS
// ============================================================

function TagsInputList({ className, children, ...props }: TagsInputListProps) {
  const { listRef, filteredOptions, isOpen, id } = useTagsInputContext();

  if (!isOpen || filteredOptions.length === 0) return null;

  return (
    <div
      ref={listRef}
      role="listbox"
      id={`${id}-listbox`}
      aria-label="Suggestions"
      data-slot="tags-input-list"
      className={cn(tagsInputListVariants(), className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Internal option component used by the dropdown
function TagsInputOptionInternal({
  option,
  index,
}: {
  option: AutocompleteOption;
  index: number;
}) {
  const {
    highlightedOptionIndex,
    addTag,
    closeDropdown,
    id,
    setHighlightedOptionIndex,
  } = useTagsInputContext();
  const isHighlighted = highlightedOptionIndex === index;

  const handleSelect = React.useCallback(() => {
    if (!option.disabled) {
      addTag(option.value);
      closeDropdown();
    }
  }, [option.disabled, option.value, addTag, closeDropdown]);

  const handleMouseEnter = React.useCallback(() => {
    setHighlightedOptionIndex(index);
  }, [setHighlightedOptionIndex, index]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect();
      }
    },
    [handleSelect],
  );

  return (
    <div
      role="option"
      id={`${id}-option-${index}`}
      tabIndex={isHighlighted ? 0 : -1}
      aria-selected={isHighlighted}
      aria-disabled={option.disabled}
      data-slot="tags-input-option"
      data-highlighted={isHighlighted || undefined}
      data-disabled={option.disabled || undefined}
      className={cn(tagsInputOptionVariants())}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
    >
      {option.label ?? option.value}
    </div>
  );
}

function TagsInputOption({
  className,
  option,
  index,
  ...props
}: TagsInputOptionProps) {
  const {
    highlightedOptionIndex,
    addTag,
    closeDropdown,
    id,
    setHighlightedOptionIndex,
  } = useTagsInputContext();
  const isHighlighted = highlightedOptionIndex === index;

  const handleSelect = React.useCallback(() => {
    if (!option.disabled) {
      addTag(option.value);
      closeDropdown();
    }
  }, [option.disabled, option.value, addTag, closeDropdown]);

  const handleMouseEnter = React.useCallback(() => {
    setHighlightedOptionIndex(index);
  }, [setHighlightedOptionIndex, index]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect();
      }
    },
    [handleSelect],
  );

  return (
    <div
      role="option"
      id={`${id}-option-${index}`}
      tabIndex={isHighlighted ? 0 : -1}
      aria-selected={isHighlighted}
      aria-disabled={option.disabled}
      data-slot="tags-input-option"
      data-highlighted={isHighlighted || undefined}
      data-disabled={option.disabled || undefined}
      className={cn(tagsInputOptionVariants(), className)}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {option.label ?? option.value}
    </div>
  );
}

function TagsInputEmpty({
  className,
  children,
  ...props
}: TagsInputEmptyProps) {
  return (
    <div
      data-slot="tags-input-empty"
      className={cn(
        'py-6 text-center text-sm text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children ?? 'No results found.'}
    </div>
  );
}

// ============================================================
// EXPORTS
// ============================================================

export {
  TagsInput,
  TagsInputTag,
  TagsInputTagText,
  TagsInputTagRemove,
  TagsInputInput,
  TagsInputClear,
  TagsInputList,
  TagsInputOption,
  TagsInputEmpty,
  tagsInputVariants,
  tagsInputTagVariants,
};

export type {
  TagsInputRootProps,
  TagsInputTagProps,
  TagsInputInputProps,
  TagsInputClearProps,
  TagsInputListProps,
  TagsInputOptionProps,
  TagsInputEmptyProps,
  TagValidation,
  AutocompleteOption,
  TagsInputDelimiter,
};
