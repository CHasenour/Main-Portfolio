let mainPage=document.getElementById("Hangman");
let mePage=document.getElementById("aboutMe");
let contactPage=document.getElementById("contactPage");
let projectPage=document.getElementById("projectPage");
let codePage=document.getElementById("futurePage");
codePage.style.display="none";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="none";
let background=document.getElementById("mainBackground");
background.style.backgroundImage="url('mountainSide.jpg')";
background.style.backgroundRepeat = "no-repeat";
background.style.backgroundPosition = "center top";
background.style.backgroundAttachment = "scroll";
background.style.backgroundSize = "cover";
background.style.backgroundAttachment= "scroll";
let adventureTimeProject=document.getElementById("adventureTimeProject");
const typingElement = document.getElementById("typedText1");
typingElement.style.visibility="hidden";
let HM=document.getElementById("HM");
const typedText=document.getElementById("typedText2");
typedText.style.visibility="hidden";
let project3=document.getElementById("project3");
const typedText3=document.getElementById("typedText3");
typedText3.style.visibility="hidden"
let carouselTitle=document.getElementById("carouselTitle");


adventureTimeProject.addEventListener("mouseover", function(){
    typingElement.style.visibility="visible";
    const text = " The first project Catapult had me work on was one of my favorites. Tasked with creating a short story with multiple options and outcomes, I put a twist on the prompt and created a quiz to help anyone who wants to play my favorite videogame choose which weapon they would use. This task used very little CSS, with the vast majority of the formatting taking place in JavaScript. For a quick explanation, all the content of the quiz is on the same page, with the use of divisions separating each question and the use of style.display commands to move through the quiz. This activity taught me a lot about JavaScript, specifically how to use addEventListener, display.style commands, inserting/customizing a video through JavaScript, and inserting/customizing an image through JavaScript";
            let index = 0;
            function type() {
               if (index < text.length) {
                    typingElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, 1); 
                }
            }
            type()},{once: true});

            project3.addEventListener("mouseover", function(){
                typedText3.style.visibility="visible";
                const text = "My first project at Catapult, this taught me a lot of the basics and allowed me to explore formating. Nothing fancy, but a good example of how far I've improved upon.";
                        let index = 0;
                        function type() {
                           if (index < text.length) {
                                typedText3.textContent += text.charAt(index);
                                index++;
                                setTimeout(type, 1); 
                            }
                        }
                        type()},{once: true});

HM.addEventListener("mouseover", function(){
    typedText.style.visibility="visible";
    const text = "One of my favorite games is Hangman, and I decided I wanted to chanllenge myself and create the game. This required an extensive library of words, checking if a letter was in a word, and keeping track of mistakes. To ensure it wasn't too simplistic, I also kept track of guesses and gave the number of letters in the word.";
    let index = 0;
    function type() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 1); 
            }
        }
    type()},{once: true});


let homeButton=document.getElementById("home");
homeButton.addEventListener("click", function(){
mainPage.style.display="inline";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="none";
background.style.backgroundImage="url('mountainSide.jpg')";
background.style.backgroundAttachment= "scroll";
})

homeButton.addEventListener("mouseover", function(){
    homeButton.style.backgroundColor="blue";
    homeButton.style.fontStyle="oblique";
    homeButton.style.color="white";
})

homeButton.addEventListener("mouseleave", function(){
    homeButton.style.backgroundColor="lightgrey";
    homeButton.style.fontStyle="normal";
    homeButton.style.color="black"; 
})

let meButton=document.getElementById("me");
meButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="inline";
contactPage.style.display="none";
projectPage.style.display="none";
background.style.backgroundImage="url('cliffside.jpg')";
background.style.backgroundAttachment="fixed";
})

meButton.addEventListener("mouseover", function(){
    meButton.style.backgroundColor="forestgreen";
    meButton.style.fontStyle="oblique"
    meButton.style.color="white";
})

meButton.addEventListener("mouseleave", function(){
    meButton.style.backgroundColor="lightgrey";
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
background.style.backgroundAttachment="fixed"
})

contactButton.addEventListener("mouseover", function(){
    contactButton.style.backgroundColor="#8b0000";
    contactButton.style.fontStyle="oblique"
    contactButton.style.color="white";
})

contactButton.addEventListener("mouseleave", function(){
    contactButton.style.backgroundColor="lightgrey";
    contactButton.style.fontStyle="normal";
    contactButton.style.color="black";
})

let projectButton=document.getElementById("skills");
projectButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="inline";
background.style.backgroundImage="url('stone.jpg')";
background.style.backgroundAttachment= "fixed";
})

projectButton.addEventListener("mouseover", function(){
    projectButton.style.backgroundColor="orange";
    projectButton.style.fontStyle="oblique"
    projectButton.style.color="white";
})

projectButton.addEventListener("mouseleave", function(){
    projectButton.style.backgroundColor="lightgrey";
    projectButton.style.fontStyle="normal";
    projectButton.style.color="black";
})

let textMe=document.getElementById("textMe");
textMe.addEventListener("mouseover", function(){
    meButton.style.backgroundColor="forestgreen";
    meButton.style.fontStyle="oblique"
    meButton.style.color="white";
})

textMe.addEventListener("mouseleave", function(){
    meButton.style.backgroundColor="lightgrey";
    meButton.style.fontStyle="normal";
    meButton.style.color="black";
})

let textProject=document.getElementById("textProject")
textProject.addEventListener("mouseover", function(){
    projectButton.style.backgroundColor="orange";
    projectButton.style.fontStyle="oblique"
    projectButton.style.color="white";
})

textProject.addEventListener("mouseleave", function(){
    projectButton.style.backgroundColor="lightgrey";
    projectButton.style.fontStyle="normal";
    projectButton.style.color="black";
})

let textContact=document.getElementById("textContact");
textContact.addEventListener("mouseover", function(){
    contactButton.style.backgroundColor="#8b0000";
    contactButton.style.fontStyle="oblique"
    contactButton.style.color="white";
})

textContact.addEventListener("mouseleave", function(){
    contactButton.style.backgroundColor="lightgrey";
    contactButton.style.fontStyle="normal";
    contactButton.style.color="black";
})

let futureButton=document.getElementById("future");
futureButton.addEventListener("click", function(){
mainPage.style.display="none";
mePage.style.display="none";
contactPage.style.display="none";
projectPage.style.display="none";
futurePage.style.display="inline"
background.style.backgroundImage="url('future.jpg')";
})

futureButton.addEventListener("mouseover", function(){
    futureButton.style.backgroundColor="gold";
    futureButton.style.fontStyle="oblique";
    futureButton.style.color="white";
})

futureButton.addEventListener("mouseleave", function(){
    futureButton.style.backgroundColor="lightgrey";
    futureButton.style.fontStyle="normal";
    futureButton.style.color="black"; 
})

let backButton=document.getElementById("backButton");
backButton.addEventListener("mouseover", function(){
    backButton.style.backgroundColor="royalblue";
    backButton.style.borderColor="black"
})

backButton.addEventListener("mouseleave", function(){
    backButton.style.backgroundColor="white";
    backButton.style.borderColor="blue";
})

let forwardButton=document.getElementById("forwardButton");
forwardButton.addEventListener("mouseover", function(){
    forwardButton.style.backgroundColor="royalblue";
    forwardButton.style.borderColor="black"
})

forwardButton.addEventListener("mouseleave", function(){
    forwardButton.style.backgroundColor="white";
    forwardButton.style.borderColor="blue";
})

let carousel1=document.getElementById("carousel1");
let carousel2=document.getElementById("carousel2");
carousel2.style.display="none";
let carousel3=document.getElementById("carousel3");
carousel3.style.display="none";
let carousel4=document.getElementById("carousel4");
carousel4.style.display="none";
let x=0;

let carousel=[carousel1, carousel2, carousel3, carousel4]
let cT1=document.getElementById("carouselTitle1");
let cT2=document.getElementById("carouselTitle2");
cT2.style.display="none"
let cT3=document.getElementById("carouselTitle3");
cT3.style.display="none"
let cT4=document.getElementById("carouselTitle4")
cT4.style.display="none"
let carouselTitles=[cT1, cT2, cT3 ,cT4 ]
forwardButton.addEventListener("click", function(){
carousel[x].style.display="none"
carouselTitles[x].style.display="none"
if(x+1<carousel.length){
    carousel[x+1].style.display="inline";
    carouselTitles[x+1].style.display="inline";
    x++;
}
else{
    carousel[0].style.display="inline"
    carouselTitles[0].style.display="inline"
    x=0;
}
});


backButton.addEventListener("click", function(){
    carousel[x].style.display="none"
    carouselTitles[x].style.display="none"
    if(x-1>-1){
        carousel[x-1].style.display="inline";
        carouselTitles[x-1].style.display="inline";
        x--;
    }
    else{
        carousel[carousel.length-1].style.display="inline"
        carouselTitles[carousel.length-1].style.display="inline"
        x=carousel.length-1;
    }
    });
    


let send=document.getElementById("contactButton")
send.addEventListener("mouseover", function(){
    send.style.backgroundColor="lightcyan";
})

send.addEventListener("mouseleave", function(){
    send.style.backgroundColor="white";
})