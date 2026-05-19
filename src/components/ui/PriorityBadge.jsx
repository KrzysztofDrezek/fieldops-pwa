import Badge from './Badge';

function PriorityBadge({ priority }) {
  const priorityMap = {
    low: {
      label: 'Low',
      variant: 'info',
    },
    medium: {
      label: 'Medium',
      variant: 'warning',
    },
    high: {
      label: 'High',
      variant: 'danger',
    },
    critical: {
      label: 'Critical',
      variant: 'danger',
    },
  };

  const currentPriority = priorityMap[priority] || {
    label: priority,
    variant: 'neutral',
  };

  return (
    <Badge variant={currentPriority.variant}>
      {currentPriority.label}
    </Badge>
  );
}

export default PriorityBadge;