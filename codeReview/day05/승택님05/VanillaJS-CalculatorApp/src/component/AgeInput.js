import Component from "../core/component.js";
import * as event from "../event/event.js";
import ResultDate from "./ResultDate.js";

export default class AgeInput extends Component {
    initState() {
        this.state = {
            day : "00",
            month : "00",
            year : "00"
        };
    }
    template() {
        return `
            <div class="calendar" id="calendar">
                <div class="calendarInput" id="calendarInput">
                    <div class="inputDiv" id="DAY">
                        <label class="inputTitle" for="inputDAY">DAY</label>
                        <input data-date="day" class="inputData" id="inputDAY" type="number" MIN="1" MAX="31">
                        <p class="errorMsg"></p>
                    </div>
                    <div class="inputDiv" id="MONTH">
                        <label class="inputTitle" for="inputMONTH">MONTH</label>
                        <input data-date="month" class="inputData" id="inputMONTH" type="number" MIN="1">
                        <p class="errorMsg"></p>
                    </div>
                    <div class="inputDiv" id="YEAR">
                        <label class="inputTitle" for="inputYEAR">YEAR</label>
                        <input data-date="year" class="inputData" id="inputYEAR" type="number" MIN="1">
                        <p class="errorMsg"></p>
                    </div>
                </div>
                <hr class="calendar-line" />
                <button type="button" class="ageCalculateBtn" id="calculateBtn"></button>
                <div class="result" id="result"></div>
            </div>
        `;
    }

    setEvent() {
        //default value set
        window.addEventListener("load", () => {
            inputDAY.value = this.state.day;
            inputMONTH.value = this.state.month;
            inputYEAR.value = this.state.year;

            new ResultDate(document.querySelector("#result"), this.state);
        });

        const Inputs = document.querySelectorAll("input");

        Inputs.forEach(element => {
            element.addEventListener("focusout", ({ target }) => {
                const { date } = target.dataset;
                const stateKey = date || "";
                const value = event.isDefault(target.value) ? "01" : target.value;

                if (!event.isSame(target.value, this.state[stateKey])) {
                    this.setState({ [stateKey]: value });
                    target.value = value;
                }
            });
        });

        calculateBtn.addEventListener("click", () => {
            document.querySelectorAll(`.errorMsg`).forEach(element => element.innerHTML = "");
            if(!event.isValidDate(this.state)) {
                document.querySelectorAll(`.errorMsg`).forEach(element => element.innerHTML = "[ERROR] This Num is not correct");
                document.querySelectorAll("input").forEach(element => element.style.borderColor= "red");
            } else {
                new ResultDate(document.querySelector("#result"), event.calculateDateDifference(this.state));
            }
        });
    }
}