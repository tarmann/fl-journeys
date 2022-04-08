export const SEASONS = {
  SPRING: 'spring',
  SUMMER: 'summer',
  AUTUMN: 'autumn',
  WINTER: 'winter',
}

export const SEASONS_DETAILS = {
  [SEASONS.SPRING]: {
    name: SEASONS.SPRING,
    forage: -1,
    light: {
      morning: true,
      daytime: true,
      evening: false,
      nighttime: false
    }
  },
  [SEASONS.SUMMER]: {
    name: SEASONS.SUMMER,
    forage: 0,
    light: {
      morning: true,
      daytime: true,
      evening: true,
      nighttime: false
    }
  },
  [SEASONS.AUTUMN]: {
    name: SEASONS.AUTUMN,
    forage: 1,
    light: {
      morning: true,
      daytime: true,
      evening: false,
      nighttime: false
    }
  },
  [SEASONS.WINTER]: {
    name: SEASONS.WINTER,
    forage: -2,
    light: {
      morning: false,
      daytime: true,
      evening: false,
      nighttime: false
    }
  },
}
