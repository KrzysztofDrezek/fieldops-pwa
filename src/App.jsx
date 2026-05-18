import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Incidents from "./pages/Incidents";
import NewIncident from "./pages/NewIncident";
import Reports from "./pages/Reports";
import SyncQueue from "./pages/SyncQueue";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="incidents" element={<Incidents />} />
          <Route path="new-incident" element={<NewIncident />} />
          <Route path="reports" element={<Reports />} />
          <Route path="sync-queue" element={<SyncQueue />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;