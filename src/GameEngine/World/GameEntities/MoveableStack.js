import Moveable from "./Moveable";
import GameEngine from "../../core";

export default class MoveableStack {

    rows;
    initX;
    initY;
    columns;
    columnGap;
    rowGap;
    entity;
    entities;

    constructor(props={}) {
        this.rows = props.row || 10;
        this.initX = props.x || 400;
        this.initY = props.y || 200;
        this.columns = props.columns || 3;
        this.columnGap = props.columnGap || 0;
        this.rowGap = props.rowGap || 0;
        this.entity = Moveable;
        this.entities = [];

        return this.init();
    }

    init() {

        return GameEngine.getMatter().Composites.stack(
            this.initX,
            this.initY,
            this.columns,
            this.rows,
            this.columnGap,
            this.rowGap,
            this.createEntity.bind(this)
        );
    }

    createEntity(x, y) {
        let obj = this.entity.create({
            x: x,
            y: y,
            w: 20,
            h: 20
        });
        this.entities.push(obj);
        return obj;
    }

}