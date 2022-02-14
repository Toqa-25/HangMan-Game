let sectionName = document.querySelector(".section-name "),
    keyBoard = document.querySelector(".game-keyboard "),
    solution = document.querySelector(".solution "),
    solutionContent = document.querySelector(".solution-content ");
   //hangMan variables
let verticalStand = document.querySelector(".vertical-stand "),
    horizontalStand = document.querySelector(".horizontal-stand "),
    verticalRope = document.querySelector(".vertical-rope "),
    circleRope = document.querySelector(".circle-rope "),
    manHead = document.querySelector(".man-head "),
    manBody = document.querySelector(".man-body "),
    manHand = document.querySelector(".man-hand "),
    nextBuuton = document.querySelector(".next ");
    tryBuuton = document.querySelector(".try ");

// hangMan drow array
let hangMan = Array.from(document.querySelectorAll(".false-try")),
  hangManLast = hangMan[hangMan.length - 1];

// result var 
let resultDiv = document.querySelector(".result"),
  resultWinDiv = document.querySelector(".result-win"),
  resultLoserDiv = document.querySelector(".result-loser"),
  manLeg = document.querySelector(".man-leg ");


// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};
let wordsKey = Object.keys(words),
    randomSection = Math.floor(Math.random() * wordsKey.length),
    randomSectionKey = wordsKey[randomSection],
    randomSectionvalue = words[randomSectionKey],
    randomIndexForWord = Math.floor(Math.random() * randomSectionvalue.length),
    randomWord = randomSectionvalue[randomIndexForWord].toUpperCase();
console.log(randomWord);



// Letters
const letters = "abcdefghijklmnopqrstuvwxyz0123456789".toUpperCase();
let lettersArray =Array.from(letters)


// step => show section
sectionName.innerHTML = randomSectionKey;

// step => create word in solution
let randomWordArray= [...randomWord]
randomWordArray.map(letter => {
    solutionContent.innerHTML += `<span class="word-letter"></span>`;
})
let solutionContentSpans = Array.from(document.querySelectorAll(".solution-content span ")),
    lastSolutionContentSpan=(solutionContentSpans[(solutionContentSpans.length)-1])


// step => create keybord
lettersArray.map(letter => {
    keyBoard.innerHTML += `<span class="key-letter">${letter}</span>`;
})
let indexo = 0,
    countn=0

// step => get letter from keybord
let keyBoardLetters = [...document.querySelectorAll(".key-letter")];   
if (lastSolutionContentSpan.innerHTML == ""){
    keyBoardLetters.map(letter => {
        letter.onclick = function (e) {
            let letterSpane = e.currentTarget,
                chracter = letterSpane.innerHTML;
            letterSpane.classList.add("clicked")
            if (randomWordArray.includes(chracter)) {                 
                randomWordArray.map((letter, index) => {
                  if (letter === chracter) {
                    solutionContentSpans[index].innerHTML = chracter;
                      final();
                      success(); 
                }
                });    
                   }
            else {
                hangMan[countn].classList.add("show-block");
                countn++
                tries();
               lose();
            }          
        }
        }); 
    }


nextBuuton.onclick = load;
tryBuuton.onclick = load;

function final() {   
    solutionContentSpans.map(span => {
        
        if (span.innerHTML != "") {
        //   setTimeout( function(){
        //       resultDiv.classList.add("show-flex");
        //       resultWinDiv.classList.add("show-flex");
        //   }, 200)
        console.log("empty")
        }
    })
}
function tries() {   
    if (hangManLast.classList.contains("show-block")) {
         setTimeout(function () {
             document.querySelector(
               ".loser-msg"
             ).innerHTML = `game over <br> the word is ${randomWord}`;
          resultDiv.classList.add("show-flex");
        resultLoserDiv.classList.add("show-flex");
         }, 100);
    }
}

function load(){
    location.reload();
}

function success() {
    document.getElementById("success").play()
}
function lose() {
    document.getElementById("lose").play()
}

console.log("zain")
console.log(solutionContentSpans);