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

    for (let row = 0; row <= 5; row++) {
        for (let col = 0; col <= 6; col++) {
            const square = document.querySelector(`#square-${row}-${col}`);
            square.innerHTML = '';

            const playerNumber = game.getTokenAt(row, col);
            if(playerNumber === 1) {
                const token = document.createElement("div");
                token.classList.add("token", "black");
                square.appendChild(token);
            } else if( playerNumber === 2) {
                const token = document.createElement("div");
                token.classList.add("token", "red");
                square.appendChild(token);
            }
        }
    }


    if (game.currentPlayer === 1) {
        const targetElement = document.getElementById("click-targets");
        targetElement.classList.remove("red");
        targetElement.classList.add("black");
    } else {
        let targetElement = document.getElementById("click-targets");
        targetElement.classList.remove("black");
        targetElement.classList.add("red");
    }

    
}


window.addEventListener("DOMContentLoaded", () => {

    const player1 = document.getElementById("player-1-name");
    const player2 = document.getElementById("player-2-name");
    const newGameButton = document.getElementById("new-game");

    document
        .getElementById("form-holder")
        .addEventListener("keyup", event => {
            
        newGameButton.disabled = (player1.value.length === 0 || 
            player2.value.length === 0); 
        });

    newGameButton.addEventListener('click', event => {
        newGameButton.disabled = true;
        game = new Game(player1.value, player2.value);

        newGameButton.disabled = (player1.value.length === 0 ||
            player2.value.length === 0); 

        player1.value = null;
        player2.value = null;
        updateUi();
    });

    document
        .getElementById("click-targets")
        .addEventListener("click", event => {
            const clickTarget = event.target.id;
            if (!clickTarget.startsWith("column-")) return;

            const columnIndex = clickTarget.slice(7);
            game.playInColumn(columnIndex);
            updateUi();
            console.log(game.columns);
        });

})
