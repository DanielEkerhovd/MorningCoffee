

const morningCoffee = {
    type: "beverage",
    color: "black",
    hot: true,
    maxDl: 5,
    dl: [0, 1, 2, 3, 4, 5],
    milk: false,
    brand: [{
        name: "Friele",
        region: "Vestland",
        roastDegree: 3,
        price: 89,
    },
    {
        name: "Evergood",
        region: "Østland",
        roastDegree: 2,
        price: 79,
    },
    {
        name: "Kjellberg",
        region: "Midt-norge",
        roastDegree: 1,
        price: 54,
    }
    ],

    drinkCoffee: function () {
        if (currentCoffee > 0){
            currentCoffee -= 1;
            return currentCoffee; 
        }
    },
    
    fillCup: function () {
        currentCoffee = morningCoffee.maxDl; 
    },
}


var inCup = 0;
var currentCoffee = morningCoffee.maxDl;
var drinkButton = document.querySelector(".drink-button");
var fillButton = document.querySelector(".fill-button");
var addLactose = document.querySelector(".add-milk");
var coffee = document.querySelector(".coffee");

function changeHeight(height) {
    coffee.style.height = height;
}

function addMilk (milk) {
    coffee.style.backgroundColor = milk;
}

function noMilk (noMilk) {
    coffee.style.backgroundColor = noMilk;
}

drinkButton.onclick = function() {
    if (inCup === morningCoffee.dl[5]) {
        morningCoffee.drinkCoffee();
        changeHeight("60%");
    } else if (inCup === morningCoffee.dl[4]) {
        morningCoffee.drinkCoffee();
        changeHeight("45%");
    } else if (inCup === morningCoffee.dl[3]) {
        morningCoffee.drinkCoffee();
        changeHeight("30%");
    } else if (inCup === morningCoffee.dl[2]) {
        morningCoffee.drinkCoffee();
        changeHeight("15%");
    } else if (inCup === morningCoffee.dl[1]) {
        morningCoffee.drinkCoffee();
        changeHeight("0%");
    }
    inCup = morningCoffee.dl[currentCoffee];
    console.log(inCup);
}

fillButton.onclick = function () {
    if (morningCoffee.milk === true && inCup <= 2 ){
        morningCoffee.milk = false;
        noMilk("#824c25"); 
    };
    morningCoffee.fillCup();
    changeHeight("75%");
    inCup = morningCoffee.dl[currentCoffee];
    console.log(inCup);
};

addLactose.onclick = function() {
    if (inCup > 0)
    addMilk("#9d6b47");
    morningCoffee.milk = true;
    console.log(morningCoffee.milk);
}

















