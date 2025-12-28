import { Separator } from '@e412/titanium';
import { Github } from 'lucide-react';

export function VersionFooter() {
  const version = import.meta.env.APP_VERSION || '0.0.0';
  const commitHash = import.meta.env.COMMIT_HASH || 'unknown';

  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Titanium UI</span>
          <Separator orientation="vertical" className="h-4" />
          <span>v{version}</span>
          <Separator orientation="vertical" className="h-4" />
          <a
            href={`https://github.com/aloks98/titanium/commit/${commitHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Github className="size-3.5" />
            <code className="text-xs">{commitHash}</code>
          </a>
        </div>
      </div>
    </footer>
  );
}
