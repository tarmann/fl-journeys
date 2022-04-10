import ForageActivity  from "../lib/ForageActivity";

const forage = (char, season, terrain, quarter, options) => {
  return new ForageActivity(char, {season, terrain, quarter}, options)
    .roll()
    .print();
}

export default forage;