import Component from "../core/component.js";
import * as event from "../event/event.js";

export default class ResultDate extends Component {
    template() {
        const { day, month, year } = this.state;

        return `
            <p class="dateText"><span class="dateData">${event.isWrite(year).toString().padStart(2,"0")}</span> years</p>
            <p class="dateText"><span class="dateData">${event.isWrite(month).toString().padStart(2,"0")}</span> months</p>
            <p class="dateText"><span class="dateData">${event.isWrite(day).toString().padStart(2,"0")}</span> days</p>
        `;
    }
}