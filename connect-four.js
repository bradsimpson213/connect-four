import { Game } from "./game.js";

let game = undefined;

function updateUi() {
    const boardHolder = document.getElementById("board-holder");
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        document
            .getElementById("game-name")
            .innerHTML = game.getName();
    }

    if (game.currentPlayer === 1) {
        const targetElement = document.getElementById('click-targets');
        console.log(targetElement);
        targetElement.classList.remove('red');
        targetElement.classList.add('black');
    } else {
        let targetElement = document.getElementById('click-targets');
        console.log(targetElement);
        targetElement.classList.remove('black');
        targetElement.classList.add('red');
    }

    //for (let i = )
}


window.addEventListener("DOMContentLoaded", () => {

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");

    document
        .getElementById("form-holder")
        .addEventListener("keyup", event => {

            if (player1.value && player2.value) {
                newGame.disabled = false;
            } else {
                newGame.disabled = true;
            }

        });
    newGame.addEventListener('click', event => {
        newGame.disabled = true;
        game = new Game(player1.value, player2.value);
        if (player1.value && player2.value) {
            newGame.disabled = false;
        } else {
            newGame.disabled = true;
        }
        player1.value = null;
        player2.value = null;
        updateUi();
    });

    document
        .getElementById("click-targets")
        .addEventListener("click", event => {
            clickTarget = event.target.id;
            if (clickTarget.includes("column-")){
                clickTarget = Number.parseInt(clickTarget);
                game.playInColumn(clickTarget);
            }
            updateUi();
        });

})
