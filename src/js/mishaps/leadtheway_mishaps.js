const LEADTHEWAY_MISHAPS = [
  {
    range: [11,12],
    description: "Quicksand: The ground gives way under your feet. You have walked into an area of quicksand. You are completely stuck, and you must roll MIGHT to escape. If you fail, you suffer 1 point of damage to Agility and must roll again. Whoever pulls free can help anyone who is still stuck. You also need to go around the treacherous area and won’t make any progress on the map during this Quarter Day. ",
  },
  {
    range: [13,21],
    description: "Blocked Terrain: The way forward is blocked by rocks, fallen trees, thick shrubbery, or flooding (depending on the terrain type in the hex). You must roll MIGHT or MOVE to be able to move forward. If you fail, you suffer one point of damage to Strength and must roll again. Anyone who rolls successfully can help anyone who did not. You won’t make any progress on the map during this Quarter Day. ",
  },
  {
    range: [22,26],
    description: "Lost: You realize that you have walked in a circle. You are lost and won’t make any progress on the map during this Quarter Day. Your pathfinder must also roll SURVIVAL successfully to find her way out of the hexagon. One roll can be made per Quarter Day. ",
  },
  {
    range: [31,32],
    description: "Sprained Ankle: Your pathfinder falls or twists her ankle and suffers a critical injury: To RUN becomes a slow action. (Healing Time: D6 days) ",
  },
  {
    range: [33,34],
    description: "Torn Clothes: Your clothes are damaged. Your boots break or your robe rips on thorny plants or sharp rocks. You must roll for the effects of cold. Your clothes can be mended by making a successful CRAFTING roll. ",
  },
  {
    range: [35,36],
    description: "Landslide: You are walking in rough terrain when the ground suddenly opens beneath your feet. You must roll MOVE – if you fail, you suffer an attack with four Base Dice and Weapon Damage 1 (blunt trauma). ",
  },
  {
    range: [41,45],
    description: "Downpour: A massive rainfall or snow storm (depending on the time of year) catches you unawares. You must roll for the effects of cold. You must also seek shelter until the storm has passed and won’t make any progress on the map during this Quarter Day. ",
  },
  {
    range: [46,52],
    description: "Fog: You are caught unawares by a thick fog. The distance you cover this Quarter Day is decreased by one hex. In difficult terrain, you’re stuck in the hex you started. In addition, each adventurer suffers one point of damage to Empathy from the gloomy mist. ",
  },
  {
    range: [53,54],
    description: "Wasps' Nest: You step right into a nest of wasps. An angry swarm attack the entire group. Each adventurer must make a MOVE roll or suffer an attack with four Base Dice, causing damage to Agility. ",
  },
  {
    range: [55,61],
    description: "Mosquito Swarm: A large swarm of mosquitoes or gnats attacks you, driving you crazy with their biting and buzzing. They attack with four Base Dice, causing damage to Empathy.",
  },
  {
    range: [62,64],
    description: "Savage Animal: A wolf, bear or other wild animal feels threatened, and attacks you. The GM chooses an animal from the table on page 126 of the Gamemaster’s Guide. ",
  },
  {
    range:[65,66],
    description: "Persistent Animal: A squirrel, bird or other small animal follows you around and doesn’t leave you alone. The animal causes trouble, described by the GM – it might make a noise at some inappropriate time, eat your food or steal something. ",
  },
]

export default LEADTHEWAY_MISHAPS;
