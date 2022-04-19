import Matter from 'matter-js'
import MoveableStack from "./World/GameEntities/MoveableStack";
//import Matter from "../../node_modules/matter-js/build/matter.js";

export default class GameEngine {

    static matter;

    engine;
    world;
    runner;

    gravity;

    renderer;
    debugRenderOptions;

    stage;
    stageWidth;
    stageHeight;

    groups;

    stage01;

    hero;
    chain;
    chainRail;
    chainComposite;
    chainMainConstraint;
    chainHand;
    chainMaxLenght;
    chainMinLenght;

    directionX;
    directionY;
    speedY;
    speedX;
    velocity;
    maxSpeed;
    initSpeed;
    initSpeedY;
    initSpeedX;

    motorTorque;

    gameCollision;
    outOfMainGame;

    bodyStyle;

    constructor(w=800, h=600) {
        this.stageWidth = w;
        this.stageHeight = h;
        this.stage = {
            width: this.stageWidth,
            height: this.stageHeight,
            wireframes: false,
        };
        this.motorTorque = 2;
        this.chainMinLenght = 1;
        this.chainMaxLenght = 200;
        this.debugRenderOptions = {
            showAngleIndicator: false,
            showCollisions: false,
            showVelocity: false
        }
        this.groups = [
            {
                id: "world",
                members: [],
            }
        ];
        this.gameCollision = 0x0001;
        this.outOfMainGame = 0x0002;
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

         this.entities();

         this.render();
         this.run();

         this.controls();
         this.actions();

         this.collisions();
         this.gravity = this.world.gravity;
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
        //let group = Matter.Body.nextGroup(true);
        let staticThickness = 50;
        let moveableStack01 = new MoveableStack({});
        let floor = Matter.Bodies.rectangle(this.stageWidth/2, this.stageHeight-10, this.stageWidth, staticThickness, { isStatic: true });
        this.chainRail =  Matter.Bodies.rectangle(this.stageWidth/2, this.stageHeight/7, this.stageWidth, staticThickness, { isStatic: true });
        this.chainRail.visibilityState = "showed";

        this.stage01 = Matter.Composite.add(this.world, [
            moveableStack01,
            floor,
            this.chainRail,
            Matter.Bodies.rectangle(0, this.stageHeight/2, staticThickness, this.stageWidth, { isStatic: true }),
            Matter.Bodies.rectangle(this.stageWidth, this.stageHeight/2, staticThickness, this.stageWidth, { isStatic: true })
        ]);

        var startX = 200, startY = 50, lastX = startX, lastY = startY,
            chainLinkHeight=50,
            chainLinkWidth=5,
            dynamicObjectDensity = 0.1;

        //collisionFilter: { group: group },
        this.hero = Matter.Bodies.circle(startX, startY, 25, { chamfer: 0, friction:0.5, density:dynamicObjectDensity });
        //this.hero.isStatic = true;


        //group = Matter.Body.nextGroup(false);


        //group = Matter.Body.nextGroup(true);

        this.chain = Matter.Composites.stack(startX, startY+chainLinkHeight*2, 1, 4, 4, 4, function(x, y) {
            lastX = x; lastY = y;
            return Matter.Bodies.rectangle(x, y, chainLinkWidth, chainLinkHeight, {
                collisionFilter: {
                    category: 0x0002,
                    group: 1
                }
            });
        });

        var chainAnchor = this.chain.bodies[0];
        var chainWrist = this.chain.bodies[this.chain.bodies.length-1];

        this.chainHand = Matter.Bodies.circle(chainWrist.position.x, chainWrist.position.y + chainLinkHeight, 10, { chamfer: 0 });
        this.chain.bodies.push(this.chainHand);

        this.chainComposite = Matter.Composites.chain(this.chain, 0, 0.5, 0, -0.5, { length: 0.001 });
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

    actions() {
        const keyHandlers = {
            KeyZ: this.handleChainrail.bind(this)
        };
        document.addEventListener("keyup", event => {
            keyHandlers[event.code]?.();
        });
    }

    controls() {
        this.velocity = 0.1;
        this.maxSpeed = 20;
        this.initSpeedX = 0;
        this.initSpeedY = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.speedX = this.initSpeedX;
        this.speedY = this.initSpeedY;


        const keyHandlers = {
            KeyW: this.turnInRope.bind(this),
            KeyS: this.turnOutRope.bind(this),
            KeyD: this.moveRight.bind(this),
            KeyA: this.moveLeft.bind(this),
            ArrowUp: this.moveUp.bind(this),
            ArrowDown: this.moveDown.bind(this),
            ArrowRight: this.moveRight.bind(this),
            ArrowLeft: this.moveLeft.bind(this),
        };

        const keysDown = new Set();
        document.addEventListener("keydown", event => {
            keysDown.add(event.code);
        });

        document.addEventListener("keyup", event => {
            keysDown.delete(event.code);
        });

        Matter.Events.on(this.engine, "beforeUpdate", () => {

            //this.removeGravity(this.hero);

            [...keysDown].forEach(k => {

                keyHandlers[k]?.();
            });

            if (keysDown.size <= 0) {
                this.speedX = this.speedX - (this.directionX * Math.max(Math.abs(this.speedX * this.velocity), 0));
                this.speedY = this.speedY - (this.directionY * Math.max(Math.abs(this.speedY * this.velocity), 0));
            }
            this.moveHero();
           //this.traceSpeed();
        });

        this.mouse();
    }

    collisions() {
        // an example of using collisionStart event on an engine
        /*Matter.Events.on(this.engine, 'collisionStart', function(event) {
            var pairs = event.pairs;

            // change object colours to show those starting a collision
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (pair.BodyA === this.chainHand) {
                    pair.bodyA.render.fillStyle = '#8888CC';
                    pair.bodyB.render.fillStyle = '#8888CC';
                }
            }
        }).bind(this);*/

        // an example of using collisionActive event on an engine
        //Matter.Events.on(this.engine, 'collisionStart', this.chainHandCollision.bind(this));

        // an example of using collisionEnd event on an engine
        /*Matter.Events.on(this.engine, 'collisionEnd', function(event) {
            var pairs = event.pairs;

            // change object colours to show those ending a collision
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (pair.BodyA === this.chainHand) {
                    pair.bodyA.render.fillStyle = '#CC8888';
                    pair.bodyB.render.fillStyle = '#CC8888';
                }

            }
        }).bind(this);*/
    }

    traceSpeed() {
        console.log({x:this.speedX, y: this.speedY})
    }

    moveUp() {
        this.directionY = -1;
        this.speedY = Math.min(this.velocity * this.directionY, this.maxSpeed);// = this.speedY + (this.directionY * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveDown() {
        this.directionY = 1;
        this.speedY = Math.min(this.velocity * this.directionY, this.maxSpeed);//this.speedY + (this.directionY * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveLeft() {
        this.directionX = -1;
        this.speedX = Math.min(this.velocity * this.directionX, this.maxSpeed);//this.speedX + (this.directionX * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    moveRight() {
        this.directionX = 1;
        this.speedX = Math.min(this.velocity * this.directionX, this.maxSpeed);//this.speedX + (this.directionX * Math.min((this.velocity * this.maxSpeed), this.maxSpeed));
    }

    turnInRope() {
        this.chainMainConstraint.length -= this.motorTorque;
    }
    turnOutRope() {
        this.chainMainConstraint.length += this.motorTorque;
    }

    handleChainrail() {

        if (this.chainRail.visibilityState === "hidden") {
            this.chainRail.visibilityState = "showed";
            Matter.Composite.add(this.world, this.chainRail);
        }
        else if (this.chainRail.visibilityState === "showed") {
            this.chainRail.visibilityState = "hidden";
            Matter.World.remove(this.world, this.chainRail);
        }
    }

    //check this : https://brm.io/matter-js/demo/#sensors
    chainHandCollision(event) {
        var pairs = event.pairs;

        // change object colours to show those in an active collision (e.g. resting contact)
        /*for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if (pair.BodyA === this.chainHand) {
                pair.bodyA.render.fillStyle = '#88CC88';
                pair.bodyB.render.fillStyle = '#88CC88';
            }
        }*/
        console.log(pairs);
    }

    removeGravity(body) {
        Matter.Body.applyForce(body, body.position, {
            x: -this.gravity.x * this.gravity.scale * body.mass,
            y: -this.gravity.y * this.gravity.scale * body.mass
        });
    }

    /**
     * Matter.Body.applyForce(boxA, {
      x: boxA.position.x,
      y: boxA.position.y
    }, {x: -0.02, y: 0})
     */

    moveHero() {
        //Matter.Body.setVelocity(this.hero, {x:this.speedX, y:this.speedY});
        Matter.Body.applyForce(this.hero, {
            x: this.hero.position.x,
            y: this.hero.position.y
        }, {x:this.speedX, y:this.speedY})
        //Matter.Body.translate(this.hero, {x:this.speedX, y:this.speedY});
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

