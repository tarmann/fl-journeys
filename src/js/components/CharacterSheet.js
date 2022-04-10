import { ATTRIBUTES, SKILLS } from "../constants/character";

const UIInput = ({ name, value, onChange }) => (
  <div>
    <label>{name}</label>
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
)

const CharacterSheet = ({ char }) => {
  const attributes = Object.values(ATTRIBUTES)
    .map(attr => (
      <>
        <UIInput name={`${attr}Total`} value={char[`${attr}Total`]} />
        <UIInput name={`${attr}Current`} value={char[`${attr}Current`]} />
      </>
    ));
  
  const skills = Object.values(SKILLS)
    .map(attr => <UIInput name={attr} value={char[attr]} />);
  
  return (
    <div>
      <label>Name:</label>
      <input type="text" name="name" value={char.name} />
      <br />
      {attributes}
      <br />
      {skills}
    </div>
  )
}

export default CharacterSheet;