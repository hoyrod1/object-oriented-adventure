console.log(
  "======================== object-oriented-adventure ========================"
);
console.log(
  "======================== Part 1: Humble Beginnings ========================"
);
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
//--------------------------------------------------------------------------//
//--------------------------------------------------------------------------//
adventurer.inventory.forEach((item) => {
  console.log(item);
});
//--------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
adventurer.companion.companion2 = {
  name: "Frank",
  type: "Flea",
  belongings: ["hat", "sunglasses"],
};
adventurer.roll();
// console.log(adventurer);
//---------------------------------------------------------------------------//
console.log("==================== Part 2: Class Fantasy ====================");
//===========================================================================//
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.inventory = ["fury hat", "nail clippers"];
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
// console.log(robin);
robin.inventory.forEach((item) => {
  console.log(item);
});
robin.roll();
robin.companion.inventory.forEach((item) => {
  console.log(item);
});
robin.roll();
robin.companion.companion.inventory.forEach((item) => {
  console.log(item);
});
//---------------------------------------------------------------------------//
console.log("==================== Part 3: Class Features ====================");
//===========================================================================//
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
