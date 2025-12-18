import './src/styles.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { ComponentsPage } from './pages/components-page';
import { ComponentDetailPage } from './pages/component-detail-page';
import { InstallationPage } from './pages/installation-page';
import { CommandSearch } from './components/command-search';
import { ScrollToTop } from './components/scroll-to-top';
import { Toaster } from '@e412/titanium';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/installation" element={<InstallationPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/component/:id" element={<ComponentDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CommandSearch />
      <Toaster richColors />
    </>
  );
};

export default App;
