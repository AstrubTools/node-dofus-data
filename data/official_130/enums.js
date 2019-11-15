function keysToObject (keys) {
  return keys.reduce((acc, e, i) => {
    acc[e] = i
    return acc
  }, {})
}

const FightEffect =
{
  emote: 10,
	item: [165, 939, 940],
	spell: [293, 294, 787, 616, 624],
	map: 601,
	job1: [614, 615],
	monster: [628, 623, 717],
	monsterSuperRace: 715,
	monsterRace: 716,
	unknownWithDate: [805, 808, 983],
	leanFatNormal: 806,
	pet: 807,
	itemUnic: 814,
	state: [950, 951],
	spellBoostRange: 281,
	spellBoostRangeable: 282,
	spellBoostDmg: 283,
	spellBoostHeal: 284,
	spellBoostPaCost: 285,
	spellBoostCastIntvl: 286,
	spellBoostCc: 287,
	spellBoostCastOutline: 288,
	spellBoostNoLineOfSight: 289,
	spellBoostMaxPerTurn: 290,
	spellBoostMaxPerTarget: 291,
	spellBoostSetIntvl: 292,
	none: 999,
}

const Orientation = {
  right: [0.06, 0.20, 0.15],
  downRight: [0.07, 0.23, 0.17],
  down: [0.06, 0.20, 0.15],
  downLeft: [0.06, 0.20, 0.15],
  left: [0.06, 0.20, 0.15],
  upLeft: [0.07, 0.23, 0.17],
  up: [0.06, 0.20, 0.15],
  upRight: [0.06, 0.20, 0.15]
}

function isDiagonal (orientation) {
  switch (orientation) {
    case Orientation.downLeft:
    case Orientation.downRight:
    case Orientation.upLeft:
    case Orientation.upRight:
      return true
    default:
      return false
  }
}

function opposite (orientation) {
  switch (orientation) {
    case Orientation.down:
      return Orientation.up
    case Orientation.downLeft:
      return orientation.upRight
    case Orientation.downRight:
      return Orientation.upLeft
    case Orientation.left:
      return Orientation.right
    case Orientation.right:
      return Orientation.left
    case Orientation.up:
      return Orientation.down
    case Orientation.upLeft:
      return Orientation.downRight
    case Orientation.upRight:
      return Orientation.downLeft
    default:
      throw new Error()
  }
}

function getNearestNeighborWithoutDiagonal (orientation) {
  switch (orientation) {
    case Orientation.downLeft:
    case Orientation.downRight:
      return Orientation.down
    case Orientation.upLeft:
    case Orientation.upRight:
      return Orientation.up
    default:
      return orientation
  }
}

const Server = {
  eratz: 601,
  henual: 602,
  nabur: 603,
  arty: 604,
  algathe: 605,
  hogmeiser: 606,
  droupik: 607,
  ayuto: 608,
  bilby: 609,
  clustus: 610,
  issering: 611
}

const CellType = {
  notWalkable: 0,
  interactiveObject: 1,
  teleportCell: 2,
  unknown1: 3,
  walkable: 4,
  unknown2: 5,
  path1: 6,
  path2: 7
}

// https://github.com/HydreIO/dofus-protocol-1.29/blob/c9ea6434746e8fb7c16d3b7581d3a21a45ef4db7/src/main/java/fr/aresrpg/dofus/protocol/game/actions/GameActions.java
const GameAction = {
  unknown: -1,
  move: 1,
  server: {
    error: 0,
    lifeChange: 100,
    paChange: 102,
    kill: 103,
    tacle: 104,
    pmChange: 129,
    summon: 180,
    spellLaunched: 300,
    harvestTime: 501,
    duelServerAsk: 900,
    fightJoinError: 903
  },
  client: {
    launchSpell: 300,
    interract: 500,
    duel: 900,
    acceptDuel: 901,
    joinFight: 903
  },
  refuseDuel: 902
}

function reverseObject (o) {
  return Object.keys(o).reduce((acc, k) => {
    acc[o[k]] = k
    return acc
  }, {})
}

module.exports = { GameAction, CellType, Server, Orientation, isDiagonal, opposite, getNearestNeighborWithoutDiagonal }
