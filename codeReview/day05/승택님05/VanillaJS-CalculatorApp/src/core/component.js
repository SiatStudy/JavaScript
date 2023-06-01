export default class Component {
    constructor($target, $props) {
        this.target = $target;

        if ($props !== null) {
            this.target.innerHTML = "";
            this.initState();
            this.setState($props);
        } else {
            this.initState();
        }
        this.render();
        this.setEvent();
    }

    initState() {
        this.state = {};
    }
    render() { this.target.innerHTML = this.template(); }
    template() { return ``; }
    setEvent() {}
    setState(newState) {
        this.state = { ...this.state, ...newState };
    }
}