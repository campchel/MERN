class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,resil){
        super(name,cost);
        this.power = power;
        this.resil = resil;
    }
    attack(target){
        if(target instanceof Unit){
            target.resil -= this.power
            if(target.resil <=0){
                target.defeat();
            }else{
                target.showStats()
            }
        }
    }
    showStats(){
        console.log(`Name: ${this.name}\nPower: ${this.power}\nResilience: ${this.resil}\n`);
    }
    defeat(){
        console.log(`${this.name} has been defeated!`)
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        if(stat.toLowerCase() == 'power' || stat.toLowerCase() == 'resilience'){
            this.stat = stat.toLowerCase();
        }
        this.magnitude = magnitude;
        this.text = text;
    }
    play(target){
        if(target instanceof Unit){
            this.stat == 'power'? target.power += this.magnitude : target.resil += this.magnitude;
            target.showStats();
        }
        else{
            throw new Error("Target much be a unit!")
        }
    }
}

const unitRBN = new Unit("Red Belt Ninja",3,3,4);
const unitBBN = new Unit("Black Belt Ninja",4,5,4);


const effectHA = new Effect("Hard Algorithm",2,"Increase target's resilience by 3","res",3);
const effectUPR = new Effect("Unhandled Promise Rejection",1,"Reduce target's resilience by 2","res",-2);
const effectPP = new Effect("Pair Programming",3,"Increases the target's power by 2",'power',2);



effectHA.play(unitRBN);
effectUPR.play(unitRBN);
effectPP.play(unitRBN);
unitRBN.attack(unitBBN);