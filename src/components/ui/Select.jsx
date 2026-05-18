import './ui.css';

function Select({ label, value, onChange, name, options = [] }) {
  return (
    <label className="form-control">
      {label && <span className="form-label">{label}</span>}
      <select className="select" value={value} onChange={onChange} name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;