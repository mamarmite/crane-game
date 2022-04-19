export const defaultBodyOptions = {
    id: Matter.Common.nextId(),
    type: 'body',
    label: 'Body',
    parts: [],
    plugin: {},
    angle: 0,
    vertices: Matter.Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
    position: { x: 0, y: 0 },
    force: { x: 0, y: 0 },
    torque: 0,
    positionImpulse: { x: 0, y: 0 },
    constraintImpulse: { x: 0, y: 0, angle: 0 },
    totalContacts: 0,
    speed: 0,
    angularSpeed: 0,
    velocity: { x: 0, y: 0 },
    angularVelocity: 0,
    isSensor: false,
    isStatic: false,
    isSleeping: false,
    motion: 0,
    sleepThreshold: 60,
    density: 0.001,
    restitution: 0,
    friction: 0.1,
    frictionStatic: 0.5,
    frictionAir: 0.01,
    collisionFilter: {
        category: 0x0001,
        mask: 0xFFFFFFFF,
        group: 0
    },
    slop: 0.05,
    timeScale: 1,
    render: {
        visible: true,
        opacity: 1,
        sprite: {
            xScale: 1,
            yScale: 1,
            xOffset: 0,
            yOffset: 0
        },
        lineWidth: 0
    }
};