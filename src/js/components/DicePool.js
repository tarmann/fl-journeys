const DicePool = ({
  results,
}) => {
  return results.map(die => `[${die.result}]`);
}

export default DicePool;

