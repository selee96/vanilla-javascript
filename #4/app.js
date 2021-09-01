const rangeInput = document.querySelector("#game-range");
const playForm = document.querySelector("#play-form");
const guessInput = document.querySelector("#play-form .play-form__input");
const playInfo = document.querySelector("#play-form .play-form__info");
const playScore = document.querySelector("#play-form .play-form__score");

const HIDDEN_CLASSNAME = "hidden";

function onPlaySubmit(event) {
    event.preventDefault();
    const range_num = rangeInput.value;

    if(parseInt(range_num) < 0) {
        alert("게임 범위는 0이상입니다.");
    } else if (range_num === "") {
        alert("범위를 지정해주세요.");
    } else {
        const guess_num = guessInput.value;
        let random_num = Math.ceil(Math.random() * range_num);
        playInfo.innerText = `You chose: ${guess_num}, the machine chose: ${random_num}.`;

        console.log(guess_num);
        console.log(random_num);

        if(parseInt(guess_num) === random_num) {
            playScore.innerText = "You won!";
        } else  {
            playScore.innerText = "You lost!";
        }

        playInfo.classList.remove(HIDDEN_CLASSNAME);
        playScore.classList.remove(HIDDEN_CLASSNAME);
    }
}

playForm.addEventListener("submit", onPlaySubmit); 



