function keysToObject (keys) {
  return keys.reduce((acc, e, i) => {
    acc[e] = i
    return acc
  }, {})
}
/*
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
	PET(807),
	ITEM_UNIC(814),
	STATE(950, 951),
	SPELL_BOOST_RANGE(281),
	SPELL_BOOST_RANGEABLE(282),
	SPELL_BOOST_DMG(283),
	SPELL_BOOST_HEAL(284),
	SPELL_BOOST_PA_COST(285),
	SPELL_BOOST_CAST_INTVL(286),
	SPELL_BOOST_CC(287),
	SPELL_BOOST_CASTOUTLINE(288),
	SPELL_BOOST_NOLINEOFSIGHT(289),
	SPELL_BOOST_MAXPERTURN(290),
	SPELL_BOOST_MAXPERTARGET(291),
	SPELL_BOOST_SET_INTVL(292),
	NONE(999);

}
*/

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


module.exports = { GameAction }
