import { SKILLS } from '../constants/character';
import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import { rollSkill } from '../utils/rollUtils';
import { getIsDarkMod } from '../utils/journeyUtils';

export const keepWatch = (char, seasonName, terrainName, quarterName) => {
  const season = SEASONS_DETAILS[seasonName];
  const terrain = TERRAIN_DETAILS[terrainName];
  const skill = SKILLS.SCOUTING;

  const rollMod = getIsDarkMod(season, quarterName);
  const skillRoll = rollSkill(char, skill, rollMod);

  let mishap = null;
  let result = null;

  if(!skillRoll.hits){
    result = `${char.name} fails the watch.`
  } else {
    result = `${char.name} is successful on the watch.`
  }

  return {
    season,
    terrain,
    roll: skillRoll,
    mishap,
    result
  }
}

export default keepWatch;
