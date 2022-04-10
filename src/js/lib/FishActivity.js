import { SKILLS } from '../constants/character';

import Activity  from "./Activity";

class FishActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

export default FishActivity;