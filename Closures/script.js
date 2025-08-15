
//=================================================================
                      // (NOTE + CODE ) 

// CLOSURES 11 | Tapas sir (tapascript)
// AT  12:01 , 14:22 , 35:00

// REGULAR Function ----------------------------------------

function outerCount() {
    let count = 0;

    function innerCount() {
        count++;
        console.log(count);
    }
    innerCount();
}

outerCount(); // OUTPUT → 1
outerCount(); // OUTPUT → 1
outerCount(); // OUTPUT → 1 same rahega .....


/*
This happens because each time outerCount() is called, 
a new 'count' variable is created and set to 0. 
The inner function runs once and then is gone, so 
it never remembers the old value.
*/


// CLOSURE Function ----------------------------------------

function outerCount() {
    let count = 0; // behaves like a private variable

    return function innerCount() {
        count++;
        console.log(count);
    };
}

let playfunc = outerCount();
playfunc(); // 1
playfunc(); // 2
playfunc(); // 3
playfunc(); // 4 ---> Yaha badh raha hai ...

/*
Closure: When an outer function has finished executing, 
its inner function still has access to the outer function's 
variables through the scope chain, keeping them alive in memory.
*/


// REAL WORLD ILLUSTRATION: Encapsulation (Bank Account) ----

function BankAC(initialBal) { 
    let bal = initialBal;

    return function deposit(amount) {
        bal += amount;
        console.log("Deposited:", amount, "| Current Balance:", bal);
    };
}

let displaybalance = BankAC(1000);
displaybalance(300); // Deposited: 300 | Current Balance: 1300
displaybalance(500); // Deposited: 500 | Current Balance: 1800

// If we try to directly access `bal`, it won't work: 
// console.log(bal); // Error: bal is not defined...


// OBJECT EXAMPLE -------------------------------------------

// Object literal
let car = {
  brand: "Tesla",
  model: "Model S",
  owner: "Me",
  year: 2024
};

// Access
console.log(car.brand); // Tesla


// MEMORY / GARBAGE COLLECTION DEMO ------------------------

// function DWbigData() {
//     let bigData = new Array(1000000).fill("#"); // FIXED: .fill not *fill

//     return function () {
//         console.log(bigData[99]);
//     };
// }

// const variable12 = DWbigData();
// variable12(); // "#"

// If no closure keeps a reference, bigData is garbage collected.


// USEFULNESS OF CLOSURE ------------------------------------

/*
1. We can create function factories.
2. We can prevent variable pollution in the global scope.
3. We can keep a variable alive across multiple calls.
*/


// EVENT HANDLERS + CLOSURE ---------------------------------

function setButton() {
    let clickcounts = 0;

    let button = document.querySelector("button");
    button.addEventListener("click", function () {
        clickcounts++;
        console.log(`Button clicked ${clickcounts} times`);
    });
}

setButton();

// In this case, the event listener is a closure that 
// keeps `clickcounts` alive, updating it with each click.


//===============================================================



//HUGE THANKS TO TAPAS SIR FOR MAKING SUCH A DETAILED JAVASCRIPT MASTERBLASTER COURSE...


