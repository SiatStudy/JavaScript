import Component from "../core/Component.js";
import * as event from "../event/event.js";
import gameData from "../data/gameData.js";
import QuestionUI from "../component/questionUI.js";
import HangmanUI from "../component/hangmanUI.js";
import keyboardBtn from "../component/Keyboard.js";

export default class gamePage extends Component {
    setUp() {
        this.random_question = Math.floor(Math.random() * 2);
        this.random_data = Math.floor(Math.random() * (this.random_question == 0 ? 6 : 4));

        this.MAX_HP = 10;
        this.randomData = [
            gameData[this.random_question].key,
            Array.from(gameData[this.random_question].data[this.random_data].categories),
            gameData[this.random_question].data[this.random_data].hint
        ]
        this.answer = [ ... new Set(this.randomData[1].filter(element => !(element == '-')))];

        //TODO:DELELETE SHOW ANSWER
        console.log(this.answer);

        this.userHP = this.MAX_HP;
        this.userAnswer = [];

        this.render();
    }

    template() {
        return `
            <div id="gameTitle">
                <h1>HANGMAN</h1>
                <h3>VANILLA JAVASCRIPT HANGMAN GAME</h3>
                <p>Use the alphabet below to guess the word, or click hint to get a clue.</p>
            </div>

            <div id="questionDiv">
                ${QuestionUI(this.randomData, this.userHP, this.userAnswer)}
            </div>
            <div id="gameUI">
                ${HangmanUI()}
            </div>
            <div id="keyUI">
                ${keyboardBtn()}
            </div>
            <div id="userUI">
                <button id="showHintBtn" class="key">Hint</button>
                <button id="resetBtn" class="key">Reset</button>
            </div>
        `;
    }

    setEvent() {
        const keyBtns = document.querySelectorAll("#keyUI button");

        keyBtns.forEach(Btn => {
            Btn.addEventListener("click", (e) => {
                if(event.isIncludes(e.target.dataset.key, this) == 0) {
                    this.userHP--;
                    event.animate(stickman, this.userHP);
                }

                e.target.disabled = "true";
                questionDiv.innerHTML = QuestionUI(this.randomData, this.userHP, this.userAnswer);

                if(this.userHP == 0) {
                    userLife.innerHTML = event.isLose();
                } else {
                    const winInfo = event.isWin(this);
                    userLife.innerHTML = (winInfo == 0)
                        ? userLife.innerHTML
                        : winInfo;
                }
            });
        });

        showHintBtn.addEventListener("click", () => {
            const hint = document.querySelector("#hint");
            event.showHint(hint);
        });

        resetBtn.addEventListener("click", () => { location.reload(true); });
    }
}