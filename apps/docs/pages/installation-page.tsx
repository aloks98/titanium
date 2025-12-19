import { Link } from 'react-router-dom';
import ShikiHighlighter from 'react-shiki';
import { CopyButton } from '../components/copy-button';
import { DocumentationSidebar } from '../components/documentation-sidebar';
import { TopBar } from '../components/top-bar';

export function InstallationPage() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background overflow-hidden">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 shrink-0 border-r border-border overflow-y-auto">
          <DocumentationSidebar currentComponentId="" />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Installation
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Get started with Titanium UI in your React project.
            </p>

            {/* Installation */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                1. Install the package
              </h2>
              <p className="text-muted-foreground mb-4">
                Install Titanium UI using your preferred package manager:
              </p>
              <div className="space-y-3">
                <CodeBlock
                  title="pnpm"
                  code="pnpm add @e412/titanium"
                  language="bash"
                />
                <CodeBlock
                  title="npm"
                  code="npm install @e412/titanium"
                  language="bash"
                />
                <CodeBlock
                  title="yarn"
                  code="yarn add @e412/titanium"
                  language="bash"
                />
              </div>
            </section>

            {/* Tailwind CSS Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                2. Configure Tailwind CSS
              </h2>
              <p className="text-muted-foreground mb-4">
                Titanium UI uses Tailwind CSS v4. Create or update your{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  styles.css
                </code>{' '}
                file with the following configuration:
              </p>
              <CodeBlock
                title="src/styles.css"
                language="css"
                code={`/* Font imports must come first */
@import url("https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap");

@import "tailwindcss";
@import "tw-animate-css";
@import "@e412/titanium/themes/default.css";
@source "../node_modules/@e412/titanium";

@custom-variant dark (&:is(.dark *));

@theme inline {
    --font-sans: var(--text-sans);
    --font-serif: var(--text-serif);
    --font-mono: var(--text-mono);

    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);
    --radius-xl: calc(var(--radius) + 4px);
    --radius-lg: var(--radius);
    --radius-md: calc(var(--radius) - 2px);
    --radius-sm: calc(var(--radius) - 4px);

    --animate-marquee: marquee var(--duration) infinite linear;
    --animate-marquee-vertical: marquee-vertical var(--duration) linear infinite;

    @keyframes marquee {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }

    @keyframes marquee-vertical {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(calc(-100% - var(--gap)));
        }
    }
}


/** Global Styles **/
@layer base {
    * {
        @apply border-border;
    }

    body {
        @apply bg-background text-foreground;
    }

    *:focus-visible {
        @apply outline-ring rounded-xs shadow-none outline-2 outline-offset-3 transition-none!;
    }
}

/** Custom Scrollbar **/
@layer base {
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--input);
        border-radius: 5px;
    }
    * {
        scrollbar-width: thin;
        scrollbar-color: var(--input) transparent;
    }
}

/** Custom Container **/
@utility container {
    margin-inline: auto;
    padding-inline: 1.5rem;
    @media (width >= --theme(--breakpoint-sm)) {
    max-width: none;
}
    @media (width >= 1440px) {
        padding-inline: 2rem;
        max-width: 1440px;
    }
}

/** Smooth scroll **/
html {
    scroll-behavior: smooth;
}`}
              />
              <div className="mt-4 p-4 rounded-lg bg-muted/50 border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Why this setup?</strong>{' '}
                  Titanium UI exports CSS variables for theming. By mapping
                  these to Tailwind's theme using{' '}
                  <code className="px-1 py-0.5 rounded bg-muted text-xs font-mono">
                    @theme inline
                  </code>
                  , you get full access to the theme colors with Tailwind
                  utilities like{' '}
                  <code className="px-1 py-0.5 rounded bg-muted text-xs font-mono">
                    bg-primary
                  </code>
                  ,{' '}
                  <code className="px-1 py-0.5 rounded bg-muted text-xs font-mono">
                    text-muted-foreground
                  </code>
                  , etc.
                </p>
              </div>
            </section>

            {/* Theme Setup */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                3. Add ThemeProvider
              </h2>
              <p className="text-muted-foreground mb-4">
                Wrap your app with the ThemeProvider to enable theming and dark
                mode support:
              </p>
              <CodeBlock
                title="src/App.tsx"
                code={`import { ThemeProvider, Toaster } from '@e412/titanium';
import './styles.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="titanium-theme">
      <YourApp />
      <Toaster richColors />
    </ThemeProvider>
  );
}`}
              />
              <p className="text-muted-foreground mt-4">
                The ThemeProvider manages light/dark mode. Set{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  defaultTheme
                </code>{' '}
                to{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  "light"
                </code>
                ,{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  "dark"
                </code>
                , or{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  "system"
                </code>
                .
              </p>
            </section>

            {/* Using Components */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                4. Start using components
              </h2>
              <p className="text-muted-foreground mb-4">
                Import and use components directly from the package:
              </p>
              <CodeBlock
                title="Example"
                code={`import { Button, Card, CardHeader, CardTitle, CardContent } from '@e412/titanium';

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a Titanium UI card.</p>
        <Button className="mt-4">Click me</Button>
      </CardContent>
    </Card>
  );
}`}
              />
            </section>

            {/* TypeScript */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                TypeScript Support
              </h2>
              <p className="text-muted-foreground mb-4">
                Titanium UI is written in TypeScript and includes full type
                definitions. If you're using path aliases, add the following to
                your{' '}
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
                  tsconfig.json
                </code>
                :
              </p>
              <CodeBlock
                title="tsconfig.json"
                language="json"
                code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
              />
            </section>

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/components"
                    className="text-primary hover:underline"
                  >
                    Browse all components
                  </Link>{' '}
                  to see what's available
                </li>
                <li>
                  Check out the{' '}
                  <Link
                    to="/component/button"
                    className="text-primary hover:underline"
                  >
                    Button component
                  </Link>{' '}
                  as a starting point
                </li>
                <li>
                  Learn about{' '}
                  <Link
                    to="/component/form"
                    className="text-primary hover:underline"
                  >
                    Form components
                  </Link>{' '}
                  for building forms with validation
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeBlock({
  title,
  code,
  language = 'tsx',
}: {
  title: string;
  code: string;
  language?: string;
}) {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="px-4 py-2 bg-muted/50 border-b flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {title}
        </span>
        <CopyButton code={code} />
      </div>
      <div className="overflow-x-auto max-h-[500px] overflow-y-auto [&_pre]:!rounded-t-none">
        <ShikiHighlighter
          language={language}
          theme={{
            light: 'catppuccin-latte',
            dark: 'tokyo-night',
          }}
        >
          {code.trim()}
        </ShikiHighlighter>
      </div>
    </div>
  );
}
