import { SKILLS } from '../constants/character';

import Activity  from "../lib/Activity";

class FishActivity extends Activity {
  getActivitySkill(){
    return SKILLS.SURVIVAL;
  }
}

const fish = (char, season, terrain, quarter) => {
  const fishActivity = new FishActivity(char, {season, terrain, quarter});

  return fishActivity.roll().print();
}

export default fish;