
const ItemCategory = {
  amulet: 1,
  bow: 2,
  wand: 3,
  staff: 4,
  dagger: 5,
  sword: 6,
  hammer: 7,
  shovel: 8,
  ring: 9,
  belt: 10,
  boot: 11,
  potion: 12,
  experienceParchment: 13,
  gift: 14,
  resource: 15,
  hat: 16,
  cloack: 17,
  pet: 18,
  axe: 19,
  tool: 20,
  pickaxe: 21,
  scythe: 22,
  dofus: 23,
  quest: 24,
  document: 25,
  alchemyPotion: 26,
  transform: 27,
  boostFood: 28,
  benediction: 29,
  malediction: 30,
  rolePlayGift: 31,
  follower: 32,
  bread: 33,
  cereal: 34,
  flower: 35,
  plant: 36,
  beer: 37,
  wood: 38,
  ore: 39,
  alloy: 40,
  fish: 41,
  candy: 42,
  forgetPotion: 43,
  jobPotion: 44,
  spellPotion: 45,
  fruit: 46,
  bone: 47,
  powder: 48,
  comestibleFish: 49,
  preciousStone: 50,
  stone: 51,
  flour: 52,
  feather: 53,
  hair: 54,
  fabric: 55,
  leather: 56,
  wool: 57,
  seed: 58,
  skin: 59,
  oil: 60,
  stuffedToy: 61,
  guttedFish: 62,
  meat: 63,
  preservedMeat: 64,
  tail: 65,
  metaria: 66,
  vegetable: 68,
  comestibleMeat: 69,
  dye: 70,
  alchemyEquipment: 71,
  petegg: 72,
  weaponControl: 73,
  feeArtifice: 74,
  spellParchment: 75,
  statParchment: 76,
  kennelCertificate: 77,
  smithMagicRune: 78,
  drink: 79,
  questObject: 80,
  backpack: 81,
  shield: 82,
  soulStone: 83,
  key: 84,
  fullSoulStone: 85,
  taxCollectorForgetPotion: 86,
  parchmentResearch: 87,
  magicStone: 88,
  gifts: 89,
  ghostPet: 90,
  dragodinde: 91,
  bouftou: 92,
  breedingObject: 93,
  usableObject: 94,
  plank: 95,
  bark: 96,
  dragodindeCertificate: 97,
  root: 98,
  catchNet: 99,
  resourceBag: 100,
  crossbow: 102,
  paw: 103,
  wing: 104,
  egg: 105,
  ear: 106,
  carapace: 107,
  bud: 108,
  eye: 109,
  jelly: 110,
  shell: 111,
  prism: 112,
  obvijevan: 113,
  magicWeapon: 114,
  shushuSoulPiece: 115,
  petPotion: 116
}

function isEquipment (i) {
  return i === ItemCategory.amulet ||
        i === ItemCategory.ring ||
        i === ItemCategory.belt ||
        i === ItemCategory.boot ||
        i === ItemCategory.hat ||
        i === ItemCategory.cloack ||
        i === ItemCategory.pet ||
        i === ItemCategory.dofus ||
        i === ItemCategory.backpack ||
        i === ItemCategory.shield ||
        i === ItemCategory.dragodinde ||
        i === ItemCategory.obvijevan ||
        i.isweapon(i)
}

function isWeapon (i) {
  return i === ItemCategory.bow ||
        i === ItemCategory.wand ||
        i === ItemCategory.staff ||
        i === ItemCategory.dagger ||
        i === ItemCategory.sword ||
        i === ItemCategory.hammer ||
        i === ItemCategory.shovel ||
        i === ItemCategory.axe ||
        i === ItemCategory.tool ||
        i === ItemCategory.pickaxe ||
        i === ItemCategory.scythe ||
        i === ItemCategory.crossbow ||
        i === ItemCategory.soulStone ||
        i === ItemCategory.magicWeapon
}

function isUsable (i) {
  return i === ItemCategory.potion ||
        i === ItemCategory.experienceParchment ||
        i === ItemCategory.gift ||
        i === ItemCategory.boostFood ||
        i === ItemCategory.benediction ||
        i === ItemCategory.malediction ||
        i === ItemCategory.bread ||
        i === ItemCategory.beer ||
        i === ItemCategory.candy ||
        i === ItemCategory.forgetPotion ||
        i === ItemCategory.jobPotion ||
        i === ItemCategory.spellPotion ||
        i === ItemCategory.guttedFish ||
        i === ItemCategory.meat ||
        i === ItemCategory.preservedMeat ||
        i === ItemCategory.comestibleMeat ||
        i === ItemCategory.weaponControl ||
        i === ItemCategory.feeArtifice ||
        i === ItemCategory.spellParchment ||
        i === ItemCategory.statParchment ||
        i === ItemCategory.drink ||
        i === ItemCategory.fullSoulStone ||
        i === ItemCategory.gifts ||
        i === ItemCategory.usableObject ||
        i === ItemCategory.catchNet ||
        i === ItemCategory.prism ||
        i === ItemCategory.petPotion
}

function isRessource (i) {
  return !isEquipment(i) || !isUsable(i)
}
