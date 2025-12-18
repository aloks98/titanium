import { useParams, Navigate } from 'react-router-dom';
import { DocumentationLayout } from '../components/documentation-layout';
import { useDocsRegistry } from '../docs/store/useDocsRegistery';

export function ComponentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { docs } = useDocsRegistry();

  // If no id provided or component doesn't exist, redirect to components list
  if (!id || !docs[id]) {
    return <Navigate to="/components" replace />;
  }

  return <DocumentationLayout componentId={id} />;
}
