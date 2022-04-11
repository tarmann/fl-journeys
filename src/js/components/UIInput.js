const UIInput = ({ name, value, onChange }) => (
  <div>
    <label>{name}</label>

    <input
      type="text"
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default UIInput;
