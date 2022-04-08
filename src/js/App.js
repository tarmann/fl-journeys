import { SEASONS } from './constants/seasons';
import { TERRAINS } from './constants/terrain';
import { QUARTERS } from './constants/quarters';
import { SKILLS } from './constants/character';
import { CHARACTERS } from './characters';

import {
  keepWatch,
  leadTheWay
} from './activities';

const season = SEASONS.SPRING;
const terrain = TERRAINS.DARK_FOREST;
const quarter = QUARTERS.MORNING;
const setting = [season, terrain, quarter];


const App = () => {
  const output = [
    leadTheWay(CHARACTERS.BEPO, ...setting).result,
    keepWatch(CHARACTERS.AMERGIN, ...setting).result
  ];

  return (
    <div>
      <div>
        <select>
          {Object.keys(SEASONS).map(i => (<option>{i}</option>))}
        </select>
        <select>
          {Object.keys(TERRAINS).map(i => (<option>{i}</option>))}
        </select>
        <select>
          {Object.keys(QUARTERS).map(i => (<option>{i}</option>))}
        </select>
      </div>

      <hr />
      <div
        dangerouslySetInnerHTML={{__html: output.join('<br />')}}
      />
    </div>
  )
}

export default App;
