import GameEngine from "../../core";

export default class Moveable {

    initX;
    initY;
    width;
    height;

    constructor(props={}) {
        this.initX = props.x | 0;
        this.initY = props.y | 0;
        this.width = props.w | 15;
        this.height = props.h | 15;
    }

    static create(props={}) {
        let body = new Moveable(props);
        return GameEngine.getMatter().Bodies.rectangle(body.initX, body.initY, body.width, body.height);
    }

}