import './ui.css';

function Input({ label, type = 'text', placeholder, value, onChange, name }) {
  return (
    <label className="form-control">
      {label && <span className="form-label">{label}</span>}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
}

export default Input;