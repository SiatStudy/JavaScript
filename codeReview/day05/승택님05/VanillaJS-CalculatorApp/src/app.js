import AgeInput from "./component/AgeInput.js";
class App {
    constructor() {
        this.setComponent();
    }
    setComponent() {
        const main = document.querySelector("#mainContainer");
        new AgeInput(main, null);
    }
}

new App();