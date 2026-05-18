import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';

import Dashboard from './pages/Dashboard';
import Incidents from './pages/Incidents';
import NewIncident from './pages/NewIncident';
import Reports from './pages/Reports';
import SyncQueue from './pages/SyncQueue';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="incidents" element={<Incidents />} />
        <Route path="new-incident" element={<NewIncident />} />
        <Route path="reports" element={<Reports />} />
        <Route path="sync-queue" element={<SyncQueue />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;