let heading=document.getElementById("top");
heading.innerHTML=("What Kind of Hunter Will You Become?");




let question=document.getElementById("mainQ");
// place to make and hide all buttons
let firstQuestion=document.getElementById("firstQuestion");
firstQuestion.style.display="none";
let question2=document.getElementById("question2");
question2.style.display="none";
let bluntMeleeQ=document.getElementById("bluntMeleeQ");
bluntMeleeQ.style.display="none";
let bluntRangedQ=document.getElementById("bluntRangedQ");
bluntRangedQ.style.display="none";
let finalAnswer=document.getElementById("result");
finalAnswer.style.display="none";
let firstPage=document.getElementById("start");
let MHWIcon=document.createElement("img");
MHWIcon.src="https://logo-marque.com/wp-content/uploads/2021/03/Monster-Hunter-Symbole.jpg";
firstPage.appendChild(MHWIcon);
MHWIcon.style.width=1300;
let sharpMeleeQ=document.getElementById("sharpMeleeQ");
sharpMeleeQ.style.display="none";
let GSvsL=document.getElementById("GSvsL");
GSvsL.style.display="none";
let mechanics=document.getElementById("mechanics")
mechanics.style.display="none";

let question1=document.getElementById("question1");

let beginning=document.getElementById("first");
beginning.addEventListener("click", function(){
firstPage.style.display="none";


question.innerHTML=("Would You Rather Be Able To Cut The Monster's Tail Off Or Get A Knockout?");

firstQuestion.style.display="inline";
let iq1o1= document.createElement("img");
iq1o1.src="https://th.bing.com/th/id/OIP.tKRvakEyEj7RrkDCJnhYvQHaEo?w=268&h=180&c=7&r=0&o=5&pid=1.7";
iq1o1.style.width=650;
let q1o1=document.getElementById("firstQuestion1");
q1o1.appendChild(iq1o1);



let blunt=document.getElementById("firstAnswer1");
blunt.addEventListener("click", function(){
    question1.style.display="none";
    question.innerHTML=("Would You Rather Be Up Close And Personal Or Strike From Distance?")
    question2.style.display="inline"; 
    let q2o1=document.getElementById("secondQuestion1");
    let iq2o1=document.createElement("video");
    iq2o1.src="0603.mp4";
    iq2o1.addEventListener("ended", function() {
        iq2o1.currentTime = 0; 
        iq2o1.play();           
    });
    iq2o1.style.width=500;
    iq2o1.autoplay=true;
    iq2o1.controls=true;
    q2o1.appendChild(iq2o1);
    let q2o2=document.getElementById("secondQuestion2");
    let iq2o2=document.createElement("img");
    iq2o2.src="wyvernheart.PNG";
    q2o2.appendChild(iq2o2);

    let bluntMelee=document.getElementById("secondAnswer1");
    bluntMelee.addEventListener("click", function(){
        question2.style.display="none";
        question.innerHTML=("Do You Prefer Playing Support And Acting Reserved Or Being A Big Hitter Who Pushes When An Opening Appears?");
        bluntMeleeQ.style.display="inline";
        let iHH=document.createElement("img");
        let HH=document.getElementById("bluntMeleeQ1");
        iHH.src="https://th.bing.com/th/id/OIP.zSc4Y_RILjv4BtLG9ExbfgHaEK?w=304&h=180&c=7&r=0&o=5&pid=1.7";
        iHH.style.width=500;
        HH.appendChild(iHH);
        let iHammer=document.createElement("video");
        let hammer=document.getElementById("bluntMeleeQ2");
        iHammer.src="57442bf5-2d81-4947-b8b1-f00d1ad27d80.mp4";
        iHammer.style.width=500;
        iHammer.autoplay=true;
        iHammer.controls=true;
        hammer.appendChild(iHammer);
        iHammer.addEventListener("ended", function() {
        iHammer.currentTime = 0; 
        iHammer.play();
        });

        let H=document.getElementById("bluntMeleeA2")
        H.addEventListener("click", function(){
            question.style.display="none";
            bluntMeleeQ.style.display="none";
            finalAnswer.style.display="inline";
            heading.innerHTML=("I Bet You Would Like...");
            let fWeapon=document.createElement("img");
            let weapon=document.getElementById("result");
            fWeapon.src="https://www.gamersdecide.com/sites/default/files/authors/u158654/article_mhw-ib_hammer.jpg"
            weapon.appendChild(fWeapon);
            fWeapon.style.width=1300;
        })
            let HuntingH=document.getElementById("bluntMeleeA1")
        HuntingH.addEventListener("click", function(){
            question.style.display="none";
            bluntMeleeQ.style.display="none";
            finalAnswer.style.display="inline";
            heading.innerHTML=("I Bet You Would Like...");
            let fWeapon=document.createElement("img");
            let weapon=document.getElementById("result");
            fWeapon.src="https://www.gamersdecide.com/sites/default/files/authors/u158654/article_mhw-ib_hunting_horn.jpg"
            weapon.appendChild(fWeapon);
            fWeapon.style.width=1300; 
        })

        })
    
     
    let bluntRanged=document.getElementById("secondAnswer2");
    bluntRanged.addEventListener("click", function(){
        question2.style.display="none";
        question.innerHTML=("Would You Rather Tank The Hits And Return Some Damage Or Elude The Monster With Easy Movement?");
        bluntRangedQ.style.display="inline";
        let iHB=document.createElement("img");
        let HB=document.getElementById("bluntRangedQ2");
        iHB.src="https://th.bing.com/th/id/OIP.6vWngwtX__VbnOVVT_P22AHaDW?rs=1&pid=ImgDetMain";
        iHB.style.width=500;
        HB.appendChild(iHB);
        let iLB=document.createElement("img");
        let LB=document.getElementById("bluntRangedQ1");
        iLB.src="LB.PNG"
        iLB.style.width=500;
        LB.appendChild(iLB);
        
        let HeavyB=document.getElementById("bluntRangedA2")
        HeavyB.addEventListener("click", function(){
            question.style.display="none";
            bluntRangedQ.style.display="none";
            finalAnswer.style.display="inline";
            heading.innerHTML=("I Bet You Would Like...");
            let fWeapon=document.createElement("img");
            let weapon=document.getElementById("result");
            fWeapon.src="https://www.gamersdecide.com/sites/default/files/heavy_bowgun.jpg";
            weapon.appendChild(fWeapon);
            fWeapon.style.width=1300;

            
    })
    let LightB=document.getElementById("bluntRangedA1")
            LightB.addEventListener("click", function(){
                question.style.display="none";
                bluntRangedQ.style.display="none";
                finalAnswer.style.display="inline";
                heading.innerHTML=("I Bet You Would Like...");
                let fWeapon=document.createElement("img");
                let weapon=document.getElementById("result");
                fWeapon.src="https://th.bing.com/th/id/OIP.X_peolMWMOLBmFPZNodO4gHaEK?rs=1&pid=ImgDetMain";
                weapon.appendChild(fWeapon);
                fWeapon.style.width=1000;
        })
    })
    })
    
    

let iq1o2= document.createElement("img");
iq1o2.src="https://th.bing.com/th/id/OIP.EwY2Or0bAVz95Ogqe9eoSQHaCV?w=340&h=110&c=7&r=0&o=5&pid=1.7";
iq1o2.style.width=650;
let q1o2=document.getElementById("firstQuestion2");
q1o2.appendChild(iq1o2); 


let sharp=document.getElementById("firstAnswer2");
sharp.addEventListener("click", function(){
    question1.style.display="none"; 
    question.innerHTML=("Would You Rather Be Up Close And Personal Or Strike From Distance?");
    question2.style.display="inline";
    let q2o2=document.getElementById("secondQuestion2");
    let iq2o2=document.createElement("img");
    iq2o2.src="wyvernheart.PNG";
    q2o2.appendChild(iq2o2);
    let q2o1=document.getElementById("secondQuestion1");
    let iq2o1=document.createElement("video");
    iq2o1.src="0419.mp4";
    iq2o1.addEventListener("ended", function() {
        iq2o1.currentTime = 0; 
        iq2o1.play();           
    });
    iq2o1.style.width=500;
    iq2o1.autoplay=true;
    iq2o1.controls=true;
    q2o1.appendChild(iq2o1);

    let fastWeapon=document.getElementById("secondAnswer1");
    fastWeapon.addEventListener("click", function(){
        question2.style.display="none";
        question.innerHTML=("Would You Have a Simplistic Weapon And Focus On The Monster Or Have A Complicated Weapon With Many Mechanics");
        sharpMeleeQ.style.display="inline";
        let complicated=document.getElementById("sharpMeleeQ2");
        let saed=document.createElement("img");
        saed.src="SAED.PNG";
        saed.style.width=500;
        complicated.appendChild(saed);
        let simple=document.getElementById("sharpMeleeQ1");
        let greatswordCharge=document.createElement("img");
        greatswordCharge.src="https://www.bing.com/th/id/OGC.fd09820f0854d72f4b7cae16f684df47?pid=1.7&rurl=https%3a%2f%2ffextralife.com%2fwp-content%2fuploads%2f2018%2f01%2fCharge-Attack.gif&ehk=oIXyh1eZqtCxvj22rW2pdnQ6KwV187ZUX9NitQAqCkg%3d";
        greatswordCharge.style.width=500; 
        simple.appendChild(greatswordCharge);
        
        let GSvsLance=document.getElementById("sharpMeleeA1")
        GSvsLance.addEventListener("click", function(){
            sharpMeleeQ.style.display="none";
            GSvsL.style.display="inline"
            question.innerHTML=("Choose risking it all for more damage or become a wall, attacking when openings appear.")
            let greatSword=document.getElementById("greatSword");
            let shoulder=document.createElement("img");
            shoulder.src="https://www.bing.com/th/id/OGC.325b0f19a9d31c05be92510993c9afed?pid=1.7&rurl=http%3a%2f%2fi1.kwejk.pl%2fk%2fobrazki%2f2013%2f03%2f8833825b0519820dc0e4c4dd1bb74e8b_gif.gif&ehk=%2ff%2f5OiTLmBlw7knA%2f0G5Mfg9gSMgXZ9Bw4kbYVPp6Ws%3d";
            shoulder.style.width=500;
            greatSword.appendChild(shoulder);
            let lance=document.getElementById("lance");
            let guard=document.createElement("img");
            guard.src="Lance.gif"
            guard.style.width=500
            lance.appendChild(guard);

let GS=document.getElementById("noDefense");
        GS.addEventListener("click", function(){
            GSvsL.style.display="none"
            question.style.display="none";
            finalAnswer.style.display="inline";
            heading.innerHTML=("I Bet You Would Like...");
            let fWeapon=document.createElement("img");
            let weapon=document.getElementById("result");
            fWeapon.src="https://www.gamersdecide.com/sites/default/files/authors/u158654/article_mhw-ib_greatsword.jpg";
            weapon.appendChild(fWeapon);
            fWeapon.style.width=1300;
        })

        let L=document.getElementById("unbreakable")
        L.addEventListener("click", function(){
            GSvsL.style.display="none"
            question.style.display="none";
            finalAnswer.style.display="inline";
            heading.innerHTML=("I Bet You Would Like...");
            let fWeapon=document.createElement("img");
            let weapon=document.getElementById("result");
            fWeapon.src="Lance.avif";
            weapon.appendChild(fWeapon);
            fWeapon.style.width=1300;
            let fweapon2=document.createElement("img");
            fweapon2.src="sword_and_shield.jpg"
            weapon.appendChild(fweapon2);
        })
        })
      
       let complicatedWeapons=document.getElementById("sharpMeleeA2")
       complicatedWeapons.addEventListener("click", function(){
        sharpMeleeQ.style.display="none"
        mechanics.style.display="inline";
        question.innerHTML=("Would you rather have large effects and/or explosions or have more focus on the weapon itself");
        let onlyWeapon=document.getElementById("onlyWeapon");
        let IGBrachy=document.createElement("img");
        IGBrachy.src="IGBrachy.gif";
        IGBrachy.style.width=500;
        onlyWeapon.appendChild(IGBrachy);
        let effects=document.getElementById("effects")
        let SAFire=document.createElement("img");
        SAFire.src="SAFire.webp";
        SAFire.style.width=500;
        effects.appendChild(SAFire);


       }) 

    })
    })
})