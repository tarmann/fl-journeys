import { SKILLS } from '../constants/character';
import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import LEADTHEWAY_MISHAPS from '../mishaps/leadtheway_mishaps';

import { rollD66 } from '../utils/diceUtils';
import { rollSkill } from '../utils/rollUtils';

const getIsDarkMod = (season, quarterName) => season.light[quarterName] ? 0 : -2;

const getPathfinderMod = (char) => {
  if(char.pathfinderRank === 1){
    return 1;
  } else {
    return 0;
  }
}

const getMishap = () => {
  const result = rollD66();
  const mishap = LEADTHEWAY_MISHAPS.find(i => result >= i.range[0] && result <= i.range[1] ).description;
  return mishap;
}

export const leadTheWay = (char, seasonName, terrainName, quarterName, { adaptable = null } = {}) => {
  const season = SEASONS_DETAILS[seasonName];
  const terrain = TERRAIN_DETAILS[terrainName];
  const skill = adaptable || SKILLS.SURVIVAL;

  const rollMod = getIsDarkMod(season, quarterName) + getPathfinderMod(char);
  const skillRoll = rollSkill(char, skill, rollMod);

  let mishap = null;
  let result = null;

  if(!skillRoll.hits){
    result = `${char.name} fail on finding thw way. <br /> ${getMishap()}`
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

export default leadTheWay;
