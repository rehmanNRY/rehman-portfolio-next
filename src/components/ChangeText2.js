"use client"
import { useSpring, animated } from '@react-spring/web'; // Updated import
import { useScroll } from '@use-gesture/react';
import { useEffect } from 'react';

const ChangeText2 = () => {
  const [styles, api] = useSpring(() => ({ color: 'black' }));

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const newColor = y > 300 ? 'red' : 'black';
      api.start({ color: newColor });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [api]);

  return (
    <animated.div style={styles}>
      Change my color as you scroll!
    </animated.div>
  );
};

export default ChangeText2;
