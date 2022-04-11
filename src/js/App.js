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
  const [characters, setCharacters] = useState(CHARACTERS_DATA);

  const handleChangeActivities = (character, activity) => {
    setActivities({...activities, [character]: activity});
  }

  const handleChangeCharacter = (charName, updatedChar) => {
    setCharacters({
      ...characters,
      [charName]: updatedChar
    })
  }

  const setting = [
    season,
    terrain,
    quarter
  ]

  // run action
  const actionsOutput = Object
    .keys(activities)
    .map(charName => {s
      const activityName = activities[charName];
      const char = characters[charName];
      const doIt = performActivity[activityName];
      return doIt ? doIt(char, ...setting) : null;
    });

  // render actions
  const output = actionsOutput.map(action => {
    if(!action) return null;
    return <CharacterAction action={action} />;
  });

  return (
    <div>
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
        {Object.keys(characters).map(charName => (
          <ActivitySelect
            charName={charName}
            onChange={updatedActivity => handleChangeActivities(charName, updatedActivity)}
          />
        ))}
      </div>
      <hr />

      {output}

      <CharacterSheet
        char={characters.ARIS}
        onChange={updatedChar => handleChangeCharacter('ARIS', updatedChar)}
      />
    </div>
  )
}

export default App;
