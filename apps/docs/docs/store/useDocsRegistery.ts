import { create } from 'zustand';
import { accordionDocumentation } from '../registry/accordion.tsx';
import { alertDocumentation } from '../registry/alert.tsx';
import { buttonDocumentation } from '../registry/button.tsx';
import type {
  ComponentCategory,
  ComponentDocumentation,
  SidebarItem,
} from '../types.ts';

interface DocsRegistry {
  docs: Record<string, ComponentDocumentation>;
  selectedDoc: ComponentDocumentation;
  setSelectedDoc: (docId: string) => void;
  groupedSidebarItems: Record<ComponentCategory, SidebarItem[]>;
}

const componentRegistry: Record<string, ComponentDocumentation> = {
  accordion: accordionDocumentation,
  alert: alertDocumentation,
  button: buttonDocumentation,
};

const groupedSidebarItems = Object.values(componentRegistry).reduce(
  (acc, doc) => {
    const item: SidebarItem = {
      id: doc.id,
      name: doc.name,
      category: doc.category,
    };

    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(item);
    return acc;
  },
  {} as Record<ComponentCategory, SidebarItem[]>,
);

export const useDocsRegistry = create<DocsRegistry>()((set) => ({
  docs: componentRegistry,
  selectedDoc: componentRegistry.accordion,
  groupedSidebarItems,
  setSelectedDoc: (docId: string) =>
    set((state) => ({
      selectedDoc: state.docs[docId],
    })),
}));
