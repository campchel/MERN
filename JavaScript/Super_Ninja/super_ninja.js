class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log('My name is ' +  this.name);
    }

    showStats() {
        console.log(`Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`)
    }

    drinkSake(){
        console.log(this.name + ' drank Sake');
        this.health += 10;
    }
}

    const ninja1 = new Ninja("Leonardo");
    const ninja2 = new Ninja("Donatello");
    const ninja3 = new Ninja("Raphael");
    const ninja4 = new Ninja("Michaelangelo")

    ninja1.sayName()
    ninja1.showStats()
    ninja1.drinkSake()
    ninja1.showStats();

    ninja2.sayName()
    ninja2.showStats()
    ninja2.drinkSake()
    ninja2.showStats();

    ninja3.sayName()
    ninja3.showStats()
    ninja3.drinkSake()
    ninja3.showStats();

    ninja4.sayName()
    ninja4.showStats()
    ninja4.drinkSake()
    ninja4.showStats();



class Sensei extends Ninja {
    constructor(nameInput, healthInput, speedInput, strenghtInput) {
        super(nameInput, healthInput = 200, speedInput = 10, strenghtInput = 10)
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake()
        console.log('Wisdom can appear in many places, my sons. ' + 'Wisdom: ' + this.wisdom);
        super.showStats()
    }
}

    const sensei1 = new Sensei("Master Splinter");

    sensei1.sayName()
    sensei1.showStats()
    sensei1.drinkSake()
    sensei1.showStats()
    sensei1.speakWisdom()