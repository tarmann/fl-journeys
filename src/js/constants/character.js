export const ATTRIBUTES = {
  STRENGTH: 'strength',
  AGILITY: 'agility',
  WITS: 'wits',
  EMPATHY: 'empathy'
}

export const SKILLS = {
  SURVIVAL: 'survival',
  SCOUTING: 'scouting',
  PERFORMANCE: 'performance'
}

export const BASE_SKILL_ATTRIBUTE = {
  [SKILLS.SURVIVAL]: ATTRIBUTES.WITS,
  [SKILLS.SCOUTING]: ATTRIBUTES.WITS,
  [SKILLS.PERFORMANCE]: ATTRIBUTES.EMPATHY
}
