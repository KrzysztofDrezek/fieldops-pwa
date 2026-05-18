import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';

function NewIncident() {
  return (
    <div className="page">
      <PageHeader
        title="New Incident"
        description="Create a new field incident report."
      />

      <Card title="Incident Details" description="Fill in the basic information about the incident.">
        <form style={{ marginTop: '20px', display: 'grid', gap: '18px' }}>
          <Input label="Incident title" placeholder="Example: Damaged equipment" />

          <Input label="Location" placeholder="Example: North Site, Zone B" />

          <Select
            label="Priority"
            options={[
              { value: '', label: 'Select priority' },
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
              { value: 'critical', label: 'Critical' },
            ]}
          />

          <Textarea
            label="Description"
            placeholder="Describe what happened..."
          />

          <div>
            <Button type="submit">Save Incident</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewIncident;