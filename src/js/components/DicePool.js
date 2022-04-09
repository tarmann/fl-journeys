import DiceRoll from './DiceRoll';

const DicePool = ({
  results,
}) => {
  return results.map(roll => <DiceRoll roll={roll} />);
}

export default DicePool;

