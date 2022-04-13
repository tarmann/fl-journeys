import { BASE_SKILL_ATTRIBUTE } from '../constants/character';

import {
  rollFLDice,
  getHits,
  getMisses,
  getBaseDamage
} from './utils/diceUtils';

class SkillRoll {
  constructor(char, skill, mod) {
    this.char = char;
    this.skill = skill;
    this.mod = mod;
    this.baseAttr = BASE_SKILL_ATTRIBUTE[attr];
    this.baseDice = char[`${baseAttr}_current`];
    this.skillDice = char[attr];
    this.modSkillDice = modSkillDice = totalSKillDice < 0 ? 0 : totalSKillDice;
  }

  _roll(){
    this.results = [
      ...[...new Array(baseDice)].map(i => rollFLDice('base')),
      ...[...new Array(modSkillDice)].map(i => rollFLDice('skill')),
    ]
  }

  _pushRoll(){
    this.pushResults = this.results.map(roll => {
      if(roll.hit || roll.miss) return roll;
      return rollFLDice(roll.type);
    })
  }

  roll(){
    if(!this.results){
      this._roll();
    }
    return this;
  }

  pushRoll(){
    if(!this.results){
      this._pushRoll();
      throw ('You need to roll first');
    }
  }

  print(){
    return {
      roll: this.attr,
      baseDice: this.baseDice,
      skillDice: this.skillDice,
      mod: this.mod,
      results: this.results,
      hits: getHits(this.results),
      missses: getMisses(this.results),
      pushResults,
      pushHits: getHits(this.pushResults),
      pushBaseDamage: getBaseDamage(this.pushResults)
    }
  }
}

export default SkillRoll;
