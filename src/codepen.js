// Matter.js - http://brm.io/matter-js/

var Example = Example || {};

Example.slingshot = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
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
            wireframes: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    var maxRopeLength = 250;

    // add bodies
    var ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true }),
        rockOptions = { density: 0.004 },
        rock1 = Bodies.polygon(0, 0, 8, 20, rockOptions),
        rock2 = Bodies.polygon(100, 0, 8, 20, rockOptions),
        anchor = { x: 0, y: 0 },
        elastic = Constraint.create({
            pointA: anchor,
            bodyB: rock1,
            stiffness: 1
        }),
        rope = Constraint.create({
            bodyA: rock1,
            bodyB: rock2,
            length: maxRopeLength,
            stiffness: 0.000001
        });
    rope.sqrLength = maxRopeLength * maxRopeLength;

    World.add(engine.world, [ground, rock1, rock2, elastic, rope]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0,
                render: { visible: false }
            }
        });

    World.add(world, mouseConstraint);

    Events.on(mouseConstraint, "mousemove", (e)=>{
        anchor.x = e.mouse.position.x;
        anchor.y = e.mouse.position.y;
    })
    render.mouse = mouse;
    console.warn(rock1);

    Events.on(runner, "afterUpdate", ()=>{
        let sqrDistance = (rock2.position.x - rock1.position.x)*(rock2.position.x - rock1.position.x) + (rock2.position.y - rock1.position.y)*(rock2.position.y - rock1.position.y);
        if(sqrDistance > rope.sqrLength) rope.stiffness = 1;
        else rope.stiffness = 0.000001;
    })

    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

// create demo interface
// not required to use Matter.js

MatterTools.Demo.create({
    toolbar: {
        title: 'matter-js',
        url: 'https://github.com/liabru/matter-js',
        reset: true,
        source: false,
        fullscreen: false,
        exampleSelect: false
    },
    preventZoom: true,
    resetOnOrientation: true,
    examples: [
        {
            name: 'Slingshot',
            id: 'slingshot',
            init: Example.slingshot,
            sourceLink: 'https://github.com/liabru/matter-js/blob/master/examples/slingshot.js'
        }
    ]
});