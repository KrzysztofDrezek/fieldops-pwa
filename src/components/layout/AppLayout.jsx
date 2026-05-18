import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './layout.css';

function AppLayout() {
  return (
    <>
      <div className="mobile-topbar">FieldOps</div>

      <div className="app-shell">
        <Sidebar />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;