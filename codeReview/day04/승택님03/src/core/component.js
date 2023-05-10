export default class Component {
    constructor($target) {
        this.$target = $target;
        this.setUp();
        this.render();
        this.setEvent();
    }

    setUp() { }
    render() { this.$target.innerHTML = this.template(); }
    template() { return ''; }
    setEvent() { }
}