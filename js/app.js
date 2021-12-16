/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navContainer = document.getElementById("navbar__list");   //get the ul navbar container


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//create an array of objects to store the nav items data
const navLinks = [
    {
        id: "#",
        text: "Home",
        classes: ["menu__link", "home", "active-class"]
    },
    {
        id: "#about",
        text: "About",
        classes: ["menu__link", "about", "active-class"]
    },
    {
        id: "#services",
        text: "Services",
        classes: ["menu__link", "services", "active-class"]
    },
    {
        id: "#contact",
        text: "Contact",
        classes: ["menu__link", "contact", "active-class"]
    },
    {
        id: "#login",
        text: "Login",
        classes: ["menu__link", "login", "active-class"]
    },
    {
        id: "",
        text: "X",
        classes: ["navbar-toggler"]
    },
]

// console.log(navLinks)

function createNavItems(){

    //use for-of-loop to iterate over the array of objects to create navbar items
    for (const link of navLinks){
        const navItem = document.createElement("li"); //create li element
        const navLink = document.createElement("a");  //create anchor link element
        navLink.href = link.id;
        navLink.textContent = link.text;
        navLink.classList.add(...link.classes);

        navItem.appendChild(navLink); //create li items

        //append li elements to the nav container and display on the UI
        navContainer.appendChild(navItem);
    }

    console.log(navContainer);
    return navContainer;

}

createNavItems()

const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    navbarToggler.classList.toggle("open-navbar-toggle");
    navContainer.classList.toggle("open")
}

// console.log(navItem)
const navbarLink = document.querySelectorAll(".menu__link");
console.log(navbarLink)

navbarLink.forEach(element => element.addEventListener("click", navbarLinkClick));

function navbarLinkClick(evt){

    smoothScroll(evt);

    if(navContainer.classList.contains("open")){//close navContainer
        navbarToggler.click();
    }
}

// smooth-scrolling
function smoothScroll(evt){
    evt.preventDefault();
    //obtain the value of the href attribute and save it in a variable
    const targetId = evt.currentTarget.getAttribute("href")
    // console.log(targetId)
    window.scrollTo({
        top: targetId === "#" ? 171 : document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}





















// document.addEventListener("click", function(animal){
//     let animalType = animal.getAttribute("data-animal-type");
//     // alert(`The ${animal.innerHTML} is a ${animalType}.`);
//     alert("The " + animal.innerHTML + " is a " + animalType + ".")
//     // alert("It worked")
// })

// let animals = document.getElementById("#animal")
// console.log(animals)

// animals.addEventListener("click", function(){

//     // for(i = 1; i <= 3; i++){
//     //     var animalType = i.getAttribute("data-animal-type");
//     //     console.log("The " + i.textContent + " is a " + animalType + ".");
//     // }

//     // alert("The " + animals.innerHTML + " is a " + animalType + ".");

// })
 

// function showDetails(animal) {
//     var animalType = animal.getAttribute("data-animal-type");
//     alert("The " + animal.innerHTML + " is a " + animalType + ".");
//   }

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


