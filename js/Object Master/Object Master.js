const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

//     const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

//     console.log(bListPkmn)
//     const pkmnIds = pokémon.map( p => p.id )

// console.log(pkmnIds)

//  an array of pokémon objects where the id is evenly divisible by 3

console.log("**********************************************************")

console.log("fun1: an array of pokémon objects where the id is evenly divisible by 3")
const fun1 = pokémon.filter(val => val.id % 3 === 0);
console.log(fun1)
console.log("**********************************************************")
// an array of pokémon objects that are "fire" type
console.log("fun2 : an array of pokémon objects that are fire type")
const fun2 = pokémon.filter(val2 => val2.types[0]=="fire");
console.log(fun2);
console.log("**********************************************************")
// an array of pokémon objects that have more than one type
console.log("fun3 :an array of pokémon objects that have more than one type")
const fun3 = pokémon.filter(val3 => val3.types.length!==1);
console.log(fun3);
console.log("**********************************************************")
// an array with just the names of the pokémon
console.log("fun4: an array with just the names of the pokémon")
const fun4 = pokémon.map(val4 => val4.name);
console.log(fun4);
// an array with just the names of pokémon with an id greater than 99
console.log("fun5 :an array with just the names of pokémon with an id greater than 99")
const fun5 = pokémon.filter(val5 => val5.id>99);
console.log(fun5);
console.log("**********************************************************")
//an array with just the names of the pokémon whose only type is poison
console.log("fun6:an array with just the names of the pokémon whose only type is poison")
console.log("option 1 all conatin poison")
const fun6 = pokémon.filter(val6 => val6.types[0]=="poison").map(val6 => val6.name)
console.log(fun6);

console.log("**********************************************************")
console.log("option 2 just the first one ")
const fun7 = pokémon.filter(val6 => val6.types=="poison").map(val6 => val6.name)
console.log(fun7);

console.log("**********************************************************")
//an array containing just the first type of all the pokémon whose second type is "flying"
const fun8 = pokémon.filter(val => val.types[1]=="flying").map(val => val.types[0]);
console.log(fun8)
console.log("**********************************************************")
//a count of the number of pokémon that are "normal" type
console.log("fun9 :a count of the number of pokémon that are normal type")
const fun9 = pokémon.filter(val => val.types=="normal").length
console.log(fun9)

console.log("**********************************************************")

