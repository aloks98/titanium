import { Button } from '@e412/titanium';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Titanium UI
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern, themeable React component library
        </p>
        <div className="flex items-center gap-4">
          <Button size="lg" onClick={() => navigate('/installation')}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/components')}>
            View Components
          </Button>
        </div>
      </div>
    </div>
  );
}
