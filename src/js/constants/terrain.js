export const TERRAINS = {
  PLAINS: 'plains',
  FOREST: 'forest',
  DARK_FOREST: 'darkForest',
  HILLS: 'hills',
  MOUNTAINS: 'mountains',
  HIGH_MOUNTAINS: 'highMountains',
  LAKE_RIVER: 'lakeRiver',
  MARSHLANDS: 'marshlands',
  QUAGMIRE: 'quagmire',
  RUINS: 'ruins',
}

export const TERRAIN_DETAILS = {
  [TERRAINS.PLAINS]: {
    name: 'plains',
    movement: 'open',
    forage: -1,
    hunt: 1
  },
  [TERRAINS.FOREST]: {
    name: 'forest',
    movement: 'open',
    forage: 1,
    hunt: 1
  },
  [TERRAINS.DARK_FOREST]: {
    name: 'darkForest',
    movement: 'open',
    forage: -1,
    hunt: 0
  },
  [TERRAINS.HILLS]: {
    name: 'hills',
    movement: 'open',
    forage: 0,
    hunt: 0
  },
  mountains: {
    name: 'mountains',
    movement: 'open',
    forage: -2,
    hunt: -1
  },
  highMountains: {
    name: 'highMountains',
    movement: 'open',
    forage: null,
    hunt: null
  },
  lakeRiver: {
    name: 'lakeRiver',
    movement: 'open',
    forage: null,
    hunt: 0
  },
  marshlands: {
    name: 'marshlands',
    movement: 'open',
    forage: 1,
    hunt: -1
  },
  quagmire: {
    name: 'quagmire',
    movement: 'open',
    forage: -1,
    hunt: 0
  },
  ruins: {
    name: 'ruins',
    movement: 'open',
    forage: -2,
    hunt: -1
  },
}
