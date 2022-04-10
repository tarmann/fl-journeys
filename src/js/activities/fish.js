import FishActivity  from "../lib/FishActivity";

const fish = (char, season, terrain, quarter) => {
  return new FishActivity(char, {season, terrain, quarter}).roll().print();
}

export default fish;