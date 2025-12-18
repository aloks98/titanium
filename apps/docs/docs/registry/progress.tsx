import { Progress, ProgressCircle, ProgressRadial } from '@e412/titanium';
import type { ComponentDocumentation } from '../types';

export const progressDocumentation: ComponentDocumentation = {
  id: 'progress',
  name: 'Progress',
  description:
    'Displays an indicator showing the completion progress of a task.',
  category: 'feedback',
  simpleExample: {
    example: (
      <div className="w-full max-w-md">
        <Progress value={60} />
      </div>
    ),
    code: `import { Progress } from '@e412/titanium';

export function ProgressDemo() {
  return <Progress value={60} />;
}`,
  },
  examples: [
    {
      id: 'values',
      title: 'Different Values',
      description: 'Progress bars at different completion levels.',
      example: (
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">0%</p>
            <Progress value={0} />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">25%</p>
            <Progress value={25} />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">50%</p>
            <Progress value={50} />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">75%</p>
            <Progress value={75} />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">100%</p>
            <Progress value={100} />
          </div>
        </div>
      ),
      code: `import { Progress } from '@e412/titanium';

export function ProgressValuesDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  );
}`,
    },
    {
      id: 'custom-colors',
      title: 'Custom Colors',
      description: 'Progress with custom indicator colors.',
      example: (
        <div className="w-full max-w-md space-y-4">
          <Progress value={60} indicatorClassName="bg-green-500" />
          <Progress value={45} indicatorClassName="bg-yellow-500" />
          <Progress value={30} indicatorClassName="bg-red-500" />
          <Progress value={80} indicatorClassName="bg-blue-500" />
        </div>
      ),
      code: `import { Progress } from '@e412/titanium';

export function ProgressColorsDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Progress value={60} indicatorClassName="bg-green-500" />
      <Progress value={45} indicatorClassName="bg-yellow-500" />
      <Progress value={30} indicatorClassName="bg-red-500" />
      <Progress value={80} indicatorClassName="bg-blue-500" />
    </div>
  );
}`,
    },
    {
      id: 'circle',
      title: 'Circle Progress',
      description: 'Circular progress indicator.',
      example: (
        <div className="flex items-center gap-6">
          <ProgressCircle value={25} size={60} strokeWidth={6}>
            <span className="text-sm font-medium">25%</span>
          </ProgressCircle>
          <ProgressCircle value={50} size={60} strokeWidth={6}>
            <span className="text-sm font-medium">50%</span>
          </ProgressCircle>
          <ProgressCircle value={75} size={60} strokeWidth={6}>
            <span className="text-sm font-medium">75%</span>
          </ProgressCircle>
          <ProgressCircle value={100} size={60} strokeWidth={6}>
            <span className="text-sm font-medium">100%</span>
          </ProgressCircle>
        </div>
      ),
      code: `import { ProgressCircle } from '@e412/titanium';

export function ProgressCircleDemo() {
  return (
    <div className="flex items-center gap-6">
      <ProgressCircle value={25} size={60} strokeWidth={6}>
        <span className="text-sm font-medium">25%</span>
      </ProgressCircle>
      <ProgressCircle value={50} size={60} strokeWidth={6}>
        <span className="text-sm font-medium">50%</span>
      </ProgressCircle>
      <ProgressCircle value={75} size={60} strokeWidth={6}>
        <span className="text-sm font-medium">75%</span>
      </ProgressCircle>
    </div>
  );
}`,
    },
    {
      id: 'circle-sizes',
      title: 'Circle Sizes',
      description: 'Circular progress in different sizes.',
      example: (
        <div className="flex items-center gap-6">
          <ProgressCircle value={65} size={40} strokeWidth={4} />
          <ProgressCircle value={65} size={60} strokeWidth={5} />
          <ProgressCircle value={65} size={80} strokeWidth={6} />
          <ProgressCircle value={65} size={100} strokeWidth={8}>
            <span className="text-lg font-bold">65%</span>
          </ProgressCircle>
        </div>
      ),
      code: `import { ProgressCircle } from '@e412/titanium';

export function ProgressCircleSizesDemo() {
  return (
    <div className="flex items-center gap-6">
      <ProgressCircle value={65} size={40} strokeWidth={4} />
      <ProgressCircle value={65} size={60} strokeWidth={5} />
      <ProgressCircle value={65} size={80} strokeWidth={6} />
      <ProgressCircle value={65} size={100} strokeWidth={8}>
        <span className="text-lg font-bold">65%</span>
      </ProgressCircle>
    </div>
  );
}`,
    },
    {
      id: 'radial',
      title: 'Radial Progress',
      description: 'Semi-circular radial progress indicator.',
      example: (
        <div className="flex items-center gap-6">
          <ProgressRadial value={30} size={100} strokeWidth={8} showLabel />
          <ProgressRadial value={60} size={100} strokeWidth={8} showLabel />
          <ProgressRadial value={90} size={100} strokeWidth={8} showLabel />
        </div>
      ),
      code: `import { ProgressRadial } from '@e412/titanium';

export function ProgressRadialDemo() {
  return (
    <div className="flex items-center gap-6">
      <ProgressRadial value={30} size={100} strokeWidth={8} showLabel />
      <ProgressRadial value={60} size={100} strokeWidth={8} showLabel />
      <ProgressRadial value={90} size={100} strokeWidth={8} showLabel />
    </div>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Progress',
      description: 'Linear progress bar component.',
      props: [
        {
          name: 'value',
          type: 'number',
          description: 'The progress value (0-100)',
          defaultValue: '0',
        },
        {
          name: 'indicatorClassName',
          type: 'string',
          description: 'Additional CSS classes for the progress indicator',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes for the container',
        },
      ],
    },
    {
      component: 'ProgressCircle',
      description: 'Circular progress indicator.',
      props: [
        {
          name: 'value',
          type: 'number',
          description: 'The progress value (0-100)',
          defaultValue: '0',
        },
        {
          name: 'size',
          type: 'number',
          description: 'Size of the circle in pixels',
          defaultValue: '48',
        },
        {
          name: 'strokeWidth',
          type: 'number',
          description: 'Width of the progress stroke',
          defaultValue: '4',
        },
        {
          name: 'indicatorClassName',
          type: 'string',
          description: 'Additional CSS classes for the indicator',
        },
        {
          name: 'trackClassName',
          type: 'string',
          description: 'Additional CSS classes for the track',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Content to display in the center',
        },
      ],
    },
    {
      component: 'ProgressRadial',
      description: 'Semi-circular radial progress indicator.',
      props: [
        {
          name: 'value',
          type: 'number',
          description: 'The progress value (0-100)',
          defaultValue: '0',
        },
        {
          name: 'size',
          type: 'number',
          description: 'Size of the radial in pixels',
          defaultValue: '120',
        },
        {
          name: 'strokeWidth',
          type: 'number',
          description: 'Width of the progress stroke',
          defaultValue: '8',
        },
        {
          name: 'startAngle',
          type: 'number',
          description: 'Start angle in degrees',
          defaultValue: '-90',
        },
        {
          name: 'endAngle',
          type: 'number',
          description: 'End angle in degrees',
          defaultValue: '90',
        },
        {
          name: 'showLabel',
          type: 'boolean',
          description: 'Whether to show percentage label',
          defaultValue: 'false',
        },
        {
          name: 'children',
          type: 'ReactNode',
          description: 'Custom content to display',
        },
      ],
    },
  ],
};
