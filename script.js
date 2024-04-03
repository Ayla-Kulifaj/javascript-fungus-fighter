// State Variables can be declared outside of the onReady

let myAP = 100;
let fungusHP = 100;

//went about this thought process like oop in python and creating a function for all the elements
function onReady(event) {
    console.log("Ready to go!")
//6. grab the elements from html and put them in variables
const arcaneScepter = document.querySelector('.attack-btn.arcane-scepter');
const entangle = document.querySelector('.attack-btn.entangle');
const dragonBlade = document.querySelector('.attack-btn.dragon-blade');
const starFire = document.querySelector('.attack-btn.star-fire');

//7.your four buttons... cute :) maybe we should "listen to them ?" 
//8.When the button is clicked it will call on the function attack
arcaneScepter.addEventListener('click', () => attack(12, 14));
entangle.addEventListener('click', () => attack(23, 9));
dragonBlade.addEventListener('click', () => attack(38, 47));
starFire.addEventListener('click', () => attack(33, 25));


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
    console.log("You Died!! :( Your points now are:  ", `${myAP}`)

} //5.Making sure it never goes into negative AP or HP

if (fungusHP<=0) {
    fungusHP=0
    console.log("You Dies!! :( Your point now are: ",  `${fungusHP}`)
}
console.log(myAP);
console.log(fungusHP);
enemyHP()
theAP()
}

// 11. making functions to change the bars and values of HP & AP
function enemyHP(){
    const pointsHP = document.getElementById('hp-meter');
    pointsHP.value = fungusHP;
    const pointsHPText = document.querySelector('.hp-text');
    pointsHPText.textContent = `${fungusHP} HP`;
}
function theAP() {
    const pointsAP = document.getElementById('ap-meter');
    pointsAP.value = myAP;
    const pointsAPText = document.querySelector('.ap-text');
    pointsAPText.textContent = `${myAP} AP`;
}

