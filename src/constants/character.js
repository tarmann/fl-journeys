export const ATTRIBUTES = {
  STREGTH: 'stregth',
  WITS: 'wits'
}

export const SKILLS = {
  SURVIVAL: 'survival',
  SCOUTING: 'scouting'
}

export const BASE_SKILL_ATTRIBUTE = {
  [SKILLS.SURVIVAL]: ATTRIBUTES.WITS,
  [SKILLS.SCOUTING]: ATTRIBUTES.WITS
}
