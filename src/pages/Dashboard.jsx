import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';
import Badge from '../components/ui/Badge';
import Alert from '../components/ui/Alert';

function Dashboard() {
  return (
    <div className="page">
      <PageHeader
        title="Dashboard"
        description="Overview of field incidents, sync status and operational activity."
      />

      <Alert variant="info">
        FieldOps is currently running in prototype mode. Offline-first features will be added in the next stages.
      </Alert>

      <div className="grid grid-3">
        <Card title="Open Incidents">
          <h2>12</h2>
          <p className="card-description">Active reports requiring attention.</p>
        </Card>

        <Card title="Pending Sync">
          <h2>4</h2>
          <p className="card-description">Items waiting to be synced.</p>
        </Card>

        <Card title="Resolved Today">
          <h2>7</h2>
          <p className="card-description">Incidents closed in the last 24 hours.</p>
        </Card>
      </div>

      <Card title="Recent Activity" description="Latest incident updates from the field.">
        <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
          <div>
            <Badge variant="danger">Open</Badge> Water leak reported at North Site
          </div>
          <div>
            <Badge variant="warning">In Progress</Badge> Equipment failure assigned to maintenance
          </div>
          <div>
            <Badge variant="success">Resolved</Badge> Safety inspection completed
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;