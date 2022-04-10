import { createCharacter } from './utils/characterUtils';

export const CHARACTERS = {
  AMERGIN: createCharacter({
    name: 'Amergin',
    strengthTotal: 3,
    strengthCurrent: 3,
    agilityTotal: 6,
    agilityTotal: 6,
    witsTotal: 3,
    witsCurrent: 3,

    survival: 3,
    scouting: 3
  }),

  ARIS: createCharacter({
    name: 'Aris',
    strengthTotal: 3,
    strengthCurrent: 3,
    agilityTotal: 6,
    agilityTotal: 6,
    witsTotal: 3,
    witsCurrent: 3,
    
    scouting: 3,
    survival: 3,
  }),

  BEPO: createCharacter({
    name: 'Bepo',
    strengthTotal: 3,
    strengthCurrent: 3,
    agilityTotal: 6,
    agilityTotal: 6,
    witsTotal: 3,
    witsCurrent: 3,
    empathyTotal: 3,
    empathyCurrent: 3,
    
    melee: 2,
    stealth: 2,
    slightofhand: 2,
    move: 1,
    manipulation: 1,
    
    food: 6,
    water: 6,

    silver: 8
  }),

  HAWKINS: createCharacter({
    name: 'Hawkins',
    strengthTotal: 2,
    strengthCurrent: 2,
    agilityTotal: 4,
    agilityTotal: 4,
    witsTotal: 2,
    witsCurrent: 2,
    empathyTotal: 6,
    empathyCurrent: 6,
    performance: 2,
    
    food: 6,
    water: 6,
    
    silver: 8,
  })
}
