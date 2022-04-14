import Matter from "Matter-js";


export default class GameEngine {

    engine;
    world;
    runner;

    renderer;
    debugRenderOptions;

    stage;
    stageWidth;
    stageHeight;

    groups;

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

    init() {
         this.engine = Matter.Engine.create();
         this.world = this.engine.world;
         this.render();
         this.run();


         this.controls();
    }

    render() {
        this.renderer = Render.create({
            element: document.body,
            engine: this.engine,
            options: {...this.stage, ...this.debugRenderOptions},

        });

        Matter.Render.run(this.renderer);
    }

    run() {
        this.runner = Matter.Runner.create();
        Matter.Runner.run(this.runner, this.engine);
    }

    controls() {
        const speed = 3;
        const muscular = 2;
        const rotation = 0.01;

        const keyHandlers = {
            KeyQ: () => {
                Matter.Body.rotate(chainMaster, rotation);

            },
            KeyE: () => {
                Matter.Body.rotate(chainMaster, -rotation);

            },
            KeyW: () => {
                Matter.Body.translate(chainMaster, {x:0, y: -muscular});

            },
            KeyS: () => {
                Matter.Body.translate(chainMaster, {x:0, y:muscular});

            },
            KeyD: () => {
                Matter.Body.translate(chainMaster, {x:speed, y: 0});
            },
            KeyA: () => {
                Matter.Body.translate(chainMaster, {x:-speed, y:0});
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
        // keep the mouse in sync with rendering
        this.renderer.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(this.renderer, {
            min: { x: 0, y: 0 },
            max: { x: this.stageWidth, y: this.stageHeight }
        });
    }

}

