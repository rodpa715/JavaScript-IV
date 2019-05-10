/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
    class GameObject{
        constructor(attributes){
            this.createdAt = attributes.createdAt;
            this.name = attributes.name;
            this.dimensions = attributes.dimensions;
        }
        destroy(){
            return `${this.name} was removed from the game.`;
        }
    }

class CharacterStats extends GameObject{
    constructor(attributes){
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage(){
        return `${this.name}took damage.`
    }
}

 class Humanoid extends CharacterStats{
    constructor(attributes){
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
      }
      greet(){
        return `${this.name}offers a greeting in ${this.language}`
      }
    }

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
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

// Stretch Goal

  class Figher extends Humanoid{
    constructor(attributes){
        super(attributes)
    }
    dealDamage(object, dmg = 10){
        object.healthPoints -= dmg
        if (object.healthPoints <= 0){
            console.log(object.destroy())
        }else{
        console.log(`${this.name} just dealt ${dmg} DMG to ${object.name}, he now has ${object.healthPoints} HP`)
        }
    }
  }

  const kaido = new Figher({ //villain
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6,
    },
    healthPoints: 300,
    name: 'Kaido',
    team: 'Beasts Pirates',
    weapons: [
      'Giant Sword',
      "Conqueror's Haki",
    ],
    language: 'Japanese',
  });


  const luffy = new Figher({ //hero
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 2,
    },
    healthPoints: 150,
    name: 'Monkey D. Luffy',
    team: 'Straw Hats Pirates',
    weapons: [
      'Gomu Gomu no mi',
      "Conqueror's Haki",
    ],
    language: 'Japanese',
  });
  console.log("Enter game() in the console to see the battle fold out.")
  function game(){
    setTimeout( () =>  console.log("#######################"), 500)
    setTimeout( () =>  console.log("##### GAME BEGINS #####"), 750)
    setTimeout( () =>  console.log("#######################"), 1000)
    setTimeout( () =>  luffy.dealDamage(kaido, 35), 2000)
    setTimeout( () =>  kaido.dealDamage(luffy, 50), 4000)
    setTimeout( () =>  luffy.dealDamage(kaido, 45), 6000)
    setTimeout( () =>  luffy.dealDamage(kaido, 90), 8000)
    setTimeout( () =>  kaido.dealDamage(luffy, 74), 10000)
    setTimeout( () =>  luffy.dealDamage(kaido, 100), 12000)
    setTimeout( () =>  console.log(`${luffy.name} enfuriated ${kaido.name}`), 14000)
    setTimeout( () =>  console.log(`The ${kaido.team} kidnapped The ${luffy.team}`), 16000)
    setTimeout( () =>  kaido.dealDamage(luffy, 24), 18000)
    setTimeout( () =>  console.log(`${kaido.name} gave ${luffy.name} a beating but he managed to get away...`), 20000)
    setTimeout( () =>  console.log(`The fog off the battle lifts, The ${luffy.team} dissapeared...`), 20000)
    setTimeout( () =>  console.log(`In whom's hands are the ${luffy.team} now...`), 22000)
    setTimeout( () =>  console.log("##############################"), 23000)
    setTimeout( () =>  console.log("##### TO BE CONTINUED... #####"), 23500)
    setTimeout( () =>  console.log("##############################"), 24000)
}