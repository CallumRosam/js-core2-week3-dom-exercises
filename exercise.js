/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1
let allPElements = document.querySelectorAll("p");
console.log("Number of paragraphs are: " +  allPElements.length); //prints the number of p elements

//2
let firstDivElement = document.querySelector("div");
console.log(firstDivElement.className); //prints the name of the class

//3
let jumboTronText = document.querySelector("#jumbotron-text");
console.log(jumboTronText);

//4
let pElementWithinPriCon = document.querySelectorAll(".primary-content/p");
let paragraphs = divPrimaryCOntent.querySelectorAll("p");
console.log(paragraphs.length);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");

console.log(alertBtn);

alertBtn.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Something");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
//3
let backgroundColorButton = document.querySelector("#bgrChangeBtn");
backgroundColorButton.addEventListener("click", NewColor);

function NewColor() {
    if (document.body.style.backgroundColor === "white") {
     document.body.style.backgroundColor = "Bisque";
    } else {
        document.body.style.backgroundColor = "white"; 
    }
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextButton = document.querySelector("#addTextBtn");
addTextButton.addEventListener("click", addText);

let paragraph = document.createElement("p");
paragraph.innterText = "Read more below";
let insertLocation = document.querySelector(".jumbotron");
insertLocation.appendChild(paragraph);


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/