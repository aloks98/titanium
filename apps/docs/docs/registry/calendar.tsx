import { Calendar } from '@e412/titanium';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import type { ComponentDocumentation } from '../types';

function CalendarControlledExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}

function CalendarRangeExample() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}

function CalendarMultipleExample() {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 2)),
    new Date(new Date().setDate(new Date().getDate() + 5)),
  ]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}

export const calendarDocumentation: ComponentDocumentation = {
  id: 'calendar',
  name: 'Calendar',
  description:
    'A date picker calendar component built on react-day-picker.',
  category: 'data-display',
  simpleExample: {
    example: <CalendarControlledExample />,
    code: `import { useState } from 'react';
import { Calendar } from '@e412/titanium';

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}`,
  },
  examples: [
    {
      id: 'range',
      title: 'Date Range',
      description: 'Calendar for selecting a date range.',
      example: <CalendarRangeExample />,
      code: `import { useState } from 'react';
import { Calendar } from '@e412/titanium';
import type { DateRange } from 'react-day-picker';

export function CalendarRangeDemo() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-md border"
    />
  );
}`,
    },
    {
      id: 'multiple',
      title: 'Multiple Selection',
      description: 'Calendar for selecting multiple dates.',
      example: <CalendarMultipleExample />,
      code: `import { useState } from 'react';
import { Calendar } from '@e412/titanium';

export function CalendarMultipleDemo() {
  const [dates, setDates] = useState<Date[] | undefined>([
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 2)),
  ]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}`,
    },
    {
      id: 'disabled-dates',
      title: 'Disabled Dates',
      description: 'Calendar with specific dates disabled.',
      example: (
        <Calendar
          mode="single"
          disabled={[
            { dayOfWeek: [0, 6] },
            { before: new Date() },
          ]}
          className="rounded-md border"
        />
      ),
      code: `import { Calendar } from '@e412/titanium';

export function CalendarDisabledDemo() {
  return (
    <Calendar
      mode="single"
      disabled={[
        { dayOfWeek: [0, 6] }, // Disable weekends
        { before: new Date() }, // Disable past dates
      ]}
      className="rounded-md border"
    />
  );
}`,
    },
    {
      id: 'without-outside-days',
      title: 'Without Outside Days',
      description: 'Calendar without days from adjacent months.',
      example: (
        <Calendar
          mode="single"
          showOutsideDays={false}
          className="rounded-md border"
        />
      ),
      code: `import { Calendar } from '@e412/titanium';

export function CalendarNoOutsideDaysDemo() {
  return (
    <Calendar
      mode="single"
      showOutsideDays={false}
      className="rounded-md border"
    />
  );
}`,
    },
  ],
  api: [
    {
      component: 'Calendar',
      description: 'A calendar component for date selection.',
      props: [
        {
          name: 'mode',
          type: '"single" | "multiple" | "range"',
          description: 'The selection mode',
          defaultValue: '"single"',
        },
        {
          name: 'selected',
          type: 'Date | Date[] | DateRange | undefined',
          description: 'The selected date(s)',
        },
        {
          name: 'onSelect',
          type: '(date: Date | Date[] | DateRange | undefined) => void',
          description: 'Callback when selection changes',
        },
        {
          name: 'defaultMonth',
          type: 'Date',
          description: 'The initial month to display',
        },
        {
          name: 'disabled',
          type: 'Matcher | Matcher[]',
          description: 'Dates to disable (Date, DateRange, dayOfWeek, etc.)',
        },
        {
          name: 'showOutsideDays',
          type: 'boolean',
          description: 'Show days from adjacent months',
          defaultValue: 'true',
        },
        {
          name: 'numberOfMonths',
          type: 'number',
          description: 'Number of months to display',
          defaultValue: '1',
        },
        {
          name: 'showWeekNumber',
          type: 'boolean',
          description: 'Show week numbers',
          defaultValue: 'false',
        },
        {
          name: 'weekStartsOn',
          type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
          description: 'The day the week starts on (0 = Sunday)',
          defaultValue: '0',
        },
        {
          name: 'fromDate',
          type: 'Date',
          description: 'Earliest selectable date',
        },
        {
          name: 'toDate',
          type: 'Date',
          description: 'Latest selectable date',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
        {
          name: 'classNames',
          type: 'object',
          description: 'Custom class names for internal elements',
        },
      ],
    },
  ],
};
