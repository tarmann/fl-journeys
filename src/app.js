import { SEASONS } from './constants/seasons';
import { TERRAINS } from './constants/terrain';
import { QUARTERS } from './constants/quarters';

import { createCharacter } from './utils/characterUtils';

import {
  keepWatch,
  leadTheWay
} from './activities/index';

const CHARACTERS = {
  ARIS: createCharacter({
    name: 'Aris',
    witsTotal: 6,
    witsCurrent: 6,
    survival: 2,
    scouting: 0,
  }),
  BEPO: createCharacter({
    name: 'Bepo',
    strengthTotal: 3,
    strengthCurrent: 3,
    agilityTotal: 6,
    agilityTotal: 6,
    witsTotal: 3,
    witsCurrent: 3,
    empathyTotal: 3,
    empathyCurrent: 3,
    melee: 2,
    stealth: 2,
    slightofhand: 2,
    move: 1,
    manipulation: 1,
    food: 6,
    water: 6,
    silver: 8
  }),
  HAWKINS: createCharacter({
    name: 'Hawkins',
    strengthTotal: 2,
    strengthCurrent: 2,
    agilityTotal: 4,
    agilityTotal: 4,
    witsTotal: 2,
    witsCurrent: 2,
    empathyTotal: 6,
    empathyCurrent: 6,

    food: 6,
    water: 6,
    silver: 8
  })
}

const season = SEASONS.SPRING;
const terrain = TERRAINS.DARK_FOREST;
const quarter = QUARTERS.MORNING;

console.log(
  keepWatch(
    CHARACTERS.ARIS,
    season,
    terrain,
    quarter
  ).result
);

console.log(
  leadTheWay(
    CHARACTERS.HAWKINS,
    season,
    terrain,
    quarter
  ).result
);
