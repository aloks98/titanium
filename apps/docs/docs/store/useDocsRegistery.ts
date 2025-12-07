import {ComponentDocumentation, SidebarItem} from "../types.ts";
import {accordionDocumentation} from "../registry/accordion.tsx";
import {alertDocumentation} from "../registry/alert.tsx";
import {buttonDocumentation} from "../registry/button.tsx";
import {create} from "zustand";

interface DocsRegistry {
    docs: Record<string, ComponentDocumentation>;
    sidebarItems: SidebarItem[];
    selectedDoc: ComponentDocumentation;
    setSelectedDoc: (docId: string) => void;
}

const componentRegistry: Record<string, ComponentDocumentation> = {
    accordion: accordionDocumentation,
    alert: alertDocumentation,
    button: buttonDocumentation,
};

export const useDocsRegistry = create<DocsRegistry>()((set) => {
    return {
        docs: componentRegistry,
        selectedDoc: componentRegistry['accordion'],
        sidebarItems: Object.values(componentRegistry).map((doc) => ({
            id: doc.id,
            name: doc.name,
            category: doc.category,
        })),
        setSelectedDoc: (docId: string) => set((state) => ({
            selectedDoc: state.docs[docId],
        }))
    }
})