import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import StatusBadge from '../components/ui/StatusBadge';
import Alert from '../components/ui/Alert';

const syncItems = [
  {
    id: 1,
    name: 'Incident #102',
    status: 'pending',
  },
  {
    id: 2,
    name: 'Incident #103',
    status: 'synced',
  },
  {
    id: 3,
    name: 'Photo upload #21',
    status: 'failed',
  },
];

function SyncQueue() {
  return (
    <div className="page">
      <PageHeader
        title="Sync Queue"
        description="Track items waiting to be synced when connection is available."
      />

      <Alert variant="warning">
        Offline sync is not active yet. This page currently shows prototype data.
      </Alert>

      <div className="grid">
        {syncItems.map((item) => (
          <Card key={item.id}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <strong>{item.name}</strong>
              <StatusBadge status={item.status} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SyncQueue;