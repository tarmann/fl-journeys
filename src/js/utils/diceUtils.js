export const rollDice = (max) => 1 + Math.floor(Math.random()*max);

export const rollD6 = () => rollDice(6);

export const rollFLDice = (type) => {
  const result = rollD6();

  return { type, result, hit: result >= 6, miss: result === 1 };
};

export const rollD66 = () => parseInt(rollD6() + '' + rollD6(), 10);
