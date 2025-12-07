import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypographyInlineCode,
} from '@e412/titanium';
import ShikiHighlighter from 'react-shiki';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';
import { CopyButton } from './copy-button';

export function ComponentViewer() {
  const { selectedDoc: documentation } = useDocsRegistry();
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
              <div
                key={api.component}
                id={api.component.toLowerCase()}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">{api.component}</h3>
                <p className="text-muted-foreground">{api.description}</p>
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-4 font-medium text-sm border-b pb-2">
                        <div>Prop</div>
                        <div>Type</div>
                        <div>Default</div>
                        <div>Description</div>
                      </div>
                      {api.props.map((prop) => (
                        <div
                          key={prop.name}
                          className="grid grid-cols-4 gap-4 text-sm"
                        >
                          <div>
                            <TypographyInlineCode>
                              {prop.name}
                            </TypographyInlineCode>
                            {prop.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </div>
                          <div>
                            <TypographyInlineCode>
                              {prop.type}
                            </TypographyInlineCode>
                          </div>
                          <div>
                            <TypographyInlineCode>
                              {prop.defaultValue || '-'}
                            </TypographyInlineCode>
                          </div>
                          <div className="text-muted-foreground">
                            {prop.description || '-'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
