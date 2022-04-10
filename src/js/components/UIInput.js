const UIInput = ({ name, value, onChange }) => (
  <div>
    <label>{name}</label>
    
    <input
      type="text"
      name={name}
      value={value}onChange={onChange}
    />
  </div>
)

export default UIInput;