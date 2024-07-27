class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

// childe unit declaration
class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    this.target = target;
    this.target.power = this.target.power - this.power;
    this.target.res = this.target.res - this.res;
    console.log("Unit cart :", this.name," attacket Unit cart :", this.target.name," the rest power is:",this.target.power, "  the rest resilience is:", this.target.res);
  }
}
// child effict declaration
class Effect extends Card {
    constructor(name, cost, text, stat,magnitude) {
      super(name, cost);
      this.text = text;
      this.stat = stat;
      this.magnitude=magnitude;
    }

    play(target) {
        this.target = target;
        if (target instanceof Unit) {
if(this.stat=="resilience")
  {
    this.target.res = this.target.res + this.magnitude;
    console.log("Effect cart :",this.name,"used on Cart ",this.target.name,this.text, " New ",this.target.name," Resilience is:   ", this.target.res);

}
else{
    this.target.power = this.target.power + this.magnitude;
    console.log("Effect cart :",this.name,"used on Cart ",this.target.name, this.text, " New ",this.target.name," Power is:   ", this.target.power);

}
                  
        } 
        else {
            console.log("Target must be a unit!")
         
        }
      }
    }

    console.log("**************************************************************************")
// 1 Make an instance of "Red Belt Ninja"
const Red_Belt_Ninja = new Unit("Red Belt Ninja", 3, 3, 4);

// 	1 Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const Hard_Algorithm = new Effect("Hard Algorithm", 2,"increase targets resilience by 3", "resilience",3);

Hard_Algorithm.play(Red_Belt_Ninja)

console.log("**************************************************************************")

//2  Make an instance "Black Belt Ninja" 

const Black_Belt_Ninja = new Unit("RBlack Belt Ninja", 4, 5, 4);

// 2 Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"

const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection", 2,"reduce target's resilience by 2", "resilience",-2);
Unhandled_Promise_Rejection.play(Black_Belt_Ninja);

console.log("**************************************************************************")

// 3 Make an instance of "Pair Programming" and play it on "Red Belt Ninja"

const Pair_Programming = new Effect("Pair Programming", 3,"increase target's power by 2", "power",2);

Pair_Programming.play(Red_Belt_Ninja)
console.log("**************************************************************************")
// 3  "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
Red_Belt_Ninja.attack(Black_Belt_Ninja);








