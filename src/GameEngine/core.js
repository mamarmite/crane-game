import Matter from 'matter-js'
import MoveableStack from "./World/GameEntities/MoveableStack";
//import Matter from "../../node_modules/matter-js/build/matter.js";

export default class GameEngine {

    static matter;

    engine;
    world;
    runner;

    renderer;
    debugRenderOptions;

    stage;
    stageWidth;
    stageHeight;

    groups;

    hero;
    chain;
    chainComposite;
    chainMainConstraint;
    chainMaxLenght;
    chainMinLenght;

    constructor(w=800, h=600) {
        this.stageWidth = w;
        this.stageHeight = h;
        this.stage = {
            width: this.stageWidth,
            height: this.stageHeight,
        };
        this.chainMinLenght = 1;
        this.chainMaxLenght = 200;
        this.debugRenderOptions = {
            showAngleIndicator: true,
            //showCollisions: true,
            //showVelocity: true
        }
        this.groups = [
            {
                id: "world",
                members: [],
            }
        ]
    }

    static getMatter() {
        if (GameEngine.matter == null) {
            GameEngine.matter = Matter;
        }
        return GameEngine.matter;
    }

    init() {
         this.engine = Matter.Engine.create();
         this.world = this.engine.world;
         this.render();
         this.run();

         this.entities();

         this.controls();
    }

    render() {
        this.renderer = Matter.Render.create({
            element: document.getElementById("craneGame"),
            engine: this.engine,
            options: {...this.stage, ...this.debugRenderOptions},

        });

        Matter.Render.run(this.renderer);
    }

    run() {
        this.runner = Matter.Runner.create();
        Matter.Runner.run(this.runner, this.engine);
    }

    entities() {
        var group = Matter.Body.nextGroup(true);

        let moveableStack01 = new MoveableStack({});
        let floor = Matter.Bodies.rectangle(this.stageWidth/2, this.stageHeight-10, this.stageWidth, 10, { isStatic: true });

        Matter.Composite.add(this.world, [
            moveableStack01,
            floor
        ]);

        var startX = 200, startY = 50, lastX = startX, lastY = startY,
            chainLinkHeight=30,
            chainLinkWidth=5;

        this.hero = Matter.Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });
        this.hero.isStatic = true;

        var chainHand = Matter.Bodies.circle(startX, startY, 10, { collisionFilter: { group: group }, chamfer: 0, density: 0.1 });

        this.chain = Matter.Composites.stack(startX+15, startY+15, 15, 1, 1, 1, function(x, y) {
            lastX = x; lastY = y;
            return Matter.Bodies.rectangle(x - 30, y -30, chainLinkHeight, chainLinkWidth, { collisionFilter: { group: group }, chamfer: 0.1, density: 0.1 });
        });


        var chainAnchor = this.chain.bodies[0];
        this.chain.bodies.push(chainHand);

        this.chainComposite = Matter.Composites.chain(this.chain , 0.4, 0, -0.4, 0, { length: 0.001 });
        this.chainMainConstraint = Matter.Constraint.create({
            bodyA: this.hero,
            bodyB: chainAnchor
        });

        Matter.Composite.add(this.world, [
            this.hero,
            this.chain,
            this.chainMainConstraint
        ]);
    }

    controls() {
        const speed = 3;
        const muscular = 2;
        const rotation = 0.01;

        const keyHandlers = {
            KeyQ: () => {
                Matter.Body.rotate(this.hero, rotation);

            },
            KeyE: () => {
                Matter.Body.rotate(this.hero, -rotation);

            },
            KeyW: () => {
                //Matter.Body.translate(this.hero, {x:0, y: -muscular});
                this.chain.bodies.forEach(function(body) {
                    body.density += 0.001;
                    console.log(body);
                });
            },
            KeyS: () => {
                //Matter.Body.translate(this.hero, {x:0, y: +muscular});
                this.chain.bodies.forEach(function(body) {
                    body.density -= 0.001;
                    console.log(body);
                });

            },
            KeyD: () => {
                Matter.Body.translate(this.hero, {x:speed, y: 0});
            },
            KeyA: () => {
                Matter.Body.translate(this.hero, {x:-speed, y:0});
            },
        };
        const keysDown = new Set();
        document.addEventListener("keydown", event => {
            keysDown.add(event.code);
        });
        document.addEventListener("keyup", event => {
            keysDown.delete(event.code);
        });

        Matter.Events.on(this.engine, "beforeUpdate", event => {
            [...keysDown].forEach(k => {
                keyHandlers[k]?.();
            });
        });

        this.mouse();
    }

    mouse() {
        var mouse = Matter.Mouse.create(this.renderer.canvas),
            mouseConstraint = Matter.MouseConstraint.create(this.engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.1,
                    render: {
                        visible: true
                    }
                }
            });

        Matter.Composite.add(this.world, mouseConstraint);

        // keep the mouse in sync with rendering
        this.renderer.mouse = Matter.mouse;

        // fit the render viewport to the scene
        Matter.Render.lookAt(this.renderer, {
            min: { x: 0, y: 0 },
            max: { x: this.stageWidth, y: this.stageHeight }
        });
    }

}

