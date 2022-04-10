import { useState } from 'react';

import UISelect from './UISelect';

import { ACTIVITIES } from '../constants/activities';

const ActivitySelect = ({ charName, onChange }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <p>
      <div>
        {charName} will...
        <UISelect
          options={ACTIVITIES}
          onChange={onChange}
        />
      </div>
      <button onClick={() => setShowMore(!showMore)}>Show more</button>
      
      {showMore ? (
        <ul>
        <li><input type="checkbox" /> Hiking </li>
        <li><input type="checkbox" /> Eat / Drink</li>
        <li><input type="checkbox" /> Recover Arrows</li>
        <li>Adaptable</li>
      </ul>
      ) : null}
    </p>
  )
}

export default ActivitySelect;