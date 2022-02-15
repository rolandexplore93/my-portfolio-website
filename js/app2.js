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

//find the navbar location and get the section items
const navList = document.getElementById("navbar__list") ;
const allSection = Array.from(document.getElementsByTagName("section"));

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
//create the li element and insert it into navList
function createNavItems(){

    for (section of allSection){
    
        const navItem = document.createElement("li"); //create li element
        const navLink = document.createElement("a");  //create anchor link element

        //get section data-nav attribute and id
        const sectionData = section.getAttribute("data-nav");
        const sectionIdTag = section.getAttribute("id");
            
        navLink.classList.add("menu__link");
        navLink.innerHTML = sectionData;
        navLink.setAttribute("href", `#${sectionIdTag}`) //set href attribute on anchor element
        navLink.setAttribute("data-link", `#${sectionIdTag}`) //set data-link attribute on anchor element
    
        navItem.appendChild(navLink);
        navList.appendChild(navItem)

    }

}
createNavItems()

const links = document.querySelectorAll(".menu__link")

for (const link of links){
    const sectionId = link.getAttribute("data-link");

    link.addEventListener("click", function(e){
        e.preventDefault();
        linkToScrollIntoView(sectionId);
        addOrRemoveActiveClass(sectionId);
    })
}

function linkToScrollIntoView(sectionId){
    window.scrollTo({
        top: sectionId === "#" ? 56 : document.querySelector(sectionId).offsetTop,
        behavior: "smooth"
    })
}

// Add class 'active' to section when near top of viewport
function addOrRemoveActiveClass(sectionId){
    for (const link of links){
        if(link.getAttribute("data-link") === sectionId){
            link.classList.add("activenow-class");
        } else {
            if (link.classList.contains("activenow-class")){
                link.classList.remove("activenow-class");           
            }
        }
    }
    
}




// Scroll to anchor ID using scrollTO event
// (MY SCROLL DIDN'T WORK WHEN I SCROLL TO THE PAGE FOR MY ACTIVE 
// STATE TO BE HIGHLIGHTED ON SCROLL.. BELOW IS THE CODE)

// window.addEventListener("scroll", function(){
//     scrollActive();
// })

// function scrollActive() {
//     for (section of allSection){
//         const sectionRect = section.getBoundingClientRect();

//         if (sectionRect.top <= 150 && sectionRect.bottom >= 150){
//             section.classList.add("your-active-class");
//         } else {
//             if (section.classList.contains("your-active-class")){
//                 section.classList.remove("your-active-class")
//             }
//         }
//     }
// }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function responsiveMenu(){
    const getnavbar__list = document.getElementById('cont');
    console.log(getnavbar__list);

    if (getnavbar__list.className === "cont"){
        getnavbar__list.className += " responsive"
    } else {
        getnavbar__list.className = "cont"
    }
}

responsiveMenu()