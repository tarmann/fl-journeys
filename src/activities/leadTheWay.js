import { SKILLS } from '../constants/character';
import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import { rollSkill } from '../utils/rollUtils';

const getIsDarkMod = (season, quarterName) => season.light[quarterName] ? 0 : -2;

const getPathfinderMod = (char) => {
  if(char.pathfinderRank === 1){
    return 1;
  } else {
    return 0;
  }
}

export const leadTheWay = (char, seasonName, terrainName, quarterName) => {
  const season = SEASONS_DETAILS[seasonName];
  const terrain = TERRAIN_DETAILS[terrainName];
  const skill = SKILLS.SURVIVAL;

  const rollMod = getIsDarkMod(season, quarterName) + getPathfinderMod(char);
  const skillRoll = rollSkill(char, skill, rollMod);

  let mishap = null;
  let result = null;

  if(!skillRoll.hits){
    result = 'mishap'
  } else {
    result = `${char.name} find the way.`
  }

  return {
    season,
    terrain,
    roll: skillRoll,
    mishap,
    result
  }
}
