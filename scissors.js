const scoreBoard_div = document.querySelector(".score-board");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

let userScore = 0;
let computerScore = 0;

function convertTo(letter) {

    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissor";
}
function getComputerChoice() {

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    
    // const smallUserWord="user".style.fontSize="large";
    // const smallCompWord=<span><p>comp</p></span>.style.fontsize="large";
    result_p.innerHTML = `${convertTo(userChoice)} beats ${convertTo(computerChoice)} .You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow') }, 500);


    if(userScore==25){
        alert("Congo you've won!");
        
       setTimeout(()=>{

       
        userScore=0;
        computerScore=0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

       },100);
        
    }
}

function lose(userChoice, computerChoice) {

    computerScore++;
    computerScore_span.innerHTML = computerScore;
   
    // const smallUserWord="user".style.fontsize(3).sub();
    // const smallCompWord="comp".style.fontsize(3).sub();
    result_p.innerHTML = `${convertTo(computerChoice)} beats ${convertTo(userChoice)} .You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('red-glow') }, 500);

    if(computerScore==25){
        alert("Congo you've lost!");
        setTimeout(()=>{  
            userScore=0;
            computerScore=0;
            computerScore_span.innerHTML = computerScore;
            userScore_span.innerHTML = userScore;


        },100);
        
    }
    
}

function draw(userChoice, computerChoice) {

    result_p.innerHTML = `${convertTo(userChoice)} equals ${convertTo(computerChoice)} .Its Draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function () { document.getElementById(userChoice).classList.remove('gray-glow') }, 500);
}

function game(userChoice) {

    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {

        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

rock_div.addEventListener('click', function () {

    game("r");

})

paper_div.addEventListener('click', function () {

    game("p");

})

scissor_div.addEventListener('click', function () {

    game("s");

})


