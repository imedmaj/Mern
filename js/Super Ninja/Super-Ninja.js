class Ninja{
    constructor(name) {
        this.name=name;
        this.health=90;
        this.speed =3;
        this.strength=3;              
    }
    sayName() {
         console.log(this.name);
    }
    showStats() {
        console.log("name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength)
       
         
    }
    drinkSake() {
        this.health += 10;
        
    }


}
// child class option 1
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed =10;
        this.strength=10; 
        this.wisdom=10;  
        

    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
       
        const addvalue= super.drinkSake();
        
    }
    
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();





