import { ATTRIBUTES, SKILLS } from "../constants/character";

import UIInput from './UIInput';

const CharacterSheet = ({ char, onChange }) => {
  const handleChange = (attr, value) => {
    onChange({ ...char, [attr]: parseInt(value) || '' })
  }

  const attributes = Object.values(ATTRIBUTES)
    .map(attr => (
      <>
        <UIInput
          name={`${attr}_total`}
          value={char[`${attr}_total`]}
          onChange={value => handleChange(`${attr}Total`, value)}
        />
        <UIInput
          name={`${attr}_current`}
          value={char[`${attr}_current`]}
          onChange={value => handleChange(`${attr}_current`, value)}
        />
      </>
    ));

  const skills = Object.values(SKILLS)
    .map(attr => (
      <UIInput
        name={attr}
        value={char[attr]}
        onChange={value => handleChange(attr, value)}
      />
    ));

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
