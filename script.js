// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let myAP = 100;
let fungusHP = 100;


function onReady(event) {
    console.log("Ready to go!")
//6.
const arcane_scepter = document.getElementByClassName('attack-btn arcane-scepter');
const entangle = document.getElementByClassName('attack-btn entangle');
const dragon_blade= document.getElementByClassName('attack-btn dragon-blade');
const star_fire = document.getElementByClassName('attack-btn star-fire');

    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()
//2.creating a function that will update the variables myAp & myHP
//3.creating paramters cost & damage
function attack(cost,damage){
myAP-=cost
fungusHP-=damage
if (myAP<=0) {
    myAP=0
    console.log("You Die!! :( Your points now are:  ", `${myAP}`)
} //5.Making sure it never goes into negative AP or HP
if (fungusHP<=0) {
    fungusHP=0
    console.log("You Die!! :( Your point now are: ",  `${fungusHP}`)
}
console.log(myAP);
console.log(fungusHP);
}
