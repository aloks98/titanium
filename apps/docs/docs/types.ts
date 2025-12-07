import type { ReactNode } from 'react';

export interface ComponentExample {
  id: string;
  title: string;
  description?: string;
  example: ReactNode;
  code: string;
}

export interface ComponentAPI {
  component: string;
  description: string;
  props: ComponentProp[];
}

export interface ComponentProp {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  defaultValue?: string;
}

export type ComponentCategory =
  | 'form'
  | 'layout'
  | 'feedback'
  | 'navigation'
  | 'typography'
  | 'overlay'
  | 'data-display'
  | 'other';

export interface ComponentDocumentation {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  simpleExample: {
    example: ReactNode;
    code: string;
  };
  examples: ComponentExample[];
  api: ComponentAPI[];
  related?: string[];
}

export interface DocumentationCategory {
  id: string;
  name: string;
  description: string;
  components: ComponentDocumentation[];
}

export interface DocumentationCategory {
  id: string;
  name: string;
  description: string;
  components: ComponentDocumentation[];
}

export interface SidebarItem {
  id: string;
  name: string;
  category: ComponentCategory;
}

export const categoryNames: Record<ComponentCategory, string> = {
  form: 'Form',
  layout: 'Layout',
  feedback: 'Feedback',
  navigation: 'Navigation',
  typography: 'Typography',
  overlay: 'Overlay',
  'data-display': 'Data Display',
  other: 'Other',
};
