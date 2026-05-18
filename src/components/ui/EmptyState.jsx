import './ui.css';

function EmptyState({ title, description, action }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {action && <div style={{ marginTop: '18px' }}>{action}</div>}
    </div>
  );
}

export default EmptyState;