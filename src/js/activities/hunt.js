import { SKILLS } from '../constants/character';

import Activity  from "../lib/Activity";

class HuntActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

const hunt = (char, season, terrain, quarter, options) => {
  return new HuntActivity(char, {season, terrain, quarter}, options)
    .roll()
    .print();
}

export default hunt;