// Example of what is clean code with same functionality

const x = function(z) {
    const w = "Hello";
    return w + z
}

x("John");

// or

const generateUsergreetings = function(name){
    const greeting = "Hello";
    return greeting + name;
};

generateUsergreetings("John");


// Which one is better and more readable?!



// Tips to implement:

// - single characters can be used as variable names in the context of a loop or a callback function,
// but its a good practice to avoid them anywhere else


// - usage of camelCase is very common in JS (but it may sometimes vary from company to company)

// - a good name for functions and variables are descriptive, meaning that they self-describe what 
// they (e.g generateUserGreetings(), createRandomNumber(), etc).

// - consistency allows for predictability, e.g example below: 

function getPlayerScore(){};
function getPlayerName(){};
function getPlayerTag(){};

// or 

function getUserScore(){};
function fetchPlayerName(){};
function retrievePlayer1Tag(){};


// in first example function's behavior is easier to predict as its name creates sort of 
// pattern/grouping (in example 1 its clearly seen that funstions collect data about player).


// - variables represent "things", so their name should be/begin a noun or adjective, meanwhile
// functions represent action, so they should be named with a verb

const defaultColor = "Red";
let numberOfArrays = 10;

function createFolder() {};
function findSuitableName(){};


// - use searchable and immediately understanble names:

setTimeout(stopTimer, 3600000); // whats that magical 3600000?! 

//or 

const ONE_HOUR = 3600000; // "all CAPS" used in cases where variable is "truly" constant and won't 
// ever change, as per case above value of is universal and cant change - its truly constant
setTimeout(stopTimer, ONE_HOUR);

// variable declared with descriptive name and there is no need to guess or calculate "magical" number



