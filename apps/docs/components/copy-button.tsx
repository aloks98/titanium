import { Button } from '@e412/titanium';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const [, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Button size="sm" variant={'ghost'} onClick={handleCopy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
      {copied ? 'Copied!' : 'Copy Code'}
    </Button>
  );
}
