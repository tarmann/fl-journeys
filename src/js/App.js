import React, { useState } from 'react';

import { SEASONS } from './constants/seasons';
import { TERRAINS } from './constants/terrain';
import { QUARTERS } from './constants/quarters';
import { ACTIVITIES } from './constants/activities';
import { CHARACTERS } from './characters';

import * as performActivity from './activities';

import UISelect from './components/UISelect';

const season = SEASONS.SPRING;
const terrain = TERRAINS.DARK_FOREST;
const quarter = QUARTERS.MORNING;
const setting = [season, terrain, quarter];

const App = () => {
  const [activities, setActivities] = useState({});
  const [season, setSeason] = useState(SEASONS.SPRING);
  const [terrain, setTerrain] = useState(TERRAINS.DARK_FOREST);
  const [quarter, setQuarter] = useState(QUARTERS.MORNING);

  const handleChangeActivities = (character, activity) => {
    setActivities({...activities, [character]: activity});
  }

  const setting = [
    season,
    terrain,
    quarter
  ]

  const output = Object
    .keys(activities)
    .map(charName => {
      const activityName = activities[charName];
      const char = CHARACTERS[charName];
      const doIt = performActivity[activityName];
      return doIt ? doIt(char, ...setting).result : null;
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
        {Object.keys(CHARACTERS).map(charName => (
          <p>
            {charName} will...
            <UISelect
              options={ACTIVITIES}
              onChange={updatedActivity => handleChangeActivities(charName, updatedActivity)}
            />
          </p>
        ))}
      </div>
      <hr />

      <div
        dangerouslySetInnerHTML={{__html: output.map(i => `<p>${i}</p>`).join('')}}
      />
    </div>
  )
}

export default App;
