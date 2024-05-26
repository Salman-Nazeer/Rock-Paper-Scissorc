let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompchoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};


const showWiner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Yours ${userChoice} choice beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("user win");
    } else {
        msg.innerText = `You Loss! ${compChoice} beats Yours ${userChoice} choice`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("user lose")
    }
};

const playgame = (userChoice) => {
    // console.log("user choice was selected", userChoice);

    let compChoice = gencompchoice();
    // console.log("computer choice was selected", compChoice);


    if (userChoice === compChoice) {
        msg.innerText = "Game was Draw, try Again."
        msg.style.backgroundColor = "#081b31";
        // console.log("game was draw")
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWiner(userWin, userChoice, compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("choice was selected", userChoice);
        playgame(userChoice);
    });
});