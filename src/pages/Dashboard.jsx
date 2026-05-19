import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';
import Badge from '../components/ui/Badge';
import Alert from '../components/ui/Alert';
import { mockIncidents } from '../data/mockIncidents';

function Dashboard() {
  const openIncidents = mockIncidents.filter(
    (incident) => incident.status === 'open'
  ).length;

  const resolvedIncidents = mockIncidents.filter(
    (incident) => incident.status === 'resolved'
  ).length;

  const criticalIncidents = mockIncidents.filter(
    (incident) => incident.priority === 'critical'
  ).length;

  const recentIncidents = mockIncidents.slice(0, 3);

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
          <h2>{openIncidents}</h2>
          <p className="card-description">Active reports requiring attention.</p>
        </Card>

        <Card title="Critical Priority">
          <h2>{criticalIncidents}</h2>
          <p className="card-description">High-risk incidents in the system.</p>
        </Card>

        <Card title="Resolved">
          <h2>{resolvedIncidents}</h2>
          <p className="card-description">Incidents currently marked as resolved.</p>
        </Card>
      </div>

      <Card title="Recent Activity" description="Latest incident updates from the field.">
        <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
          {recentIncidents.map((incident) => (
            <div key={incident.id}>
              <Badge variant={incident.status === 'resolved' ? 'success' : 'warning'}>
                {incident.status.replace('_', ' ')}
              </Badge>{' '}
              {incident.title}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;