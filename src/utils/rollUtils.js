import { BASE_SKILL_ATTRIBUTE } from '../constants/character';

import { rollFLDice } from './diceUtils';

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

  return {
    roll: attr,
    baseDice,
    skillDice,
    mod,
    results,
    hits: results.filter(i => i.hit === true).length,
    missses: results.filter(i => i.miss === true).length,
  }
}
