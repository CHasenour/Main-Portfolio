let mainPage=document.getElementById("Hangman");
let mePage=document.getElementById("aboutMe");
let contactPage=document.getElementById("contactPage");
let projectPage=document.getElementById("projectPage")
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="none";
let background=document.getElementById("mainBackground");
background.style.backgroundImage="url('banff.jpg')";
background.style.backgroundSize="cover"




let homeButton=document.getElementById("home");
homeButton.addEventListener("click", function(){
mainPage.style.display="inline";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="none";
background.style.backgroundImage="url('banff.jpg')";
})

homeButton.addEventListener("mouseover", function(){
    homeButton.style.backgroundColor="blue";
    homeButton.style.width="28%";
    homeButton.style.fontStyle="oblique";
    homeButton.style.color="white";
})

homeButton.addEventListener("mouseleave", function(){
    homeButton.style.backgroundColor="lightgrey";
    homeButton.style.width="24%"
    homeButton.style.fontStyle="normal";
    homeButton.style.color="black"; 
})

let meButton=document.getElementById("me");
meButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="inline";
contactPage.style.display="none";
projectPage.style.display="none";
background.style.backgroundImage="url('banff.jpg')";
})

meButton.addEventListener("mouseover", function(){
    meButton.style.backgroundColor="forestgreen";
    meButton.style.width="28%"
    meButton.style.fontStyle="oblique"
    meButton.style.color="white";
})

meButton.addEventListener("mouseleave", function(){
    meButton.style.backgroundColor="lightgrey";
    meButton.style.width="24%";
    meButton.style.fontStyle="normal";
    meButton.style.color="black";
})

let contactButton=document.getElementById("contact");
contactButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="none";
contactPage.style.display="inline";
projectPage.style.display="none";
background.style.backgroundImage="url('banff.jpg')";
})

contactButton.addEventListener("mouseover", function(){
    contactButton.style.backgroundColor="#8b0000";
    contactButton.style.width="28%"
    contactButton.style.fontStyle="oblique"
    contactButton.style.color="white";
})

contactButton.addEventListener("mouseleave", function(){
    contactButton.style.backgroundColor="lightgrey";
    contactButton.style.width="24%";
    contactButton.style.fontStyle="normal";
    contactButton.style.color="black";
})

let projectButton=document.getElementById("skills");
projectButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="inline";
background.style.backgroundImage="url('metal.jpg')";
})

projectButton.addEventListener("mouseover", function(){
    projectButton.style.backgroundColor="orange";
    projectButton.style.width="28%"
    projectButton.style.fontStyle="oblique"
    projectButton.style.color="white";
})

projectButton.addEventListener("mouseleave", function(){
    projectButton.style.backgroundColor="lightgrey";
    projectButton.style.width="24%";
    projectButton.style.fontStyle="normal";
    projectButton.style.color="black";
})

let textMe=document.getElementById("textMe");
textMe.addEventListener("mouseover", function(){
    meButton.style.backgroundColor="forestgreen";
    meButton.style.width="28%"
    meButton.style.fontStyle="oblique"
    meButton.style.color="white";
    background.style.backgroundImage="url('banff.jpg')";
})

textMe.addEventListener("mouseleave", function(){
    meButton.style.backgroundColor="lightgrey";
    meButton.style.width="24%";
    meButton.style.fontStyle="normal";
    meButton.style.color="black";
})

let textProject=document.getElementById("textProject")
textProject.addEventListener("mouseover", function(){
    projectButton.style.backgroundColor="orange";
    projectButton.style.width="28%"
    projectButton.style.fontStyle="oblique"
    projectButton.style.color="white";
})

textProject.addEventListener("mouseleave", function(){
    projectButton.style.backgroundColor="lightgrey";
    projectButton.style.width="24%";
    projectButton.style.fontStyle="normal";
    projectButton.style.color="black";
})

let textContact=document.getElementById("textContact");
textContact.addEventListener("mouseover", function(){
    contactButton.style.backgroundColor="#8b0000";
    contactButton.style.width="28%"
    contactButton.style.fontStyle="oblique"
    contactButton.style.color="white";
})

textContact.addEventListener("mouseleave", function(){
    contactButton.style.backgroundColor="lightgrey";
    contactButton.style.width="24%";
    contactButton.style.fontStyle="normal";
    contactButton.style.color="black";
})

