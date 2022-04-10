import { SKILLS } from '../constants/character';

import Activity  from "../lib/Activity";

class MakeCampActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

const makeCamp = (char, season, terrain, quarter, options) => {
  return new MakeCampActivity(char, {season, terrain, quarter}, options)
    .roll()
    .print();
}

export default makeCamp;