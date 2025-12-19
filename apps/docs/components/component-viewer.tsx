import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@e412/titanium';
import ShikiHighlighter from 'react-shiki';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { CopyButton } from './copy-button';

interface ComponentViewerProps {
  componentId: string;
}

export function ComponentViewer({ componentId }: ComponentViewerProps) {
  const { docs } = useDocsRegistry();
  const documentation = docs[componentId];

  if (!documentation) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Component not found</p>
      </div>
    );
  }
  return (
    <div className="flex gap-8 w-full max-w-7xl mx-auto px-6 py-8">
      {/* Main Content */}
      <div className="flex-1 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{documentation.name}</h1>
          <p className="text-lg text-muted-foreground">
            {documentation.description}
          </p>
        </div>

        {/* Simple Example with Tabs */}
        <section id="installation" className="space-y-6">
          <h2 className="text-2xl font-semibold">Installation</h2>
          <div className="w-full">
            <Tabs defaultValue="preview" className="w-full">
              <div className="flex justify-between items-center">
                <TabsList className="w-fit" variant="default">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <CopyButton code={documentation.simpleExample.code} />
              </div>
              <TabsContent value="preview" className="mt-4">
                <Card className="w-full h-[512px]">
                  <CardContent className="p-4 flex items-center justify-center">
                    {documentation.simpleExample.example}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4 w-full">
                <div className="h-[512px] overflow-y-auto rounded-md">
                  <ShikiHighlighter
                    language={'tsx'}
                    theme={{
                      light: 'vitesse-black',
                      dark: 'vitesse-black',
                    }}
                  >
                    {documentation.simpleExample.code.trim()}
                  </ShikiHighlighter>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="space-y-8">
          <h2 className="text-2xl font-semibold">Examples</h2>
          <div className="space-y-8">
            {documentation.examples.map((example) => (
              <div key={example.id} id={example.id} className="space-y-4">
                <h3 className="text-xl font-semibold">{example.title}</h3>
                {example.description && (
                  <p className="text-muted-foreground">{example.description}</p>
                )}
                <div className="w-full">
                  <Tabs defaultValue="preview" className="w-full">
                    <div className="flex justify-between items-center">
                      <TabsList className="w-fit" variant="default">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                      </TabsList>
                      <CopyButton code={example.code} />
                    </div>
                    <TabsContent value="preview" className="mt-4">
                      <Card className="w-full h-[512px]">
                        <CardContent className="p-4 flex items-center justify-center">
                          {example.example}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="code" className="mt-4 w-full">
                      <div className="h-[512px] overflow-y-auto rounded-md">
                        <ShikiHighlighter
                          language={'tsx'}
                          theme={{
                            light: 'vitesse-black',
                            dark: 'vitesse-black',
                          }}
                        >
                          {example.code.trim()}
                        </ShikiHighlighter>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="space-y-8">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          <div className="space-y-6">
            {documentation.api.map((api) => (
              <Card
                key={api.component}
                id={api.component.toLowerCase()}
                className="overflow-hidden"
              >
                <CardHeader className="bg-muted/50 py-3">
                  <CardTitle className="text-sm font-semibold">
                    {api.component}
                  </CardTitle>
                  {api.description && (
                    <CardDescription className="text-xs">
                      {api.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[180px]">Prop</TableHead>
                        <TableHead className="w-[200px]">Type</TableHead>
                        <TableHead className="w-[120px]">Default</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {api.props.map((prop) => (
                        <TableRow key={prop.name}>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <code className="text-sm font-mono text-foreground">
                                {prop.name}
                              </code>
                              {prop.required && (
                                <span className="text-[10px] text-destructive">
                                  *
                                </span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <code className="text-xs font-mono text-muted-foreground">
                              {prop.type}
                            </code>
                          </TableCell>
                          <TableCell>
                            {prop.defaultValue ? (
                              <code className="text-xs font-mono text-muted-foreground">
                                {prop.defaultValue}
                              </code>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {prop.description || '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
