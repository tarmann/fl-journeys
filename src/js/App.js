import React, { useState } from 'react';

import { SEASONS } from './constants/seasons';
import { TERRAINS } from './constants/terrain';
import { QUARTERS } from './constants/quarters';
import { CHARACTERS_DATA } from './characters';

import * as performActivity from './activities';

import UISelect from './components/UISelect';
import CharacterAction from './components/CharacterAction';
import CharacterSheet from './components/CharacterSheet';
import ActivitySelect from './components/ActivitySelect';

const App = () => {
  const [activities, setActivities] = useState({});
  const [season, setSeason] = useState(SEASONS.SPRING);
  const [terrain, setTerrain] = useState(TERRAINS.DARK_FOREST);
  const [quarter, setQuarter] = useState(QUARTERS.MORNING);
  const [selectedCharName, setSelectedCharName] = useState(null);
  const [characters, setCharacters] = useState(CHARACTERS_DATA);

  const selectedCharacter = characters ? characters.find(i => i.name === selectedCharName) : null;

  const handleChangeActivities = (character, activity) => {
    setActivities({...activities, [character]: activity});
  }

  const handleChangeCharacter = (charName, updatedChar) => {
    const updatedChars = characters.map(i => (i.name === charName) ? updatedChar : i)
    setCharacters(updatedChars);
  }

  const setting = [
    season,
    terrain,
    quarter
  ]

  // run action
  const actionsOutput = Object
    .keys(activities)
    .map(charName => {
      const activityName = activities[charName];
      const char = characters.find(i => i.name === charName);
      const doIt = performActivity[activityName];
      return doIt ? doIt(char, ...setting) : null;
    });

  return (
    <div>
      <h1>Forbidden Lands</h1>
      <h2>Journey Calculator</h2>
      <div>
        <UISelect
          value={season}
          options={Object.values(SEASONS)}
          onChange={setSeason}
        />
        <UISelect
          value={terrain}
          options={Object.values(TERRAINS)}
          onChange={setTerrain}
        />
        <UISelect
          value={quarter}
          options={Object.values(QUARTERS)}
          onChange={setQuarter}
        />
      </div>
      <hr/>

      <div>
        {characters.map((char) => (
          <ActivitySelect
            charName={char.name}
            onSelectCharacter={charName => setSelectedCharName(charName)}
            onChange={updatedActivity => handleChangeActivities(char.name, updatedActivity)}
          />
        ))}
      </div>
      <hr />

      {actionsOutput.map(action => {
        return !action ? <CharacterAction action={action} /> : null;
      })}

      {selectedCharacter ? (
        <>
        <CharacterSheet
          char={selectedCharacter}
          onChange={updatedChar => handleChangeCharacter(selectedCharacter.name, updatedChar)}
        />
        <button onClick={() => setSelectedCharName(null)}>Close</button>
      </>
      ): null}
    </div>
  )
}

export default App;
