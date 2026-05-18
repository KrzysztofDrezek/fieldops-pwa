import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>FieldOps</h2>

        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/incidents">Incidents</NavLink>
          <NavLink to="/new-incident">New Incident</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/sync-queue">Sync Queue</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;