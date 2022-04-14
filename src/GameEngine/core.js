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

    constructor(w=800, h=600) {
        this.stageWidth = w;
        this.stageHeight = h;
        this.stage = {
            width: this.stageWidth,
            height: this.stageHeight,
        };

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
         this.mouse();
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
        Matter.Composite.add(this.world, [
            moveableStack01,
            Matter.Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
        ]);

        var startX = 200, startY = 50, lastX = startX, lastY = startY,
            chainLinkHeight=30,
            chainLinkWidth=5;

        this.hero = Matter.Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });
        this.hero.isStatic = true;

        var chainHand = Matter.Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });

        var craneChain = Matter.Composites.stack(startX+15, startY+15, 15, 1, 1, 1, function(x, y) {
            lastX = x; lastY = y;
            return Matter.Bodies.rectangle(x - 30, y -30, chainLinkHeight, chainLinkWidth, { collisionFilter: { group: group }, chamfer: 0.1, stiffness: 1 });
        });


        var chainAnchor = craneChain.bodies[0];
        craneChain.bodies.push(chainHand);

        var chainComposite = Matter.Composites.chain(craneChain, 0.4, 0, -0.4, 0, { stiffness: 1, length: 0 });
        var chainAnchorConstraint = Matter.Constraint.create({
            bodyA: this.hero,
            bodyB: chainAnchor,
            stiffness: 1,
            length: 0,
        });

        group = Matter.Body.nextGroup(true);

        Matter.Composite.add(this.world, [
            this.hero,
            craneChain,
            chainAnchorConstraint,
            Matter.Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
        ]);

        var group = Matter.Body.nextGroup(true);
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
                Matter.Body.translate(this.hero, {x:0, y: -muscular});

            },
            KeyS: () => {
                Matter.Body.translate(this.hero, {x:0, y:muscular});

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
    }

    mouse() {
        var mouse = Matter.Mouse.create(render.canvas),
            mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.1,
                    render: {
                        visible: false
                    }
                }
            });

        Matter.Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        this.renderer.mouse = Matter.mouse;

        // fit the render viewport to the scene
        Matter.Render.lookAt(this.renderer, {
            min: { x: 0, y: 0 },
            max: { x: this.stageWidth, y: this.stageHeight }
        });
    }

}

