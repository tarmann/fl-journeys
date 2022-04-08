
const UISelect = ({
  value,
  options = [],
  onChange = () => {}
}) => {
  return (
    <>
      <select onChange={e => onChange(e.target.value)} value={value}>
        {options.map(i => (
          <option key={i}>{i}</option>
        ))}
      </select>
    </>
  )
}

export default UISelect;
