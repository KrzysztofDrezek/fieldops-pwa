import './ui.css';

function Textarea({ label, placeholder, value, onChange, name }) {
  return (
    <label className="form-control">
      {label && <span className="form-label">{label}</span>}
      <textarea
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
}

export default Textarea;