import GameEngine from "../../core";

export default class Moveable {

    initX;
    initY;
    width;
    height;
    options;

    constructor(props={}) {
        this.initX = props.x || 0;
        this.initY = props.y || 0;
        this.width = props.w || 100;
        this.height = props.h || 100;
        this.options = props.options || {};
    }

    static create(props={}) {
        let body = new Moveable(props);
        return GameEngine.getMatter().Bodies.rectangle(body.initX, body.initY, body.width, body.height, this.options);
    }

}