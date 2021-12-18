// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Comments should be present at the beginning of each procedure and class.
//  * Great to have comments before crucial code sections within the procedure.
// */

// /**
//  * Define Global Variables
//  * 
// */
// const sections = document.querySelectorAll('[data-nav]');
// const navContainer = document.getElementById("navbar__list");   //get the ul navbar container
// let navLink;

// console.log(sections)
// console.log(navContainer)

// /**
//  * End Global Variables
//  * 
//  * Start Helper Functions
//  * 
// */



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  * 
// */

// // build the nav
// //create an array of objects to store the nav items data
// const navLinks = [
//     {
//         id: "#",
//         text: "Home",
//         classes: ["menu__link", "home", "active-class"]
//     },
//     {
//         id: "#about",
//         text: "About",
//         classes: ["menu__link", "section1", "active-class"]
//     },
//     {
//         id: "#services",
//         text: "Services",
//         classes: ["menu__link", "section2", "active-class"]
//     },
//     {
//         id: "#contact",
//         text: "Contact",
//         classes: ["menu__link", "section3", "active-class"]
//     },
//     {
//         id: "#login",
//         text: "Login",
//         classes: ["menu__link", "section4", "active-class"]
//     },
//     // {
//     //     id: "",
//     //     text: "X",
//     //     classes: ["navbar-toggler"]
//     // },
// ]

// // console.log(navLinks)

// function createNavItems(){

//     //use for-of-loop to iterate over the array of objects to create navbar items
//     for (const link of navLinks){
//         const navItem = document.createElement("li"); //create li element
//         const navLink = document.createElement("a");  //create anchor link element
//         navLink.href = link.id;
//         navLink.setAttribute("id", link.id);
//         navLink.textContent = link.text;
//         navLink.classList.add(...link.classes);

//         navItem.appendChild(navLink); //create li items

//         //append li elements to the nav container and display on the UI
//         navContainer.appendChild(navItem);
//     }

//     console.log(navContainer);
//     return navContainer;

// }
// createNavItems()

// // const navbarToggler = document.querySelector(".navbar-toggler");
// // navbarToggler.addEventListener("click", navbarTogglerClick);

// // function navbarTogglerClick() {
// //     navbarToggler.classList.toggle("open-navbar-toggle");
// //     navContainer.classList.toggle("open")
// // }

// // console.log(navItem)
// const navbarLink = document.querySelectorAll(".menu__link");
// console.log(navbarLink);


// navbarLink.forEach(element => element.addEventListener("click", navbarLinkClick));

// function navbarLinkClick(evt){

//     smoothScroll(evt);

//     if(navContainer.classList.contains("open")){//close navContainer
//         navbarToggler.click();
//     }
// }

// // smooth-scrolling
// function smoothScroll(evt){
//     evt.preventDefault();
//     //obtain the value of the href attribute and save it in a variable
//     const targetId = evt.currentTarget.getAttribute("href")
//     console.log(targetId)
//     window.scrollTo({
//         top: targetId === "#" ? 171 : document.querySelector(targetId).offsetTop,
//         behavior: "smooth"        
//     });
// }


// // Add class 'active' to section when near top of viewport
// const allNav = document.getElementsByClassName("your-active-class");
// console.log(allNav)

// // Scroll to anchor ID using scrollTO event

// // document.addEventListener('scroll', function isSectionInViewport() {

// // 	sections.forEach( (section) => {


// // 		if(window.scrollY >= section.offsetHeight) {


// // 			section.classList.add("your-active-class");
// //             console.log("correct")


// // 		} else {


// // 			section.classList.remove("your-active-class");
// //             console.log("try again")


// // 		}

// // 	});

// // });

// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// // Scroll to section on link click

// // Set sections as active


