import {
  Filters,
  createFilter,
  type Filter,
  type FilterFieldConfig,
} from '@e412/titanium';
import { User, Calendar, Tag, Mail, Hash, ToggleLeft } from 'lucide-react';
import { useState } from 'react';
import type { ComponentDocumentation } from '../types';

const sampleFields: FilterFieldConfig<string>[] = [
  {
    key: 'status',
    label: 'Status',
    icon: <Tag className="size-4" />,
    type: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
    ],
  },
  {
    key: 'name',
    label: 'Name',
    icon: <User className="size-4" />,
    type: 'text',
    placeholder: 'Enter name...',
  },
  {
    key: 'date',
    label: 'Date',
    icon: <Calendar className="size-4" />,
    type: 'date',
  },
];

const FiltersDemo = () => {
  const [filters, setFilters] = useState<Filter<string>[]>([
    createFilter('status', 'is', ['active']),
  ]);

  return (
    <Filters
      filters={filters}
      fields={sampleFields}
      onChange={setFilters}
    />
  );
};

export const filtersDocumentation: ComponentDocumentation = {
  id: 'filters',
  name: 'Filters',
  description:
    'A comprehensive filtering component with multiple field types and operators.',
  category: 'data-display',
  simpleExample: {
    example: <FiltersDemo />,
    code: `import {
  Filters,
  createFilter,
  type Filter,
  type FilterFieldConfig,
} from '@e412/titanium';
import { User, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';

const fields: FilterFieldConfig<string>[] = [
  {
    key: 'status',
    label: 'Status',
    icon: <Tag className="size-4" />,
    type: 'select',
    options: [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
    ],
  },
  {
    key: 'name',
    label: 'Name',
    icon: <User className="size-4" />,
    type: 'text',
    placeholder: 'Enter name...',
  },
  {
    key: 'date',
    label: 'Date',
    icon: <Calendar className="size-4" />,
    type: 'date',
  },
];

export function FiltersDemo() {
  const [filters, setFilters] = useState<Filter<string>[]>([
    createFilter('status', 'is', ['active']),
  ]);

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
    />
  );
}`,
  },
  examples: [
    {
      id: 'multiple-types',
      title: 'Multiple Field Types',
      description: 'Filters with various field types.',
      example: (() => {
        const MultiTypeDemo = () => {
          const fields: FilterFieldConfig<unknown>[] = [
            {
              key: 'email',
              label: 'Email',
              icon: <Mail className="size-4" />,
              type: 'email',
            },
            {
              key: 'amount',
              label: 'Amount',
              icon: <Hash className="size-4" />,
              type: 'number',
              prefix: '$',
            },
            {
              key: 'active',
              label: 'Active',
              icon: <ToggleLeft className="size-4" />,
              type: 'boolean',
              onLabel: 'Yes',
              offLabel: 'No',
            },
          ];

          const [filters, setFilters] = useState<Filter<unknown>[]>([]);

          return (
            <Filters
              filters={filters}
              fields={fields}
              onChange={setFilters}
            />
          );
        };
        return <MultiTypeDemo />;
      })(),
      code: `import {
  Filters,
  type Filter,
  type FilterFieldConfig,
} from '@e412/titanium';
import { Mail, Hash, ToggleLeft } from 'lucide-react';
import { useState } from 'react';

const fields: FilterFieldConfig<unknown>[] = [
  {
    key: 'email',
    label: 'Email',
    icon: <Mail className="size-4" />,
    type: 'email',
  },
  {
    key: 'amount',
    label: 'Amount',
    icon: <Hash className="size-4" />,
    type: 'number',
    prefix: '$',
  },
  {
    key: 'active',
    label: 'Active',
    icon: <ToggleLeft className="size-4" />,
    type: 'boolean',
    onLabel: 'Yes',
    offLabel: 'No',
  },
];

export function FiltersMultiTypeDemo() {
  const [filters, setFilters] = useState<Filter<unknown>[]>([]);

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
    />
  );
}`,
    },
    {
      id: 'solid-variant',
      title: 'Solid Variant',
      description: 'Filters with solid visual style.',
      example: (() => {
        const SolidDemo = () => {
          const [filters, setFilters] = useState<Filter<string>[]>([
            createFilter('status', 'is', ['active']),
          ]);

          return (
            <Filters
              filters={filters}
              fields={sampleFields}
              onChange={setFilters}
              variant="solid"
            />
          );
        };
        return <SolidDemo />;
      })(),
      code: `import { Filters, createFilter, type Filter } from '@e412/titanium';
import { useState } from 'react';

export function FiltersSolidDemo() {
  const [filters, setFilters] = useState<Filter<string>[]>([
    createFilter('status', 'is', ['active']),
  ]);

  return (
    <Filters
      filters={filters}
      fields={fields}
      onChange={setFilters}
      variant="solid"
    />
  );
}`,
    },
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Filters in different sizes.',
      example: (() => {
        const SizesDemo = () => {
          const [filters, setFilters] = useState<Filter<string>[]>([
            createFilter('status', 'is', ['active']),
          ]);

          return (
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Small</p>
                <Filters
                  filters={filters}
                  fields={sampleFields}
                  onChange={setFilters}
                  size="sm"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Medium</p>
                <Filters
                  filters={filters}
                  fields={sampleFields}
                  onChange={setFilters}
                  size="md"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Large</p>
                <Filters
                  filters={filters}
                  fields={sampleFields}
                  onChange={setFilters}
                  size="lg"
                />
              </div>
            </div>
          );
        };
        return <SizesDemo />;
      })(),
      code: `import { Filters, type Filter } from '@e412/titanium';
import { useState } from 'react';

export function FiltersSizesDemo() {
  const [filters, setFilters] = useState<Filter<string>[]>([]);

  return (
    <div className="space-y-4">
      <Filters filters={filters} fields={fields} onChange={setFilters} size="sm" />
      <Filters filters={filters} fields={fields} onChange={setFilters} size="md" />
      <Filters filters={filters} fields={fields} onChange={setFilters} size="lg" />
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Filters',
      description: 'Root filters component.',
      props: [
        {
          name: 'filters',
          type: 'Filter<T>[]',
          description: 'Array of active filters',
          required: true,
        },
        {
          name: 'fields',
          type: 'FilterFieldConfig<T>[]',
          description: 'Array of available filter field configurations',
          required: true,
        },
        {
          name: 'onChange',
          type: '(filters: Filter<T>[]) => void',
          description: 'Callback when filters change',
          required: true,
        },
        {
          name: 'variant',
          type: '"solid" | "outline"',
          description: 'Visual variant',
          defaultValue: '"outline"',
        },
        {
          name: 'size',
          type: '"sm" | "md" | "lg"',
          description: 'Size of filter components',
          defaultValue: '"md"',
        },
        {
          name: 'radius',
          type: '"md" | "full"',
          description: 'Border radius style',
          defaultValue: '"md"',
        },
        {
          name: 'showAddButton',
          type: 'boolean',
          description: 'Show the add filter button',
          defaultValue: 'true',
        },
        {
          name: 'addButtonText',
          type: 'string',
          description: 'Custom text for add button',
        },
        {
          name: 'showSearchInput',
          type: 'boolean',
          description: 'Show search input in field selector',
          defaultValue: 'true',
        },
        {
          name: 'allowMultiple',
          type: 'boolean',
          description: 'Allow multiple filters for same field',
          defaultValue: 'true',
        },
        {
          name: 'i18n',
          type: 'Partial<FilterI18nConfig>',
          description: 'Internationalization config',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'FilterFieldConfig',
      description: 'Configuration for a filter field.',
      props: [
        {
          name: 'key',
          type: 'string',
          description: 'Unique identifier for the field',
        },
        {
          name: 'label',
          type: 'string',
          description: 'Display label for the field',
        },
        {
          name: 'icon',
          type: 'ReactNode',
          description: 'Icon to display with the field',
        },
        {
          name: 'type',
          type: '"select" | "multiselect" | "date" | "daterange" | "text" | "number" | "numberrange" | "boolean" | "email" | "url" | "tel" | "time" | "datetime" | "custom"',
          description: 'The type of filter field',
          defaultValue: '"select"',
        },
        {
          name: 'options',
          type: 'FilterOption<T>[]',
          description: 'Options for select/multiselect fields',
        },
        {
          name: 'operators',
          type: 'FilterOperator[]',
          description: 'Custom operators for the field',
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text for input fields',
        },
        {
          name: 'prefix',
          type: 'string | ReactNode',
          description: 'Prefix element for input',
        },
        {
          name: 'suffix',
          type: 'string | ReactNode',
          description: 'Suffix element for input',
        },
        {
          name: 'pattern',
          type: 'string',
          description: 'Validation pattern regex',
        },
        {
          name: 'min',
          type: 'number',
          description: 'Minimum value for number fields',
        },
        {
          name: 'max',
          type: 'number',
          description: 'Maximum value for number fields',
        },
      ],
    },
    {
      component: 'Filter',
      description: 'A filter object structure.',
      props: [
        {
          name: 'id',
          type: 'string',
          description: 'Unique filter identifier',
        },
        {
          name: 'field',
          type: 'string',
          description: 'Field key this filter applies to',
        },
        {
          name: 'operator',
          type: 'string',
          description: 'Filter operator (is, contains, etc.)',
        },
        {
          name: 'values',
          type: 'T[]',
          description: 'Array of filter values',
        },
      ],
    },
    {
      component: 'createFilter',
      description: 'Helper function to create a filter object.',
      props: [
        {
          name: 'Parameters',
          type: '(field: string, operator?: string, values?: T[])',
          description: 'Creates a filter with auto-generated ID',
        },
        {
          name: 'Returns',
          type: 'Filter<T>',
          description: 'A new filter object',
        },
      ],
    },
  ],
};
