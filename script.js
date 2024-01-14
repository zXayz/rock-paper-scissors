const aiChoose = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const checkWinner = (userInput, aiInput) => {
    if (userInput === aiInput) {
        return "Draw";
    } else if (
        (userInput === "paper" && aiInput === "scissors") ||
        (userInput === "rock" && aiInput === "paper") ||
        (userInput === "scissors" && aiInput === "rock")
    ) {
        updateScore("ai")  
        return `Ai Wins, (${aiInput}) `;
    } else {
        updateScore("user")  
        return `You Win, (${aiInput})`;
    }
};

const checkChoice = (event) => {
    const choosedOption = event.target.id;
    const aiResp = aiChoose();
    const result = checkWinner(choosedOption, aiResp);
    updateMessage(result);
};

const updateMessage = (msg) => {
    const message = document.querySelector("#msg");
    message.textContent = msg;
};

const updateScore = (who) => {
    let scoreElement = null;
    if (who === "ai") {
        scoreElement = document.querySelector("#com-socre");
    } else {
        scoreElement = document.querySelector("#user-socre");
    }
    scoreElement.textContent = (parseInt(scoreElement.textContent) + 1).toString();
}


const rock = document.querySelector("#rock");
rock.addEventListener("click", (event) => checkChoice(event));
const paper = document.querySelector("#paper");
paper.addEventListener("click", (event) => checkChoice(event));
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", (event) => checkChoice(event));


class newClass{
    
}






