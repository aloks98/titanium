import { Label, Slider, SliderThumb } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const sliderDocumentation: ComponentDocumentation = {
  id: 'slider',
  name: 'Slider',
  description:
    'An input where the user selects a value from within a given range.',
  category: 'form',
  simpleExample: {
    example: (
      <div className="w-full max-w-sm">
        <Slider defaultValue={[50]} max={100} step={1}>
          <SliderThumb />
        </Slider>
      </div>
    ),
    code: `import { Slider, SliderThumb } from '@e412/titanium';

export function SliderDemo() {
  return (
    <Slider defaultValue={[50]} max={100} step={1}>
      <SliderThumb />
    </Slider>
  );
}`,
  },
  examples: [
    {
      id: 'with-label',
      title: 'With Label',
      description: 'Slider with a label.',
      example: (
        <div className="grid w-full max-w-sm gap-2">
          <div className="flex justify-between">
            <Label>Volume</Label>
            <span className="text-sm text-muted-foreground">50%</span>
          </div>
          <Slider defaultValue={[50]} max={100} step={1}>
            <SliderThumb />
          </Slider>
        </div>
      ),
      code: `import { Slider, SliderThumb, Label } from '@e412/titanium';

export function SliderWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1}>
        <SliderThumb />
      </Slider>
    </div>
  );
}`,
    },
    {
      id: 'range',
      title: 'Range Slider',
      description: 'Slider with two thumbs for selecting a range.',
      example: (
        <div className="grid w-full max-w-sm gap-2">
          <Label>Price Range</Label>
          <Slider defaultValue={[25, 75]} max={100} step={1}>
            <SliderThumb />
            <SliderThumb />
          </Slider>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$25</span>
            <span>$75</span>
          </div>
        </div>
      ),
      code: `import { Slider, SliderThumb, Label } from '@e412/titanium';

export function SliderRangeDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label>Price Range</Label>
      <Slider defaultValue={[25, 75]} max={100} step={1}>
        <SliderThumb />
        <SliderThumb />
      </Slider>
    </div>
  );
}`,
    },
    {
      id: 'steps',
      title: 'With Steps',
      description: 'Slider with defined step increments.',
      example: (
        <div className="grid w-full max-w-sm gap-2">
          <Label>Quality (steps of 25)</Label>
          <Slider defaultValue={[50]} max={100} step={25}>
            <SliderThumb />
          </Slider>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      ),
      code: `import { Slider, SliderThumb, Label } from '@e412/titanium';

export function SliderStepsDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label>Quality (steps of 25)</Label>
      <Slider defaultValue={[50]} max={100} step={25}>
        <SliderThumb />
      </Slider>
    </div>
  );
}`,
    },
    {
      id: 'disabled',
      title: 'Disabled',
      description: 'Slider in disabled state.',
      example: (
        <div className="grid w-full max-w-sm gap-2">
          <Label>Disabled Slider</Label>
          <Slider defaultValue={[50]} max={100} step={1} disabled>
            <SliderThumb />
          </Slider>
        </div>
      ),
      code: `import { Slider, SliderThumb, Label } from '@e412/titanium';

export function SliderDisabledDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label>Disabled Slider</Label>
      <Slider defaultValue={[50]} max={100} step={1} disabled>
        <SliderThumb />
      </Slider>
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Slider',
      description: 'The slider root component.',
      props: [
        {
          name: 'value',
          type: 'number[]',
          description: 'The controlled value (array for range sliders)',
        },
        {
          name: 'defaultValue',
          type: 'number[]',
          description: 'The default value for uncontrolled usage',
        },
        {
          name: 'onValueChange',
          type: '(value: number[]) => void',
          description: 'Callback when value changes',
        },
        {
          name: 'min',
          type: 'number',
          description: 'The minimum value',
          defaultValue: '0',
        },
        {
          name: 'max',
          type: 'number',
          description: 'The maximum value',
          defaultValue: '100',
        },
        {
          name: 'step',
          type: 'number',
          description: 'The step increment',
          defaultValue: '1',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the slider is disabled',
          defaultValue: 'false',
        },
        {
          name: 'orientation',
          type: '"horizontal" | "vertical"',
          description: 'The orientation of the slider',
          defaultValue: '"horizontal"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'SliderThumb',
      description: 'The draggable thumb element.',
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
