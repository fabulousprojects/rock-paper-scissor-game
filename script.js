var userSelecetedOption;
var computerSelectedOption;
var textSizeForEmojis = "30px";
var userScore = 0;
var computerScore = 0;
function fist(){
    userSelecetedOption = "stone";
    var createEl = document.createElement("h6");
    createEl.innerHTML = "✊ <br>";
    createEl.style.display = "block";
    createEl.style.fontSize = textSizeForEmojis;
    createEl.classList.add("user-emojis");
    document.getElementById("me").appendChild(createEl);
    logic()
}

function hand() {
    userSelecetedOption = "paper";
    var createEl = document.createElement("h6");
    createEl.innerHTML = "✋ <br>";
    createEl.classList.add("user-emojis");
    createEl.style.display = "block";
    createEl.style.fontSize = textSizeForEmojis;
    document.getElementById("me").appendChild(createEl);
    logic()
}

function peace() {
    userSelecetedOption ="scissors";
    var createEl = document.createElement("h6");
    createEl.innerHTML = "✌️ <br>";
    createEl.classList.add("user-emojis");
    createEl.style.display = "block";
    createEl.style.fontSize = textSizeForEmojis;
    document.getElementById("me").appendChild(createEl);
    logic()
}

function logic() {
    var computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 3) {

        computerSelectedOption = "scissors";
        var createElComp = document.createElement("h6");
        createElComp.innerHTML = "✌️ <br>";
        createElComp.classList.add("comp-emojis");
        createElComp.style.display = "block";
        createElComp.style.fontSize = textSizeForEmojis;
        document.getElementById("comp").appendChild(createElComp);
    }





    if (computerChoice === 2) {
        var createElComp = document.createElement("h6");
        computerSelectedOption = "paper";
        createElComp.innerHTML = "✋ <br>";
        createElComp.classList.add("comp-emojis");
        createElComp.style.display = "block";
        createElComp.style.fontSize = textSizeForEmojis;
        document.getElementById("comp").appendChild(createElComp);
    }
    if (computerChoice === 1) {
        var createElComp = document.createElement("h6");
        computerSelectedOption = "stone";
        createElComp.innerHTML = "✊ <br>";
        createElComp.classList.add("comp-emojis");
        createElComp.style.display = "block";
        createElComp.style.fontSize = textSizeForEmojis;
        document.getElementById("comp").appendChild(createElComp);
    }


    if((computerSelectedOption === "scissors") && (userSelecetedOption === "stone")) {
        userScore = userScore + 1;
    }

    if((computerSelectedOption === "scissors") && (userSelecetedOption === "paper")) {
        computerScore = computerScore + 1;
    }

    if((computerSelectedOption === "paper") && (userSelecetedOption === "stone")) {
        computerScore = computerScore + 1;
    }

    if((computerSelectedOption === "paper") && (userSelecetedOption === "scissors")) {
        userScore = userScore + 1;
    }

    if((computerSelectedOption === "stone") && (userSelecetedOption === "paper")) {
        userScore = userScore + 1;
    }

    if((computerSelectedOption === "stone") && (userSelecetedOption === "scissors")) {
        computerScore = computerScore + 1;
    }

    document.getElementById("Mscore").textContent = `${userScore} Points`;
    document.getElementById("Cscore").textContent = `${computerScore} Points`

    if(computerScore === 5) {
        alert("Sorry The Computer Has Won Better Luck Next Time");
        window.location.reload(); 
    }
    
    if(userScore === 5) {
        alert("Congratulations You Have Won!!!!!");
        window.location.reload();
    }
    

}