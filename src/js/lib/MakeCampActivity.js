import { SKILLS } from '../constants/character';

import Activity  from "../lib/Activity";

class MakeCampActivity extends Activity {
  getName(){
    return 'makeCamp';
  }

  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

export default MakeCampActivity;
