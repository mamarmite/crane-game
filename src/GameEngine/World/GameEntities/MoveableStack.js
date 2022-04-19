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
    collisionGroup;
    render;
    defaultOptions;

    constructor(props={}) {
        this.rows = props.row || 20;
        this.columns = props.columns || 7;
        this.initX = props.x || 600;
        this.initY = props.y || 600;
        this.columnGap = props.columnGap || 5;
        this.rowGap = props.rowGap || 5;
        this.entity = Moveable;
        this.entities = [];
        this.collisionFilter = props.collisionFilter || {
            category: 0x0001,
            mask: 0xFFFFFFFF,
            group: 0
        };
        this.defaultGroupOptions = {
            collisionFilter: this.collisionFilter
        };

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

        this.render = {
            render: {
                fillStyle: '#222'
            }
        };
        this.defaultOptions = {...this.defaultGroupOptions, ...this.render }
        let obj = this.entity.create({
            x: x,
            y: y,
            w: 50,
            h: 50,
            options: this.defaultOptions
        });
        this.entities.push(obj);
        return obj;
    }

}