//Constructor for Hero object
  function Hero(name, level, health) {
    this.name = name;
    this.level = level;
    this.health = health;
  }

//Constructor for Warrior object which inherits properties from Hero -class. Every warrior also has name, level and health and also one property unique to them: weapon.
  function Warrior(name, level, health, weapon) {
    Hero.call(this, name, level, health);
    this.weapon = weapon;
  }

  function superHero(heroName, heroLevel = 1, heroClass ='Warrior') {
    Hero.call(this, name, level, health);
    this.heroClass = heroClass;
  }

//Constructor for Healer object which inherits properties from Hero -class. Every healer also has name, level and health and also one property unique to them: spell.
  function Healer(name, level, health, spell) {
    Hero.call(this, name, level, health);
    this.spell = spell;
  }

  function Monster(name, health){
    this.name = name;
    this.health = health;
    this.weapon = ["claws", "chainsaw", "speaking swedish"];
  }

// Link prototypes so that Warrior and Healer get the properties and methods from Hero.prototype.
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

//Add methods to existing prototypes.
Hero.prototype.greet = function () {
  console.log(this.name + " says hello");
}

//Warriors can attack. When calling this function, one needs to define the object of the attack. => playerWarrior.attack(monster)
Warrior.prototype.attack = function (target) {
  console.log(`${this.name} attacks ${target.name} with the ${this.weapon}.`);
  target.health = target.health-10;
  console.log(`${target.name} has ${target.health} health left.`);
}

//Healers can heal. When calling this function, one needs to specify the target object => playerHealer.heal(playerWarrior)
  Healer.prototype.heal = function (target) {
    target.health = target.health+15;
    console.log(`${this.name} casts ${this.spell} on ${target.name}. ${target.name} has ${target.health} left.`);
  }



//Create instances of different classes
var playerWarrior = new Warrior('Bjorn', 1, 100, 'axe');
var playerHealer = new Healer('Ben', 1, 80, 'cure');
var enemy = new Monster('Johnny', 200);


//Testing the different methods
  function fight(){
    playerWarrior.greet();
    playerWarrior.attack(enemy);
    playerHealer.greet();
    playerHealer.heal(playerWarrior);
  }
