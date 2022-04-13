import DicePool from './DicePool';

const CharacterAction = ({action}) => (
  <p>
    <div>{action.result}</div>
    <div>
      <DicePool results={action.roll.results} />
      ({action.roll.hits})
    </div>
    <div>
      <DicePool results={action.roll.pushResults} />
      ({action.roll.pushHits})({action.roll.pushBaseDamage})
    </div>
  </p>
)

export default CharacterAction;
