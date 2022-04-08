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

console.log(`Journey on ${terrain} during ${quarter}. (${season})`);

console.log(
  keepWatch(
    CHARACTERS.ARIS,
    ...setting,
  )
);

console.log(
  leadTheWay(
    CHARACTERS.HAWKINS,
    ...setting,
    { adaptable: SKILLS.PERFORMANCE }
  )
);
