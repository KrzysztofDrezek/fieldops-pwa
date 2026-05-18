import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

function Settings() {
  return (
    <div className="page">
      <PageHeader
        title="Settings"
        description="Configure app preferences and field operation settings."
      />

      <Card title="Application Settings">
        <div style={{ marginTop: '20px', display: 'grid', gap: '18px' }}>
          <Select
            label="Default incident priority"
            options={[
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
              { value: 'critical', label: 'Critical' },
            ]}
          />

          <Select
            label="Sync mode"
            options={[
              { value: 'auto', label: 'Automatic' },
              { value: 'manual', label: 'Manual' },
            ]}
          />

          <div>
            <Button>Save Settings</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Settings;