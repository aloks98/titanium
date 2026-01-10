'use client';

import {
  Label,
  TagsInput,
  TagsInputClear,
  TagsInputInput,
  TagsInputTag,
  TagsInputTagRemove,
  TagsInputTagText,
} from '@e412/titanium';
import * as React from 'react';
import type { ComponentDocumentation } from '../types';

function BasicTagsInputDemo() {
  const [tags, setTags] = React.useState<string[]>(['React', 'TypeScript']);

  return (
    <div className="w-full max-w-md">
      <TagsInput value={tags} onValueChange={setTags} placeholder="Add tags...">
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add tag..." />
      </TagsInput>
    </div>
  );
}

function SizesTagsInputDemo() {
  const [smallTags, setSmallTags] = React.useState<string[]>(['Small']);
  const [mediumTags, setMediumTags] = React.useState<string[]>(['Medium']);
  const [largeTags, setLargeTags] = React.useState<string[]>(['Large']);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <TagsInput
        size="sm"
        value={smallTags}
        onValueChange={setSmallTags}
        placeholder="Small"
      >
        {smallTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add tag..." />
      </TagsInput>
      <TagsInput
        size="md"
        value={mediumTags}
        onValueChange={setMediumTags}
        placeholder="Medium"
      >
        {mediumTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add tag..." />
      </TagsInput>
      <TagsInput
        size="lg"
        value={largeTags}
        onValueChange={setLargeTags}
        placeholder="Large"
      >
        {largeTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add tag..." />
      </TagsInput>
    </div>
  );
}

function TagVariantsDemo() {
  const [defaultTags, setDefaultTags] = React.useState<string[]>(['Default']);
  const [primaryTags, setPrimaryTags] = React.useState<string[]>(['Primary']);
  const [outlineTags, setOutlineTags] = React.useState<string[]>(['Outline']);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <TagsInput
        tagVariant="default"
        value={defaultTags}
        onValueChange={setDefaultTags}
      >
        {defaultTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Default variant..." />
      </TagsInput>
      <TagsInput
        tagVariant="primary"
        value={primaryTags}
        onValueChange={setPrimaryTags}
      >
        {primaryTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Primary variant..." />
      </TagsInput>
      <TagsInput
        tagVariant="outline"
        value={outlineTags}
        onValueChange={setOutlineTags}
      >
        {outlineTags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Outline variant..." />
      </TagsInput>
    </div>
  );
}

function WithLabelDemo() {
  const [tags, setTags] = React.useState<string[]>(['JavaScript']);

  return (
    <div className="grid w-full max-w-md gap-1.5">
      <Label htmlFor="skills">Skills</Label>
      <TagsInput id="skills" value={tags} onValueChange={setTags}>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add skills..." />
      </TagsInput>
    </div>
  );
}

function WithClearButtonDemo() {
  const [tags, setTags] = React.useState<string[]>(['One', 'Two', 'Three']);

  return (
    <div className="w-full max-w-md">
      <TagsInput value={tags} onValueChange={setTags}>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add tag..." />
        <TagsInputClear />
      </TagsInput>
    </div>
  );
}

function WithValidationDemo() {
  const [tags, setTags] = React.useState<string[]>(['valid@email.com']);

  return (
    <div className="w-full max-w-md">
      <Label className="mb-1.5 block">Email Tags (max 5)</Label>
      <TagsInput
        value={tags}
        onValueChange={setTags}
        validation={{
          maxTags: 5,
          minLength: 3,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        }}
      >
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add email..." />
      </TagsInput>
      <p className="text-sm text-muted-foreground mt-1.5">
        Enter valid email addresses. Maximum 5 tags allowed.
      </p>
    </div>
  );
}

function WithAutocompleteDemo() {
  const [tags, setTags] = React.useState<string[]>(['React']);

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ];

  return (
    <div className="w-full max-w-md">
      <Label className="mb-1.5 block">Framework</Label>
      <TagsInput value={tags} onValueChange={setTags} options={options}>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Select or type..." />
      </TagsInput>
    </div>
  );
}

function DisabledDemo() {
  const [tags] = React.useState<string[]>(['Cannot', 'Edit']);

  return (
    <div className="w-full max-w-md">
      <TagsInput value={tags} disabled>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Disabled..." />
      </TagsInput>
    </div>
  );
}

export const tagsInputDocumentation: ComponentDocumentation = {
  id: 'tags-input',
  name: 'Tags Input',
  description:
    'An input component for adding and managing tags with keyboard navigation, validation, and optional autocomplete.',
  category: 'form',
  simpleExample: {
    example: <BasicTagsInputDemo />,
    code: `import {
  TagsInput,
  TagsInputInput,
  TagsInputTag,
  TagsInputTagText,
  TagsInputTagRemove,
} from '@e412/titanium';
import * as React from 'react';

export function TagsInputDemo() {
  const [tags, setTags] = React.useState<string[]>(['React', 'TypeScript']);

  return (
    <TagsInput value={tags} onValueChange={setTags}>
      {tags.map((tag, index) => (
        <TagsInputTag key={tag} index={index}>
          <TagsInputTagText>{tag}</TagsInputTagText>
          <TagsInputTagRemove />
        </TagsInputTag>
      ))}
      <TagsInputInput placeholder="Add tag..." />
    </TagsInput>
  );
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Tags input in different sizes (sm, md, lg).',
      example: <SizesTagsInputDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

export function TagsInputSizesDemo() {
  const [tags, setTags] = React.useState(['Tag']);

  return (
    <div className="flex flex-col gap-4">
      <TagsInput size="sm" value={tags} onValueChange={setTags}>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Small..." />
      </TagsInput>
      <TagsInput size="md" value={tags} onValueChange={setTags}>...</TagsInput>
      <TagsInput size="lg" value={tags} onValueChange={setTags}>...</TagsInput>
    </div>
  );
}`,
    },
    {
      id: 'tag-variants',
      title: 'Tag Variants',
      description: 'Different styling variants for tags.',
      example: <TagVariantsDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

export function TagVariantsDemo() {
  const [tags, setTags] = React.useState(['Tag']);

  return (
    <div className="flex flex-col gap-4">
      <TagsInput tagVariant="default" value={tags} onValueChange={setTags}>...</TagsInput>
      <TagsInput tagVariant="primary" value={tags} onValueChange={setTags}>...</TagsInput>
      <TagsInput tagVariant="outline" value={tags} onValueChange={setTags}>...</TagsInput>
    </div>
  );
}`,
    },
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Tags input with an associated label.',
      example: <WithLabelDemo />,
      code: `import { Label, TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

export function WithLabelDemo() {
  const [tags, setTags] = React.useState(['JavaScript']);

  return (
    <div className="grid gap-1.5">
      <Label htmlFor="skills">Skills</Label>
      <TagsInput id="skills" value={tags} onValueChange={setTags}>
        {tags.map((tag, index) => (
          <TagsInputTag key={tag} index={index}>
            <TagsInputTagText>{tag}</TagsInputTagText>
            <TagsInputTagRemove />
          </TagsInputTag>
        ))}
        <TagsInputInput placeholder="Add skills..." />
      </TagsInput>
    </div>
  );
}`,
    },
    {
      id: 'with-clear',
      title: 'With Clear Button',
      description: 'Tags input with a clear all button.',
      example: <WithClearButtonDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove, TagsInputClear } from '@e412/titanium';

export function WithClearDemo() {
  const [tags, setTags] = React.useState(['One', 'Two', 'Three']);

  return (
    <TagsInput value={tags} onValueChange={setTags}>
      {tags.map((tag, index) => (
        <TagsInputTag key={tag} index={index}>
          <TagsInputTagText>{tag}</TagsInputTagText>
          <TagsInputTagRemove />
        </TagsInputTag>
      ))}
      <TagsInputInput placeholder="Add tag..." />
      <TagsInputClear />
    </TagsInput>
  );
}`,
    },
    {
      id: 'with-validation',
      title: 'With Validation',
      description:
        'Tags input with validation rules (pattern, max tags, min length).',
      example: <WithValidationDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

export function WithValidationDemo() {
  const [tags, setTags] = React.useState(['valid@email.com']);

  return (
    <TagsInput
      value={tags}
      onValueChange={setTags}
      validation={{
        maxTags: 5,
        minLength: 3,
        pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      }}
    >
      {tags.map((tag, index) => (
        <TagsInputTag key={tag} index={index}>
          <TagsInputTagText>{tag}</TagsInputTagText>
          <TagsInputTagRemove />
        </TagsInputTag>
      ))}
      <TagsInputInput placeholder="Add email..." />
    </TagsInput>
  );
}`,
    },
    {
      id: 'with-autocomplete',
      title: 'With Autocomplete',
      description: 'Tags input with autocomplete suggestions.',
      example: <WithAutocompleteDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  // ...
];

export function WithAutocompleteDemo() {
  const [tags, setTags] = React.useState(['React']);

  return (
    <TagsInput value={tags} onValueChange={setTags} options={options}>
      {tags.map((tag, index) => (
        <TagsInputTag key={tag} index={index}>
          <TagsInputTagText>{tag}</TagsInputTagText>
          <TagsInputTagRemove />
        </TagsInputTag>
      ))}
      <TagsInputInput placeholder="Select or type..." />
    </TagsInput>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Tags input in disabled state.',
      example: <DisabledDemo />,
      code: `import { TagsInput, TagsInputInput, TagsInputTag, TagsInputTagText, TagsInputTagRemove } from '@e412/titanium';

export function DisabledDemo() {
  const [tags] = React.useState(['Cannot', 'Edit']);

  return (
    <TagsInput value={tags} disabled>
      {tags.map((tag, index) => (
        <TagsInputTag key={tag} index={index}>
          <TagsInputTagText>{tag}</TagsInputTagText>
          <TagsInputTagRemove />
        </TagsInputTag>
      ))}
      <TagsInputInput placeholder="Disabled..." />
    </TagsInput>
  );
}`,
    },
  ],
  api: [
    {
      component: 'TagsInput',
      description: 'The root container component for the tags input.',
      props: [
        {
          name: 'value',
          type: 'string[]',
          description: 'Controlled array of tag values',
        },
        {
          name: 'defaultValue',
          type: 'string[]',
          description: 'Initial tags for uncontrolled mode',
          defaultValue: '[]',
        },
        {
          name: 'onValueChange',
          type: '(value: string[]) => void',
          description: 'Callback when tags change',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'Size variant of the input',
          defaultValue: '"md"',
        },
        {
          name: 'tagVariant',
          type: '"default" | "primary" | "outline"',
          description: 'Visual variant for tags',
          defaultValue: '"default"',
        },
        {
          name: 'delimiters',
          type: '("Enter" | "Tab" | "Comma" | "Space")[]',
          description: 'Keys that create a new tag',
          defaultValue: '["Enter"]',
        },
        {
          name: 'validation',
          type: 'TagValidation',
          description:
            'Validation rules (maxTags, minLength, maxLength, pattern, allowDuplicates)',
        },
        {
          name: 'options',
          type: 'AutocompleteOption[]',
          description: 'Options for autocomplete mode',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the input is disabled',
          defaultValue: 'false',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          description: 'Whether the input is read-only',
          defaultValue: 'false',
        },
      ],
    },
    {
      component: 'TagsInputTag',
      description: 'Individual tag wrapper component.',
      props: [
        {
          name: 'index',
          type: 'number',
          description: 'The index of this tag in the array',
          required: true,
        },
        {
          name: 'variant',
          type: '"default" | "primary" | "outline"',
          description: 'Override the tag variant',
        },
      ],
    },
    {
      component: 'TagsInputTagText',
      description: 'Text content of a tag.',
      props: [],
    },
    {
      component: 'TagsInputTagRemove',
      description: 'Remove button for a tag.',
      props: [],
    },
    {
      component: 'TagsInputInput',
      description: 'The text input for adding new tags.',
      props: [
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text',
        },
      ],
    },
    {
      component: 'TagsInputClear',
      description: 'Button to clear all tags.',
      props: [],
    },
  ],
  related: ['input', 'badge', 'form'],
};
