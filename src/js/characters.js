import { createCharacter } from './utils/characterUtils';

export const CHARACTERS_DATA = [
  createCharacter({
    name: 'Amergin',

    strength: [3,3],
    agility: [6,6],
    wits: [3,3],

    strength_total: 3,
    strength_current: 3,
    agility_total: 6,
    agility_total: 6,
    wits_total: 3,
    wits_current: 3,

    survival: 3,
    scouting: 3
  }),

  createCharacter({
    name: 'Aris',
    strength_total: 3,
    strength_current: 3,
    agility_total: 6,
    agility_current: 6,
    wits_total: 3,
    wits_current: 3,

    scouting: 3,
    survival: 3,
  }),

  createCharacter({
    name: 'Bepo',
    strength_total: 3,
    strength_current: 3,
    agility_total: 6,
    agility_total: 6,
    wits_total: 3,
    wits_current: 3,
    empathy_total: 3,
    empathy_current: 3,

    melee: 2,
    stealth: 2,
    slightofhand: 2,
    move: 1,
    manipulation: 1,

    food: 6,
    water: 6,

    silver: 8
  }),

  createCharacter({
    name: 'Hawkins',
    strength_total: 2,
    strength_current: 2,
    agility_total: 4,
    agility_total: 4,
    wits_total: 2,
    wits_current: 2,
    empathy_total: 6,
    empathy_current: 6,

    performance: 2,

    food: 6,
    water: 6,

    silver: 8,
  })
]]
