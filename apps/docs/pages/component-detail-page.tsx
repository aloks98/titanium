import { Navigate, useParams } from 'react-router-dom';
import { ComponentViewer } from '../components/component-viewer';
import { DocsLayout } from '../components/docs-layout';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';

export function ComponentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { docs } = useDocsRegistry();

  if (!id || !docs[id]) {
    return <Navigate to="/components" replace />;
  }

  return (
    <DocsLayout currentComponentId={id}>
      <ComponentViewer componentId={id} />
    </DocsLayout>
  );
}
