import { Textarea, Label } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const textareaDocumentation: ComponentDocumentation = {
  id: 'textarea',
  name: 'Textarea',
  description: 'Displays a form textarea for multi-line text input.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="w-full max-w-sm">
        <Textarea placeholder="Type your message here." />
      </div>
    ),
    code: `import { Textarea } from '@e412/titanium';

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}`,
  },
  examples: [
    {
      id: 'sizes',
      title: 'Sizes',
      description: 'Textarea in different sizes.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Textarea variant="sm" placeholder="Small textarea" />
          <Textarea variant="md" placeholder="Medium textarea (default)" />
          <Textarea variant="lg" placeholder="Large textarea" />
        </div>
      ),
      code: `import { Textarea } from '@e412/titanium';

export function TextareaSizesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Textarea variant="sm" placeholder="Small textarea" />
      <Textarea variant="md" placeholder="Medium textarea" />
      <Textarea variant="lg" placeholder="Large textarea" />
    </div>
  );
}`,
    },
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Textarea with an associated label.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            rows={4}
          />
        </div>
      ),
      code: `import { Textarea, Label } from '@e412/titanium';

export function TextareaWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." rows={4} />
    </div>
  );
}`,
    },
    {
      id: 'with-text',
      title: 'With Helper Text',
      description: 'Textarea with helper text below.',
      example: (
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
          <p className="text-sm text-muted-foreground">
            You can write up to 500 characters.
          </p>
        </div>
      ),
      code: `import { Textarea, Label } from '@e412/titanium';

export function TextareaWithHelperDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
      <p className="text-sm text-muted-foreground">
        You can write up to 500 characters.
      </p>
    </div>
  );
}`,
    },
    {
      id: 'states',
      title: 'States',
      description: 'Textarea in different states.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Textarea placeholder="Default" />
          <Textarea placeholder="Disabled" disabled />
          <Textarea
            placeholder="Read only"
            readOnly
            value="This is read-only content"
          />
          <Textarea placeholder="Invalid" aria-invalid="true" />
        </div>
      ),
      code: `import { Textarea } from '@e412/titanium';

export function TextareaStatesDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Read only" readOnly value="Read-only" />
      <Textarea placeholder="Invalid" aria-invalid="true" />
    </div>
  );
}`,
    },
    {
      id: 'resizable',
      title: 'Resizable',
      description: 'Control the resize behavior of textarea.',
      example: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="grid gap-1.5">
            <Label>Vertical resize only</Label>
            <Textarea
              placeholder="Resize vertically"
              className="resize-y"
              rows={3}
            />
          </div>
          <div className="grid gap-1.5">
            <Label>No resize</Label>
            <Textarea
              placeholder="Cannot resize"
              className="resize-none"
              rows={3}
            />
          </div>
        </div>
      ),
      code: `import { Textarea, Label } from '@e412/titanium';

export function TextareaResizableDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label>Vertical resize only</Label>
        <Textarea placeholder="Resize vertically" className="resize-y" rows={3} />
      </div>
      <div className="grid gap-1.5">
        <Label>No resize</Label>
        <Textarea placeholder="Cannot resize" className="resize-none" rows={3} />
      </div>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Textarea',
      description: 'The textarea input component.',
      props: [
        {
          name: 'variant',
          type: '"sm" | "md" | "lg"',
          description: 'The size variant of the textarea',
          defaultValue: '"md"',
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'Placeholder text',
        },
        {
          name: 'rows',
          type: 'number',
          description: 'Number of visible text lines',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the textarea is disabled',
          defaultValue: 'false',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          description: 'Whether the textarea is read-only',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes (use for resize behavior)',
        },
      ],
    },
  ],
};
