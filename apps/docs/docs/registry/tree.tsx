import { File, Folder } from 'lucide-react';
import type { ComponentDocumentation } from '../types';

// Simple mock tree data for demo purposes
const _treeData = [
  {
    id: 'src',
    name: 'src',
    isFolder: true,
    children: [
      { id: 'index.ts', name: 'index.ts', isFolder: false },
      { id: 'app.tsx', name: 'App.tsx', isFolder: false },
      {
        id: 'components',
        name: 'components',
        isFolder: true,
        children: [
          { id: 'button.tsx', name: 'Button.tsx', isFolder: false },
          { id: 'input.tsx', name: 'Input.tsx', isFolder: false },
        ],
      },
    ],
  },
  {
    id: 'package.json',
    name: 'package.json',
    isFolder: false,
  },
  {
    id: 'readme.md',
    name: 'README.md',
    isFolder: false,
  },
];

export const treeDocumentation: ComponentDocumentation = {
  id: 'tree',
  name: 'Tree',
  description:
    'A hierarchical tree view component for displaying nested data structures.',
  category: 'data-display',
  simpleExample: {
    example: (
      <div className="rounded-lg border p-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
            <Folder className="size-4 text-muted-foreground" />
            <span>src</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
              <File className="size-4 text-muted-foreground" />
              <span>index.ts</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
              <File className="size-4 text-muted-foreground" />
              <span>App.tsx</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
              <Folder className="size-4 text-muted-foreground" />
              <span>components</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                <File className="size-4 text-muted-foreground" />
                <span>Button.tsx</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
            <File className="size-4 text-muted-foreground" />
            <span>package.json</span>
          </div>
        </div>
      </div>
    ),
    code: `import { Tree, TreeItem, TreeItemLabel } from '@e412/titanium';
import { useTree } from '@headless-tree/react';
import { File, Folder } from 'lucide-react';

interface TreeNode {
  id: string;
  name: string;
  isFolder: boolean;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    id: 'src',
    name: 'src',
    isFolder: true,
    children: [
      { id: 'index.ts', name: 'index.ts', isFolder: false },
      { id: 'app.tsx', name: 'App.tsx', isFolder: false },
      {
        id: 'components',
        name: 'components',
        isFolder: true,
        children: [
          { id: 'button.tsx', name: 'Button.tsx', isFolder: false },
        ],
      },
    ],
  },
  { id: 'package.json', name: 'package.json', isFolder: false },
];

export function TreeDemo() {
  const tree = useTree<TreeNode>({
    rootItemId: 'root',
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => item.getItemData().isFolder,
    dataLoader: {
      getItem: (id) => treeData.find((item) => item.id === id)!,
      getChildren: (id) => {
        if (id === 'root') return treeData.map((item) => item.id);
        const item = treeData.find((item) => item.id === id);
        return item?.children?.map((child) => child.id) ?? [];
      },
    },
  });

  return (
    <Tree tree={tree} className="rounded-lg border p-4">
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel>
            {item.isFolder() ? (
              <Folder className="size-4 text-muted-foreground" />
            ) : (
              <File className="size-4 text-muted-foreground" />
            )}
            {item.getItemName()}
          </TreeItemLabel>
        </TreeItem>
      ))}
    </Tree>
  );
}`,
  },
  examples: [
    {
      id: 'with-icons',
      title: 'With Custom Icons',
      description: 'Tree with folder and file icons.',
      example: (
        <div className="rounded-lg border p-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 rounded-md bg-accent px-2 py-1.5 text-sm">
              <Folder className="size-4 text-blue-500" />
              <span className="font-medium">Documents</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                <File className="size-4 text-green-500" />
                <span>report.pdf</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                <File className="size-4 text-orange-500" />
                <span>presentation.pptx</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
              <Folder className="size-4 text-blue-500" />
              <span>Images</span>
            </div>
          </div>
        </div>
      ),
      code: `import { Tree, TreeItem, TreeItemLabel } from '@e412/titanium';
import { File, Folder } from 'lucide-react';

// Using @headless-tree/react for tree state management
import { useTree } from '@headless-tree/react';

export function TreeIconsDemo() {
  const tree = useTree({
    // ... tree configuration
  });

  return (
    <Tree tree={tree}>
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel>
            {item.isFolder() ? (
              <Folder className="size-4 text-blue-500" />
            ) : (
              <File className="size-4 text-muted-foreground" />
            )}
            {item.getItemName()}
          </TreeItemLabel>
        </TreeItem>
      ))}
    </Tree>
  );
}`,
    },
    {
      id: 'selectable',
      title: 'Selectable Items',
      description: 'Tree with selectable items.',
      example: (
        <div className="rounded-lg border p-4">
          <p className="text-xs text-muted-foreground mb-2">
            Click items to select
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent cursor-pointer">
              <Folder className="size-4 text-muted-foreground" />
              <span>Projects</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-2 py-1.5 text-sm cursor-pointer">
                <File className="size-4" />
                <span>project-a</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent cursor-pointer">
                <File className="size-4 text-muted-foreground" />
                <span>project-b</span>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `import { Tree, TreeItem, TreeItemLabel } from '@e412/titanium';
import { useTree } from '@headless-tree/react';

export function TreeSelectableDemo() {
  const tree = useTree({
    // Enable selection
    features: [syncDataLoaderFeature, selectionFeature],
    // ... tree configuration
  });

  return (
    <Tree tree={tree}>
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel>
            {item.getItemName()}
          </TreeItemLabel>
        </TreeItem>
      ))}
    </Tree>
  );
}`,
    },
  ],
  api: [
    {
      component: 'Tree',
      description: 'The root tree container.',
      props: [
        {
          name: 'tree',
          type: 'TreeInstance',
          description: 'The tree instance from @headless-tree/react',
        },
        {
          name: 'indent',
          type: 'number',
          description: 'Indentation in pixels per level',
          defaultValue: '20',
        },
        {
          name: 'toggleIconType',
          type: '"chevron" | "plus-minus"',
          description: 'Icon style for expand/collapse',
          defaultValue: '"chevron"',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TreeItem',
      description: 'A tree item row.',
      props: [
        {
          name: 'item',
          type: 'ItemInstance<T>',
          description: 'The item instance from the tree',
          required: true,
        },
        {
          name: 'asChild',
          type: 'boolean',
          description: 'Render as child element',
          defaultValue: 'false',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TreeItemLabel',
      description: 'The label content for a tree item.',
      props: [
        {
          name: 'item',
          type: 'ItemInstance<T>',
          description: 'Optional item override (uses context by default)',
        },
        {
          name: 'className',
          type: 'string',
          description: 'Additional CSS classes',
        },
      ],
    },
    {
      component: 'TreeDragLine',
      description: 'Visual indicator for drag-and-drop positioning.',
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
