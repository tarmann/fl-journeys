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

  getMishap(){
    return null;
  }

  roll(){
    this.skillRoll = rollSkill(this.char, this.skill, this.getMod());
    return this;
  }

  getResult(){
    if(!this.skillRoll.hits){
      return `${this.char.name} failed.`;
    } else {
      return `${this.char.name} is successful.`
    }    
  }

  print(){
    return {
      season: this.season,
      terrain: this.terrain,
      roll: this.skillRoll,
      mishap: this.mishap,
      result: this.getResult()
    }
  }
}

export default Activity;