
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        showAngleIndicator: true,
        //showCollisions: true,
        //showVelocity: true
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

var group = Body.nextGroup(true);

// add bodies
var rows = 10,
    yy = 600 - 25 - 40 * rows;

var stack = Composites.stack(400, yy, 3, rows, 0, 0, function(x, y) {
    return Bodies.rectangle(x, y, 40, 40);
});

var startX = 200, startY = 50, lastX = startX, lastY = startY,
    chainLinkHeight=30,
    chainLinkWidth=5,
    chainBridge = { x: 0, y: 0 };

Composite.add(world, [
    stack,
    // walls
    //Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    //Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    //Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    //Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);

var chainMaster = Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });
chainMaster.isStatic = true;

var chainHand = Bodies.circle(startX, startY, 30, { collisionFilter: { group: group }, chamfer: 0 });

var craneChain = Composites.stack(startX+15, startY+15, 15, 1, 1, 1, function(x, y) {
    lastX = x; lastY = y;
    return Bodies.rectangle(x - 30, y -30, chainLinkHeight, chainLinkWidth, { collisionFilter: { group: group }, chamfer: 0.1, stiffness: 1 });
});


var chainAnchor = craneChain.bodies[0];
craneChain.bodies.push(chainHand);

var chainComposite = Composites.chain(craneChain, 0.4, 0, -0.4, 0, { stiffness: 1, length: 0 });
var chainAnchorConstraint = Constraint.create({
    bodyA: chainMaster,
    bodyB: chainAnchor,
    stiffness: 1,
    length: 0,
});


group = Body.nextGroup(true);

Composite.add(world, [
    chainMaster,
    craneChain,
    chainAnchorConstraint,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
]);

var group = Body.nextGroup(true);


// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.1,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);



const speed = 3;
const muscular = 2;
const rotation = 0.01;

const keyHandlers = {
    KeyQ: () => {
        //Composite.translate(crane, {x:0, y: -muscular});
        Body.rotate(chainMaster, rotation);

    },
    KeyE: () => {
        //Composite.translate(crane, {x:0, y: -muscular});
        Body.rotate(chainMaster, -rotation);

    },
    KeyW: () => {
        //Composite.translate(crane, {x:0, y: -muscular});
        Body.translate(chainMaster, {x:0, y: -muscular});

    },
    KeyS: () => {
        //Composite.translate(crane, {x:0, y:muscular});
        Body.translate(chainMaster, {x:0, y:muscular});

    },
    KeyD: () => {
        //Composite.translate(crane, {x:speed, y: 0});
        Body.translate(chainMaster, {x:speed, y: 0});
    },
    KeyA: () => {
        //Composite.translate(crane, {x:-speed, y:0});
        Body.translate(chainMaster, {x:-speed, y:0});
    },
};
const keysDown = new Set();
document.addEventListener("keydown", event => {
    keysDown.add(event.code);
});
document.addEventListener("keyup", event => {
    keysDown.delete(event.code);
});

Matter.Events.on(engine, "beforeUpdate", event => {
    [...keysDown].forEach(k => {
        keyHandlers[k]?.();
    });
});

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});