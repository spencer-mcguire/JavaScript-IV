/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//old code was removed after refactor

class GameObject{
    constructor(attr){
        this.createdAt = attr.createdAt,
	    this.name = attr.name,
	    this.dimensions = attr.dimensions
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    };
}

class CharacterStats extends GameObject{
    constructor(attrTwo){
        super(attrTwo);
        this.healthPoints = attrTwo.healthPoints
    }
    takeDamage(){
        return `${this.name} took damage.`;
    };
}

class Humanoid extends CharacterStats{
    constructor(attrThree){
        super(attrThree);
        this.team = attrThree.team,
	    this.weapons = attrThree.weapons,
	    this.language = attrThree.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`;
    };
}


// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: "Bruce",
	team: "Mage Guild",
	weapons: ["Staff of Shamalama"],
	language: "Common Tongue"
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 15,
	name: "Sir Mustachio",
	team: "The Round Table",
	weapons: ["Giant Sword", "Shield"],
	language: "Common Tongue"
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 10,
	name: "Lilith",
	team: "Forest Kingdom",
	weapons: ["Bow", "Dagger"],
	language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// function Villain(arr) {
// 	Humanoid.call(this, arr);
// }
// inheritsFrom(Villain, Humanoid);
// Villain.prototype.ppk = function() {
// 	return `${this.name} lowers health by 50%`;
// };
// function Hero(arr) {
// 	Villain.call(this, arr);
// }
// inheritsFrom(Hero, Villain);
// Hero.prototype.bazooka = function() {
// 	return `${this.name} blows up everything.`;
// };

class Villain extends Humanoid{
    constructor(arr){
        super(arr);
    }
    ppk() {
        return `${this.name} lowers health by 50%`;
    };
}

class Hero extends Humanoid{
    constructor(arr){
        super(arr);
    }
    bazooka() {
        return `${this.name} blows up everything.`;
    };
}

const harrold = new Villain({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: "Harrold",
	team: "Mage Guild",
	weapons: ["Staff of Shamalama"],
	language: "Common Tongue"
});

const jack = new Hero({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: "Jack",
	team: "Mage Guild",
	weapons: ["Staff of Shamalama"],
	language: "Common Tongue"
});
console.log(harrold.ppk());
console.log(jack.bazooka());

