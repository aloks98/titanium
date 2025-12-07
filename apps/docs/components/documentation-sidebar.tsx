import { Tree, TreeItem, TreeItemLabel } from '@e412/titanium';
import { syncDataLoaderFeature } from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { categoryNames } from '../docs/types';

interface TreeItemData {
  name: string;
  type: 'category' | 'component';
  componentId?: string;
  children?: string[];
}

export function DocumentationSidebar() {
  const { selectedDoc, setSelectedDoc, groupedSidebarItems } =
    useDocsRegistry();

  // Create tree data structure
  const treeItems: Record<string, TreeItemData> = {
    root: {
      name: 'Components',
      type: 'category',
      children: Object.keys(groupedSidebarItems),
    },
    ...Object.entries(groupedSidebarItems).reduce(
      (acc, [category, items]) => {
        acc[category] = {
          name: categoryNames[category as keyof typeof categoryNames],
          type: 'category',
          children: items.map((item) => `component-${item.id}`),
        };
        items.forEach((item) => {
          acc[`component-${item.id}`] = {
            name: item.name,
            type: 'component',
            componentId: item.id,
          };
        });
        return acc;
      },
      {} as Record<string, TreeItemData>,
    ),
  };

  const tree = useTree<TreeItemData>({
    initialState: {
      expandedItems: [], // Start with all items collapsed
    },
    indent: 20,
    rootItemId: 'root',
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => treeItems[itemId],
      getChildren: (itemId) => treeItems[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature],
  });

  const handleItemClick = (item: ReturnType<typeof tree.getItems>[0]) => {
    const data = item.getItemData();
    if (data.type === 'component' && data.componentId) {
      setSelectedDoc(data.componentId);
    }
  };

  return (
    <div className="w-64 border-r border-border bg-background">
      <div className="p-2">
        <Tree tree={tree}>
          {tree.getItems().map((item) => {
            const data = item.getItemData();
            const isSelected =
              data.type === 'component' && data.componentId === selectedDoc.id;

            return (
              <TreeItem
                key={item.getId()}
                item={item}
                asChild={data.type === 'component'}
                className={isSelected ? 'font-bold' : ''}
              >
                {data.type === 'component' ? (
                  <button
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className="w-full text-left"
                  >
                    <TreeItemLabel />
                  </button>
                ) : (
                  <TreeItemLabel />
                )}
              </TreeItem>
            );
          })}
        </Tree>
      </div>
    </div>
  );
}
