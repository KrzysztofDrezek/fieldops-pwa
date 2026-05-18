import './ui.css';

function Alert({ children, variant = 'info' }) {
  return <div className={`alert alert-${variant}`}>{children}</div>;
}

export default Alert;