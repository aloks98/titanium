import {
  DateField,
  DateInput,
  DateSegment,
  Label,
  TimeField,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const datefieldDocumentation: ComponentDocumentation = {
  id: 'datefield',
  name: 'Date Field',
  description:
    'Accessible date and time input fields built with react-aria-components.',
  category: 'form',
  simpleExample: {
    example: (
      <DateField className="space-y-2">
        <Label>Date of birth</Label>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateField>
    ),
    code: `import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from '@e412/titanium';

export function DateFieldDemo() {
  return (
    <DateField className="space-y-2">
      <Label>Date of birth</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </DateField>
  );
}`,
  },
  examples: [
    {
      id: 'time-field',
      title: 'Time Field',
      description: 'A time input field.',
      example: (
        <TimeField className="space-y-2">
          <Label>Appointment time</Label>
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </TimeField>
      ),
      code: `import {
  TimeField,
  DateInput,
  DateSegment,
  Label,
} from '@e412/titanium';

export function TimeFieldDemo() {
  return (
    <TimeField className="space-y-2">
      <Label>Appointment time</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </TimeField>
  );
}`,
    },
    {
      id: 'with-granularity',
      title: 'With Granularity',
      description: 'Date field with hour granularity for date and time.',
      example: (
        <DateField granularity="hour" className="space-y-2">
          <Label>Event date and time</Label>
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateField>
      ),
      code: `import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from '@e412/titanium';

export function DateFieldGranularityDemo() {
  return (
    <DateField granularity="hour" className="space-y-2">
      <Label>Event date and time</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </DateField>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'A disabled date field.',
      example: (
        <DateField isDisabled className="space-y-2">
          <Label>Locked date</Label>
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateField>
      ),
      code: `import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from '@e412/titanium';

export function DateFieldDisabledDemo() {
  return (
    <DateField isDisabled className="space-y-2">
      <Label>Locked date</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </DateField>
  );
}`,
    },
    {
      id: 'read-only',
      title: 'Read Only',
      description: 'A read-only date field.',
      example: (
        <DateField isReadOnly className="space-y-2">
          <Label>Created at</Label>
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateField>
      ),
      code: `import {
  DateField,
  DateInput,
  DateSegment,
  Label,
} from '@e412/titanium';

export function DateFieldReadOnlyDemo() {
  return (
    <DateField isReadOnly className="space-y-2">
      <Label>Created at</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
    </DateField>
  );
}`,
    },
  ],
  api: [
    {
      component: 'DateField',
      description: 'A date input field with segment-based editing.',
      props: [
        {
          name: 'value',
          type: 'DateValue',
          description: 'The controlled date value',
        },
        {
          name: 'defaultValue',
          type: 'DateValue',
          description: 'The default date value',
        },
        {
          name: 'onChange',
          type: '(value: DateValue) => void',
          description: 'Callback when date changes',
        },
        {
          name: 'granularity',
          type: '"day" | "hour" | "minute" | "second"',
          description: 'The granularity of the date',
          defaultValue: '"day"',
        },
        {
          name: 'minValue',
          type: 'DateValue',
          description: 'The minimum allowed date',
        },
        {
          name: 'maxValue',
          type: 'DateValue',
          description: 'The maximum allowed date',
        },
        {
          name: 'isDisabled',
          type: 'boolean',
          description: 'Whether the field is disabled',
          defaultValue: 'false',
        },
        {
          name: 'isReadOnly',
          type: 'boolean',
          description: 'Whether the field is read-only',
          defaultValue: 'false',
        },
        {
          name: 'isRequired',
          type: 'boolean',
          description: 'Whether the field is required',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TimeField',
      description: 'A time input field with segment-based editing.',
      props: [
        {
          name: 'value',
          type: 'TimeValue',
          description: 'The controlled time value',
        },
        {
          name: 'defaultValue',
          type: 'TimeValue',
          description: 'The default time value',
        },
        {
          name: 'onChange',
          type: '(value: TimeValue) => void',
          description: 'Callback when time changes',
        },
        {
          name: 'granularity',
          type: '"hour" | "minute" | "second"',
          description: 'The granularity of the time',
          defaultValue: '"minute"',
        },
        {
          name: 'hourCycle',
          type: '12 | 24',
          description: 'The hour cycle to use',
        },
        {
          name: 'isDisabled',
          type: 'boolean',
          description: 'Whether the field is disabled',
          defaultValue: 'false',
        },
        {
          name: 'isReadOnly',
          type: 'boolean',
          description: 'Whether the field is read-only',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DateInput',
      description: 'The input container that renders date segments.',
      props: [
        {
          name: 'children',
          type: '(segment: DateSegmentValue) => ReactNode',
          description: 'Render function for segments',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'DateSegment',
      description: 'An individual segment of the date/time input.',
      props: [
        {
          name: 'segment',
          type: 'DateSegmentValue',
          description: 'The segment data',
          required: true,
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
};
