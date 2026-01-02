//Great code comes from experience. Experience comes from not-so-great code.




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


// - use searchable and immediately understandable names:

setTimeout(stopTimer, 3600000); // whats that magical 3600000?! 

//or 

const ONE_HOUR = 3600000; // "all CAPS" used in cases where variable is "truly" constant and won't 
// ever change, as per case above value of is universal and cant change - its truly constant
setTimeout(stopTimer, ONE_HOUR);

// variable declared with descriptive name and there is no need to guess or calculate "magical" number

// semicolons are automatically added by interpreter, if they are omitte. Better to add, even if its not required



// dont use comments as a tracker for updates - use git. Old piece of code should be deleted and not commented out 
// because it creates a bloat which doesnt belong there.



// Assignments part




// 11 principles to keep code clean:


// 1. Revise logic before coding -  flow diagrams and written pseudocode is great way to avoid mess.
// 2. Clearly expose the structure of the page. Using IDs for main containers can be helpful.
// 3. Use the correct indentations with consistency over the page and code. 
// 4. Write explanatory comments - its good.
// 5. Avoid abusing comments. examples of good comments: 

// - Authoring specifications (e.g. /* Coded by John, November 13th 2010 */).
// - Detailed statements on the functionality of a method or procedure (e.g. /* This function validates 
// the login form with the aid of the e-mail check function */).
// - Quick notifications or labels that state where a recent change was made (e.g. /* Added e-mail 
// validation procedure */).

// 6. Avoid extremely large functions. Advice here is to break up large functions into smaller one. 
// 7. Use naming standards for naming for functions and variables. 
// 8. Treat changes with caution. 
// 9. Avoid indiscriminate Mixing of coding languages. Avoid mixing "in-styles" and try to separate 
// and segregate HTML/CSS/JS.
// 10. Summarize your imports. Dont overuse importing/creating many style sheets or js script files.
// It may be better to combine 4-5 files into 1-2 files and import together.  
// 11. Dont forget about efficiency. 




// Coding horror


// 1. Code can only tell you how the program works; comments can tell you why it works. 

// 2. the best kind of comments are the ones you don’t need. Allow me to. you should first strive to 
// make your code as simple as possible to understand without relying on comments as a crutch. 
// at the point where the code cannot be made easier to understand should you begin to add comments.

// 3. You should always write your code as if comments didn’t exist - that way youcode will be written
// in the simplest, plainest and most self-documenting way.


// 4. if your feel your code is too complex to understand without comments, your code is probably 
// just bad. Rewrite it until it doesn’t need comments any more.




// Martin Fowler


// Treat code as its a documentation. So it should be self-describing and well self-explainatory.

// You can program in your own style on your personal projects, but anything you do in a team 
// should follow the needs of that team.