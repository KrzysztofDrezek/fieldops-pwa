import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';

const incidents = [
  {
    id: 1,
    title: 'Water leak near storage area',
    location: 'North Site',
    status: 'open',
  },
  {
    id: 2,
    title: 'Broken access gate',
    location: 'West Entrance',
    status: 'in_progress',
  },
  {
    id: 3,
    title: 'Safety inspection completed',
    location: 'Main Office',
    status: 'resolved',
  },
];

function Incidents() {
  return (
    <div className="page">
      <PageHeader
        title="Incidents"
        description="View and manage field incident reports."
        action={<Button>New Incident</Button>}
      />

      <div className="grid">
        {incidents.map((incident) => (
          <Card key={incident.id}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 6px' }}>{incident.title}</h3>
                <p className="card-description">{incident.location}</p>
              </div>

              <StatusBadge status={incident.status} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Incidents;