import {
  type ComponentDocumentation,
  type DocumentationCategory,
} from './types';
import { accordionDocumentation } from './registry/accordion';
import { alertDocumentation } from './registry/alert';
import { buttonDocumentation } from './registry/button';

// Registry of all component documentation
export const componentRegistry: Record<string, ComponentDocumentation> = {
  accordion: accordionDocumentation,
  alert: alertDocumentation,
  button: buttonDocumentation,
};

// Get all components
export const getAllComponents = (): ComponentDocumentation[] => {
  return Object.values(componentRegistry);
};

// Get component by ID
export const getComponentById = (
  id: string,
): ComponentDocumentation | undefined => {
  return componentRegistry[id];
};

// Get components by category
export const getComponentsByCategory = (
  category: ComponentDocumentation['category'],
): ComponentDocumentation[] => {
  return getAllComponents().filter(
    (component) => component.category === category,
  );
};

// Documentation categories
export const documentationCategories: DocumentationCategory[] = [
  {
    id: 'form',
    name: 'Form',
    description: 'Form controls and input components',
    components: getComponentsByCategory('form'),
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Layout and structural components',
    components: getComponentsByCategory('layout'),
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'User feedback and notification components',
    components: getComponentsByCategory('feedback'),
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Navigation and routing components',
    components: getComponentsByCategory('navigation'),
  },
  {
    id: 'typography',
    name: 'Typography',
    description: 'Text and typography components',
    components: getComponentsByCategory('typography'),
  },
  {
    id: 'overlay',
    name: 'Overlay',
    description: 'Overlay and modal components',
    components: getComponentsByCategory('overlay'),
  },
  {
    id: 'data-display',
    name: 'Data Display',
    description: 'Data display and presentation components',
    components: getComponentsByCategory('data-display'),
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Miscellaneous components',
    components: getComponentsByCategory('other'),
  },
];

// Get sidebar navigation items
export const getSidebarNavigationItems = () => {
  return documentationCategories
    .filter((category) => category.components.length > 0)
    .map((category) => ({
      id: category.id,
      name: category.name,
      components: category.components.map((component) => ({
        id: component.id,
        name: component.name,
      })),
    }));
};
