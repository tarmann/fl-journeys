import { BASE_SKILL_ATTRIBUTE } from '../constants/character';

import {
  rollFLDice,
  getHits,
  getMisses,
  getBaseDamage,
} from './diceUtils';

export const rollSkill = (char, attr, mod = 0) => {
  const baseAttr = BASE_SKILL_ATTRIBUTE[attr];
  const baseDice = char[`${baseAttr}Current`];
  const skillDice = char[attr];
  const totalSKillDice  = char[attr] + mod;

  const modSkillDice = totalSKillDice < 0 ? 0 : totalSKillDice;

  const results = [
    ...[...new Array(baseDice)].map(i => rollFLDice('base')),
    ...[...new Array(modSkillDice)].map(i => rollFLDice('skill')),
  ];

  const pushResults = results.map(roll => {
    if(roll.hit || roll.miss) return roll;
    return rollFLDice(roll.type);
  })

  const rollData = {
    roll: attr,
    baseDice,
    skillDice,
    mod,
    results,
    hits: getHits(results),
    missses: getMisses(results),
    pushResults,
    pushHits: getHits(pushResults),
    pushBaseDamage: getBaseDamage(pushResults)
  }

  return rollData;
}
