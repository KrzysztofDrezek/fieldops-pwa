function Select({ id, name, value, onChange, children, className = "", ...props }) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`select ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;