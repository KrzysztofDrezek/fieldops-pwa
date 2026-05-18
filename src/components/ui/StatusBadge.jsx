import Badge from './Badge';

function StatusBadge({ status }) {
  const statusMap = {
    open: {
      label: 'Open',
      variant: 'danger',
    },
    in_progress: {
      label: 'In Progress',
      variant: 'warning',
    },
    resolved: {
      label: 'Resolved',
      variant: 'success',
    },
    synced: {
      label: 'Synced',
      variant: 'success',
    },
    pending: {
      label: 'Pending',
      variant: 'warning',
    },
    failed: {
      label: 'Failed',
      variant: 'danger',
    },
  };

  const currentStatus = statusMap[status] || {
    label: status,
    variant: 'neutral',
  };

  return (
    <Badge variant={currentStatus.variant}>
      {currentStatus.label}
    </Badge>
  );
}

export default StatusBadge;