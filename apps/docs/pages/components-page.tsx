import { Card, CardHeader, CardTitle } from '@e412/titanium';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '../components/top-bar';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';

export function ComponentsPage() {
  const navigate = useNavigate();
  const { groupedSidebarItems } = useDocsRegistry();

  const categories = Object.keys(groupedSidebarItems) as Array<
    keyof typeof groupedSidebarItems
  >;

  return (
    <div className="h-screen w-screen flex flex-col bg-background overflow-hidden">
      <TopBar />
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Components
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Browse all available components in the Titanium UI library
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="mb-4 text-xl font-semibold capitalize text-foreground">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {groupedSidebarItems[category]?.map((item) => (
                  <Card
                    key={item.id}
                    className="cursor-pointer transition-colors hover:bg-accent"
                    onClick={() => navigate(`/component/${item.id}`)}
                  >
                    <CardHeader className="py-4 border-b-0">
                      <CardTitle className="text-base">{item.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
