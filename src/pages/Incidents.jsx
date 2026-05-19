import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatusBadge from '../components/ui/StatusBadge';
import PriorityBadge from '../components/ui/PriorityBadge';
import { mockIncidents } from '../data/mockIncidents';

function Incidents() {
  return (
    <div className="page">
      <PageHeader
        title="Incidents"
        description="View and manage field incident reports."
        action={<Button>New Incident</Button>}
      />

      <div className="grid">
        {mockIncidents.map((incident) => (
          <Card key={incident.id}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 6px' }}>{incident.title}</h3>

                <p className="card-description">
                  {incident.location} · Reported by {incident.reportedBy}
                </p>

                <p className="card-description" style={{ marginTop: '6px' }}>
                  Created: {incident.createdAt}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                }}
              >
                <PriorityBadge priority={incident.priority} />
                <StatusBadge status={incident.status} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Incidents;