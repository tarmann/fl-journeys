import { SKILLS } from '../constants/character';
import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import { rollSkill } from '../utils/rollUtils';

export const makeCamp = (char, seasonName, terrainName, quarterName, { adaptable = null } = {}) => {
  const season = SEASONS_DETAILS[seasonName];
  const terrain = TERRAIN_DETAILS[terrainName];
  const skill = adaptable || SKILLS.SURVIVAL;

  const skillRoll = rollSkill(char, skill);

  let mishap = null;
  let result = null;

  if(!skillRoll.hits){
    result = `${char.name} fail to make camp. (MISHAP)`
  } else {
    result = `${char.name} makes camp.`
  }

  return {
    season,
    terrain,
    roll: skillRoll,
    mishap,
    result
  }
}

export default makeCamp;
