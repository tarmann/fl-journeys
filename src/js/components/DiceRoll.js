import baseD6_1 from '../../image/dice/base-d6-1.png';
import baseD6_2 from '../../image/dice/base-d6-2.png';
import baseD6_3 from '../../image/dice/base-d6-3.png';
import baseD6_4 from '../../image/dice/base-d6-4.png';
import baseD6_5 from '../../image/dice/base-d6-5.png';
import baseD6_6 from '../../image/dice/base-d6-6.png';

import skillD6_1 from '../../image/dice/skill-d6-1.png';
import skillD6_2 from '../../image/dice/skill-d6-2.png';
import skillD6_3 from '../../image/dice/skill-d6-3.png';
import skillD6_4 from '../../image/dice/skill-d6-4.png';
import skillD6_5 from '../../image/dice/skill-d6-5.png';
import skillD6_6 from '../../image/dice/skill-d6-6.png';

const DIE_IMAGE = {
  base: {
    1: baseD6_1,
    2: baseD6_2,
    3: baseD6_3,
    4: baseD6_4,
    5: baseD6_5,
    6: baseD6_6,
  },
  skill: {
    1: skillD6_1,
    2: skillD6_2,
    3: skillD6_3,
    4: skillD6_4,
    5: skillD6_5,
    6: skillD6_6,
  }
}

const DiceRoll = ({
  roll,
}) => {
  const image = DIE_IMAGE[roll.type][roll.result];

  if(!image) return;

  return (
    <img src={image} width="30" />
  )
}

export default DiceRoll;

