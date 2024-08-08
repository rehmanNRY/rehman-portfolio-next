"use client";
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BallPool = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Define a function to initialize the scene
    const initializeScene = () => {
      const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Bodies = Matter.Bodies;

      // Create engine
      const engine = Engine.create(),
        world = engine.world;

      // Create renderer
      const render = Render.create({
        element: sceneRef.current,
        engine: engine,
        options: {
          width: window.innerWidth,
          height: window.innerHeight,
          background: 'transparent',
          wireframes: false,
        },
      });

      Render.run(render);

      // Create runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // Add boundaries
      const boundaries = [
        Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, {
          isStatic: true,
          render: { visible: false }, // Hide top boundary
        }),
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
          isStatic: true,
          render: { visible: false }, // Hide bottom boundary
        }),
        Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, {
          isStatic: true,
          render: { visible: false }, // Hide left boundary
        }),
        Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, {
          isStatic: true,
          render: { visible: false }, // Hide right boundary
        }),
      ];

      Composite.add(world, boundaries);

      // Define custom colors
      const colors = ['#fbc531', '#ff7675', '#f1f2f6', '#9c88ff'];

      // Create stack of balls
      const circleRadius = 30; // Radius of all circles (70px diameter)
      const stack = Composites.stack(50, 50, 10, 8, 10, 10, (x, y) => {
        return Bodies.circle(x, y, circleRadius, {
          restitution: 0.8,
          friction: 0.1,
          render: {
            fillStyle: colors[Math.floor(Math.random() * colors.length)],
          },
        });
      });

      // Add initial velocities to spread the balls
      stack.bodies.forEach((body) => {
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 10,
          y: (Math.random() - 0.5) * 10,
        });
      });

      Composite.add(world, stack);

      // Add mouse control
      const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });

      Composite.add(world, mouseConstraint);

      // Keep the mouse in sync with rendering
      render.mouse = mouse;

      // Fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight },
      });

      return () => {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);
        render.canvas.remove();
        render.canvas = null;
        render.context = null;
        render.textures = {};
      };
    };

    // Start initialization after some seconds
    const timeoutId = setTimeout(() => {
      initializeScene();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div ref={sceneRef} id='ballPool' style={{ width: '100vw', height: '100vh' }} />;
};

export default BallPool;
