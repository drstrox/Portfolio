import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const MatterBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { Engine, Render, World, Bodies, Mouse, Events, Runner, Common } = Matter;

    const engine = Engine.create();
    const runner = Runner.create();

    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'rgb(240,240,240)'
      }
    });

    const world = engine.world;
    world.gravity.scale = 0;

    // Create attractor body
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(render.options.width / 4, render.options.height / 4) / 2,
      {
        render: {
          fillStyle: 'rgb(240,240,240)',
          strokeStyle: '#969259',
          lineWidth: 0
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6
              };
            }
          ]
        }
      }
    );

    World.add(world, attractiveBody);

    // Add bodies
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let polygonNumber = Common.random(3, 6);
      
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 80,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: '#FFFFFF',
          strokeStyle: '#DDDDDD',
          lineWidth: 2
        }
      });
      World.add(world, body);

      // Add circles
      ['#FF2D6A', '#4267F8', 'rgb(240,240,240)'].forEach((color, index) => {
        const circle = Bodies.circle(x, y, Common.random(2, 8 + index * 12), {
          mass: 0.1 * (index + 1),
          friction: 0,
          frictionAir: 0.01 * (index + 1),
          render: {
            fillStyle: Common.random() > 0.3 ? color : 'rgb(240,240,240)',
            strokeStyle: index === 0 ? '#E9202E' : (index === 1 ? '#3257E8' : '#FFFFFF'),
            lineWidth: 2 + index * 1
          }
        });
        World.add(world, circle);
      });
    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function () {
      if (!mouse.position.x) return;
      Matter.Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Body.setPosition(attractiveBody, {
        x: render.canvas.width / 2,
        y: render.canvas.height / 2
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      Runner.stop(runner);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatterBackground;