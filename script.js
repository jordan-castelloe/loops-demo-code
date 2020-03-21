// WHILE LOOP

// var i = 0;

// while(i < 20){
//     console.log(i, "is less than 20")
//     i++
// }

// i++ is the same as i = i + 1

// FOR LOOP
// for(var i = 0; i < 20; i++){
//    // This stuff will run a bunch of times 
//    console.log(i)
// }




// if(counter < 20){
//     console.log("it's less than 20!")
// }

// var birdCounter = 0;

// while(birdCounter < 100){
//     console.log("TWEET TWEET")
//     birdCounter = birdCounter + 1;
// }

// for(var i = 0; i < 100; i++){
//     console.log("TWEET TWEET")
// }

var favoriteFoods = ["tacos", "pepperoni rolls", "sushi", "pizza", "beans and rice", "canned soup", "frozen stuff", "bread", "toilet paper"]

// console.log(`I love ${favoriteFoods[0]}`)
// console.log(`I love ${favoriteFoods[1]}`)
// console.log(`I love ${favoriteFoods[2]}`)
console.log(favoriteFoods.length)
for(var i = 0; i < favoriteFoods.length; i++){
    if(favoriteFoods[i] === "toilet paper"){
        console.log("Toilet paper is not a food ya dummy")
    } else {
        console.log(`I love ${favoriteFoods[i]}`)
    }
}