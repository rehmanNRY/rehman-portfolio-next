"use client";
import React, { useState, useEffect } from 'react';

const BallFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    let lastPosition = { x: 0, y: 0 };
    let lastTime = Date.now();

    const handleMouseMove = (event) => {
      const currentTime = Date.now();
      const deltaX = event.clientX - lastPosition.x;
      const deltaY = event.clientY - lastPosition.y;
      const timeDiff = currentTime - lastTime;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const currentSpeed = distance / timeDiff;

      setPosition({ x: event.clientX, y: event.clientY });
      setSpeed(currentSpeed);

      lastPosition = { x: event.clientX, y: event.clientY };
      lastTime = currentTime;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`ball h-[15px] w-[15px] bg-[#FAFAFA] fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scaleX(${1 + speed * 0.1}) scaleY(${1 - speed * 0.05})`,
        transition: `transform 0.1s ease-out`,
      }}
    />
  );
};

export default BallFollower;
