export default class Dispatcher {
    constructor() {
        this.listen = this.listen.bind(this);
        this._listeners = [];
    }

    set listeners(func) {
        if (typeof func === "function") {
            this._listeners.push(func);
        }
    }

    listen(data) {
        this._listeners.forEach((item) => typeof item === "function" && item(data));
    }
}