import { SEASONS_DETAILS } from '../constants/seasons';
import { TERRAIN_DETAILS } from '../constants/terrain';

import {
  getIsDarkMod,
  getPathfinderMod
} from '../utils/activityUtils';

import { rollSkill } from '../utils/rollUtils';

class Activity {
  constructor(char, setting, options = {}){
    this.char = char;
    this.season = SEASONS_DETAILS[setting.season];
    this.terrain = TERRAIN_DETAILS[setting.terrain];
    this.quarterName = setting.quarter;
    this.skill = options.adaptable ||  this.getActivitySkill();
    this.options = options;
    return this;
  }

  getIsDarkMod(){
    return getIsDarkMod(this.season, this.quarterName);
  }

  getPathfinderMod(){
    return getPathfinderMod(this.char);
  }

  getMod(){
    return 0;
  }

  // TODO: roll mishap once
  getMishap(){
    return {result: null};
  }

  roll(){
    this.skillRoll = rollSkill(this.char, this.skill, this.getMod());
    return this;
  }

  getFailedResult(){
    return `${this.char.name} failed. ${this.getMishap().result}`;
  }

  getSuccessResult(){
    return `${this.char.name} is successful.`
  }

  getResult(){
    if(!this.skillRoll.hits){
      return this.getFailedResult();
    } else {
      return this.getSuccessResult();
    }    
  }

  print(){
    return {
      season: this.season,
      terrain: this.terrain,
      roll: this.skillRoll,
      mishap: this.getMishap(),
      result: this.getResult()
    }
  }
}

export default Activity;