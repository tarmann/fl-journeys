import { SKILLS } from '../constants/character';

import Activity  from "./Activity";

class FishActivity extends Activity {
  getName(){
    return 'fish';
  }

  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

export default FishActivity;
