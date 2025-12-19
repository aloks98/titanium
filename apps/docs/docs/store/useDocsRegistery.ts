import { create } from 'zustand';
import { accordionDocumentation } from '../registry/accordion.tsx';
import { alertDocumentation } from '../registry/alert.tsx';
import { alertDialogDocumentation } from '../registry/alert-dialog.tsx';
import { aspectRatioDocumentation } from '../registry/aspect-ratio.tsx';
import { avatarDocumentation } from '../registry/avatar.tsx';
import { badgeDocumentation } from '../registry/badge.tsx';
import { breadcrumbDocumentation } from '../registry/breadcrumb.tsx';
import { buttonDocumentation } from '../registry/button.tsx';
import { calendarDocumentation } from '../registry/calendar.tsx';
import { cardDocumentation } from '../registry/card.tsx';
import { carouselDocumentation } from '../registry/carousel.tsx';
import { checkboxDocumentation } from '../registry/checkbox.tsx';
import { collapsibleDocumentation } from '../registry/collapsible.tsx';
import { commandDocumentation } from '../registry/command.tsx';
import { contextMenuDocumentation } from '../registry/context-menu.tsx';
import { dataGridDocumentation } from '../registry/data-grid.tsx';
import { datefieldDocumentation } from '../registry/datefield.tsx';
import { dialogDocumentation } from '../registry/dialog.tsx';
import { drawerDocumentation } from '../registry/drawer.tsx';
import { dropdownMenuDocumentation } from '../registry/dropdown-menu.tsx';
import { filtersDocumentation } from '../registry/filters.tsx';
import { formDocumentation } from '../registry/form.tsx';
import { hoverCardDocumentation } from '../registry/hover-card.tsx';
import { inputDocumentation } from '../registry/input.tsx';
import { inputOtpDocumentation } from '../registry/input-otp.tsx';
import { kanbanDocumentation } from '../registry/kanban.tsx';
import { kbdDocumentation } from '../registry/kbd.tsx';
import { labelDocumentation } from '../registry/label.tsx';
import { marqueeDocumentation } from '../registry/marquee.tsx';
import { menubarDocumentation } from '../registry/menubar.tsx';
import { navigationMenuDocumentation } from '../registry/navigation-menu.tsx';
import { paginationDocumentation } from '../registry/pagination.tsx';
import { popoverDocumentation } from '../registry/popover.tsx';
import { progressDocumentation } from '../registry/progress.tsx';
import { radioGroupDocumentation } from '../registry/radio-group.tsx';
import { resizableDocumentation } from '../registry/resizable.tsx';
import { scrollAreaDocumentation } from '../registry/scroll-area.tsx';
import { scrollspyDocumentation } from '../registry/scrollspy.tsx';
import { selectDocumentation } from '../registry/select.tsx';
import { separatorDocumentation } from '../registry/separator.tsx';
import { sheetDocumentation } from '../registry/sheet.tsx';
import { sidebarDocumentation } from '../registry/sidebar.tsx';
import { skeletonDocumentation } from '../registry/skeleton.tsx';
import { sliderDocumentation } from '../registry/slider.tsx';
import { sonnerDocumentation } from '../registry/sonner.tsx';
import { sortableDocumentation } from '../registry/sortable.tsx';
import { spinnerDocumentation } from '../registry/spinner.tsx';
import { stepperDocumentation } from '../registry/stepper.tsx';
import { switchDocumentation } from '../registry/switch.tsx';
import { tableDocumentation } from '../registry/table.tsx';
import { tabsDocumentation } from '../registry/tabs.tsx';
import { textareaDocumentation } from '../registry/textarea.tsx';
import { toggleDocumentation } from '../registry/toggle.tsx';
import { toggleGroupDocumentation } from '../registry/toggle-group.tsx';
import { tooltipDocumentation } from '../registry/tooltip.tsx';
import { treeDocumentation } from '../registry/tree.tsx';
import { typographyDocumentation } from '../registry/typography.tsx';
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
  'alert-dialog': alertDialogDocumentation,
  'aspect-ratio': aspectRatioDocumentation,
  avatar: avatarDocumentation,
  badge: badgeDocumentation,
  breadcrumb: breadcrumbDocumentation,
  button: buttonDocumentation,
  card: cardDocumentation,
  checkbox: checkboxDocumentation,
  dialog: dialogDocumentation,
  input: inputDocumentation,
  label: labelDocumentation,
  popover: popoverDocumentation,
  progress: progressDocumentation,
  select: selectDocumentation,
  separator: separatorDocumentation,
  sheet: sheetDocumentation,
  skeleton: skeletonDocumentation,
  slider: sliderDocumentation,
  switch: switchDocumentation,
  tabs: tabsDocumentation,
  textarea: textareaDocumentation,
  tooltip: tooltipDocumentation,
  'radio-group': radioGroupDocumentation,
  toggle: toggleDocumentation,
  'toggle-group': toggleGroupDocumentation,
  'input-otp': inputOtpDocumentation,
  form: formDocumentation,
  'dropdown-menu': dropdownMenuDocumentation,
  'context-menu': contextMenuDocumentation,
  menubar: menubarDocumentation,
  'navigation-menu': navigationMenuDocumentation,
  pagination: paginationDocumentation,
  table: tableDocumentation,
  carousel: carouselDocumentation,
  calendar: calendarDocumentation,
  typography: typographyDocumentation,
  collapsible: collapsibleDocumentation,
  resizable: resizableDocumentation,
  'scroll-area': scrollAreaDocumentation,
  drawer: drawerDocumentation,
  sidebar: sidebarDocumentation,
  command: commandDocumentation,
  'hover-card': hoverCardDocumentation,
  kbd: kbdDocumentation,
  spinner: spinnerDocumentation,
  datefield: datefieldDocumentation,
  sonner: sonnerDocumentation,
  stepper: stepperDocumentation,
  marquee: marqueeDocumentation,
  sortable: sortableDocumentation,
  tree: treeDocumentation,
  kanban: kanbanDocumentation,
  scrollspy: scrollspyDocumentation,
  filters: filtersDocumentation,
  'data-grid': dataGridDocumentation,
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
