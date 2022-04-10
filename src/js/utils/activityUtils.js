
export const getIsDarkMod = (season, quarterName) => season.light[quarterName] ? 0 : -2;

export const getPathfinderMod = (char) => (char.pathfinderRank === 1) ? 1 : 0;