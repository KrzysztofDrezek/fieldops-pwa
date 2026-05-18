import { NavLink } from 'react-router-dom';
import './layout.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-mark">F</span>
        <div>
          <strong>FieldOps</strong>
          <small>Incident PWA</small>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/incidents">Incidents</NavLink>
        <NavLink to="/new-incident">New Incident</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/sync-queue">Sync Queue</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;