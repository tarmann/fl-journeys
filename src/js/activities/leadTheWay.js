import { SKILLS } from '../constants/character';

import LEADTHEWAY_MISHAPS from '../mishaps/leadtheway_mishaps';

import { getIsDarkMod, getPathfinderMod } from '../utils/activityUtils';
import { rollD66 } from '../utils/diceUtils';

import Activity  from "../lib/Activity";

class LeadTheWayActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SCOUTING;
  }
  
  getMod(){
    return getIsDarkMod(this.season, this.quarterName) + getPathfinderMod(this.char);
  }

  getMishap(){
    const result = rollD66();
    const mishap = LEADTHEWAY_MISHAPS
      .find(i => result >= i.range[0] && result <= i.range[1] ).description;
    return mishap;
  }
}

const leadTheWay = (char, season, terrain, quarter, options) => {
  return new LeadTheWayActivity(char, {season, terrain, quarter}, options)
    .roll()
    .print();
}

export default leadTheWay;