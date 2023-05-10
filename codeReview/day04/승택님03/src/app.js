import Main from "./pages/Main.js"

class App {
    constructor() {
        const app = document.getElementById("app");
        new Main(app);
    }
}

new App();