import Component from  "../core/component.js";
import KeyBoardBtn from "../component/KeyBoard.js";

import * as event from "../Event/event.js";

export default class Main extends Component {
    setUp() {
        this.keyBoard = "abcdefghijklmnopqrstuvwxyz_".split("");
    }

    template() {
        return `
            <div id="main">
                <input type="text" id="inputText" />
                <div id ="keyBoard">
                    ${KeyBoardBtn(this.keyBoard)}
                </div>
            </div>
        `;
    }

    setEvent() {
        const keyBtns = document.querySelectorAll("#keyBoard button");

        keyBtns.forEach(keyBtn => {
            keyBtn.addEventListener("click", (e) => {
                const inputText = document.querySelector("#inputText");
                event.InputKey(inputText, e.target.dataset.key);
            });
        });
    }
}