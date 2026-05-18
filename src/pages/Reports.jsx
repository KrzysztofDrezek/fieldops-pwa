import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import EmptyState from '../components/ui/EmptyState';
import Button from '../components/ui/Button';

function Reports() {
  return (
    <div className="page">
      <PageHeader
        title="Reports"
        description="Generate and review operational incident reports."
      />

      <div className="grid grid-2">
        <Card title="Weekly Summary">
          <p className="card-description">
            Summary of incidents, response times and resolved cases.
          </p>
        </Card>

        <Card title="Export Data">
          <p className="card-description">
            Export field activity for review or compliance.
          </p>
        </Card>
      </div>

      <EmptyState
        title="No reports generated yet"
        description="Reports will appear here once incident data is available."
        action={<Button variant="secondary">Generate Report</Button>}
      />
    </div>
  );
}

export default Reports;