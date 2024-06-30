let possibleWords=["the", "and", "of", "to", "in", "a", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "but", "some", "what", "there", "we", "can", "out", "other", "were", "all", "your", "when", "up", "use", "word", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "my", "sound", "no", "most", "number", "who", "over", "know", "water", "than", "call", "first", "people", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left"];

// Select the output element by its id
let outputElement = document.getElementById("output");

// Modify the content of the output element
outputElement.innerHTML=("Welcome to Hangman")

let messages = document.getElementById("t");
let lossProgress=document.getElementById("tr");
let wordProgress=document.getElementById("tri");
let button=document.getElementById("hangMan");
let submittal=document.getElementById("theGuess");

let hangWord= possibleWords[parseInt(Math.random()*199)];
console.log(hangWord);
let progress="";
    for(let x=0; x<hangWord.length; x++){
        progress=progress + "_"
    }
    let mistakes=0;
let pastGuesses="";
let hangMan="  |   ";
submittal.addEventListener("keydown", function makeAGuess(event){ 
    
    if(event.key === 'Enter'){
    let g=submittal.value;
    console.log(g);
    document.getElementById("theGuess").value="";
     
    // j
    pastGuesses=pastGuesses + g + " ";
    let temp=progress;
    console.log(progress)
    for(let x=0; x<hangWord.length; x++){
        if(hangWord.substring(x)==g){
            if(x+1==hangWord.length){
                progress=progress.substring(0,x)+ g;
            }
            else{
                progress=progress.substring(0,x)+ g + progress.substring(x+1);
            }
        }
        else if(hangWord.substring(x, x+1)==g){
            if(x+1==hangWord.length){
                progress=progress.substring(0,x)+ g;
            }
            else{
                progress=progress.substring(0,x)+ g + progress.substring(x+1);
            }
        }
    }
    console.log(progress)
    let standIn= document.getElementById("tria");
       wordProgress.innerHTML=("(" + progress.length + " letters): " + progress); 
       standIn.innerHTML=("Word Progress ");
    if(progress==temp){
        mistakes++;
    
    if(mistakes==1){
        hangMan=hangMan + "\n  @   ";
    }
    else if(mistakes==2){
        hangMan=hangMan+ "\n" + " /";
    }
    else if(mistakes==3){
        hangMan=hangMan+"|";
    }
    else if(mistakes==4){
        hangMan=hangMan+"\\ ";
    }
    else if(mistakes==5){
        hangMan=hangMan + "\n" + " /";
    }
    else if(mistakes==6){
        hangMan=hangMan + " \\ " + "\n";
    let loss=document.getElementById("trial")
    loss.innerHTML=("The word was: " + hangWord);
    
        setTimeout(function(){
            location.reload();
        }, 3000)
    }
    }
    if(hangWord==progress){
       hangMan=hangMan+"\n"+ "Winner Winner!";
       setTimeout(function(){
        location.reload();
    }, 3000)
    } 
    lossProgress.innerHTML=(hangMan +"");
    messages.innerHTML=("Past guesses: " + pastGuesses);
    }
});



