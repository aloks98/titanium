import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const inputOtpDocumentation: ComponentDocumentation = {
  id: 'input-otp',
  name: 'Input OTP',
  description: 'A one-time password input component for verification codes.',
  category: 'form',
  simpleExample: {
    example: (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
    code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@e412/titanium';

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
  },
  examples: [
    {
      id: 'with-separator',
      title: 'With Separator',
      description: 'OTP input with a separator between groups.',
      example: (
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      ),
      code: `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@e412/titanium';

export function InputOTPWithSeparatorDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    },
    {
      id: 'four-digits',
      title: 'Four Digits',
      description: 'Common 4-digit verification code pattern.',
      example: (
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      ),
      code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@e412/titanium';

export function InputOTPFourDigitsDemo() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    },
    {
      id: 'pattern',
      title: 'Pattern Validation',
      description: 'OTP input with pattern validation for digits only.',
      example: (
        <InputOTP maxLength={6} pattern="^[0-9]+$">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      ),
      code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@e412/titanium';

export function InputOTPPatternDemo() {
  return (
    <InputOTP maxLength={6} pattern="^[0-9]+$">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'OTP input in disabled state.',
      example: (
        <InputOTP maxLength={6} disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      ),
      code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@e412/titanium';

export function InputOTPDisabledDemo() {
  return (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    },
  ],
  api: [
    {
      component: 'InputOTP',
      description: 'The main OTP input container.',
      props: [
        {
          name: 'maxLength',
          type: 'number',
          description: 'The maximum number of characters',
          required: true,
        },
        {
          name: 'value',
          type: 'string',
          description: 'The controlled value',
        },
        {
          name: 'defaultValue',
          type: 'string',
          description: 'The default value for uncontrolled usage',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          description: 'Callback when value changes',
        },
        {
          name: 'onComplete',
          type: '(value: string) => void',
          description: 'Callback when all slots are filled',
        },
        {
          name: 'pattern',
          type: 'string',
          description: 'Regex pattern for input validation',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the input is disabled',
          defaultValue: 'false',
        },
        {
          name: 'containerClassName',
          type: 'string',
          description: 'Additional CSS classes for the container',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'InputOTPGroup',
      description: 'Groups multiple OTP slots together.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'InputOTPSlot',
      description: 'An individual input slot for a single character.',
      props: [
        {
          name: 'index',
          type: 'number',
          description: 'The index of this slot (0-based)',
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
      component: 'InputOTPSeparator',
      description: 'A visual separator between groups of slots.',
      props: [
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
  ],
};
