import { SKILLS } from '../constants/character';
import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import { FORAGE_MISHAPS } from '../mishaps/forage_mishaps';

import { rollSkill } from '../utils/rollUtils';
import { rollD6 } from '../utils/diceUtils';

const getHikingMod = isHiking => isHiking ? -1 : 0;

export const forage = (char, seasonName, terrainName, quarterName, { isHiking = false } = {}) => {
  const season = SEASONS_DETAILS[seasonName];
  const terrain = TERRAIN_DETAILS[terrainName];

  const rollMod = season.forage + terrain.forage + getHikingMod(isHiking);
  const skillRoll = rollSkill(char, SKILLS.SURVIVAL, rollMod);

  let mishap = null;
  let result = null;

  if(!skillRoll.hits){
    mishap = FORAGE_MISHAPS[rollD6()-1];
    result = `${char.name} fails to forage for food. <br /> ${mishap.description}`;
  } else {
    result = `${char.name} find ${skillRoll.hits} units of food.`
  }

  return {
    season,
    terrain,
    roll: skillRoll,
    mishap,
    result
  }
}

export default forage;
