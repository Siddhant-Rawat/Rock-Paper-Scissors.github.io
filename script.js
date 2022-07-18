let rock = document.querySelector(".rock");
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let aiChoice;
let gameResult;
// let choice = document.querySelector('.choice');
let winner = document.querySelector('.winner h2');
let resetButton = document.querySelector('.reset button');
let reset = document.querySelector('.reset');
reset.style.display = "none";       //Check line 13.
let gif = document.querySelector('.gif');

// In JavaScript, we can hide the elements using the style.display or by using the style.visibility. 
// The difference between the style.display and style.visibility is when using visibility: hidden, 
// the tag is not visible, but space is allocated. Using display: none, the tag is also not visible,
// but there is no space allocated on the page.
let play = document.querySelector('.playGround h1').style.visibility = "hidden";

rock.addEventListener('click', ()=> {
    rock.style.background='rgb(0 3 95)';
    result('rock');
});

paper.addEventListener('click', ()=> {
    paper.style.background='rgb(0 3 95)';
    result('paper');
});

scissor.addEventListener('click', ()=> {
    scissor.style.background='rgb(0 3 95)';
    result('scissors');
});

resetButton.addEventListener('click', ()=> {
    rock.style.background='rgb(54, 57, 151)';
    paper.style.background='rgb(54, 57, 151)';
    scissor.style.background='rgb(54, 57, 151)';
    winner.textContent = "";
    gif.src = "question-mark.gif";
    //To toggle reset to none so that it won't be displayed. span is an inline element so "inline" is used in line 74.
    reset.style.display = "none";
});

function result(userChoice) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5f5d3c7a40mshb633f2533ebec91p1bad9djsne1017fa356b2',
            'X-RapidAPI-Host': 'rock-paper-scissors7.p.rapidapi.com'
        }
    }
    
    const url = `https://rock-paper-scissors7.p.rapidapi.com/?choice=${userChoice}`;

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            aiChoice = response.ai.name;
            // console.log(aiChoice);
            gameResult = response.result;
            // console.log(gameResult);

            if(aiChoice === "paper")
                gif.src = "paper.png";
            if(aiChoice === "rock")
                gif.src = "rock.png";
            if(aiChoice === "scissors")
                gif.src = "scissor.png";

            winner.textContent = "Result : " + gameResult;

            //Element is rendered as inline level element
            reset.style.display = "inline";
        })
        .catch(err => console.error(err));
}