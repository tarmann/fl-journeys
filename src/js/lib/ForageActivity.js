import { SKILLS } from '../constants/character';
import { FORAGE_MISHAPS } from '../mishaps/forage_mishaps';

import { rollD6 } from '../utils/diceUtils';

import Activity  from "./Activity";

class ForageActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
  
  getMod(){
    return this.options.isHiking ? -1 : 0;
  }

  getMishap(){
    return FORAGE_MISHAPS[rollD6()-1];
  }
}

export default ForageActivity;