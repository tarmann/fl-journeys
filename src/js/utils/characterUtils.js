export const createCharacter = (attrs) => {
  return {
    name: '',

    strengthTotal: 0,
    strengthCurrent: 0,
    agilityTotal: 0,
    agilityTotal: 0,
    witsTotal: 0,
    witsCurrent: 0,
    empathyTotal: 0,
    empathyCurrent: 0,

    might: 0,
    endurance: 0,
    melee: 0,
    crafting: 0,
    stealth: 0,
    slightofhand: 0,
    move: 0,
    marksmanship: 0,
    scouting: 0,
    lore: 0,
    survival: 0,
    insight: 0,
    manipulation: 0,
    performance: 0,
    healing: 0,
    animalhandling: 0,

    food: 0,
    water: 0,
    arrows: 0,

    silver: 0,

    ...attrs
  }
}
