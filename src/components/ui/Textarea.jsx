function Textarea({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  className = "",
  ...props
}) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`textarea ${className}`}
      {...props}
    />
  );
}

export default Textarea;