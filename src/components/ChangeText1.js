"use client"
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ChangeText1 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    controls.start({
      color: inView ? 'red' : 'black',
    });
  }, [controls, inView]);

  return (
    <div ref={ref} className={`${inView ? 'text-red-400' : 'text-blue-500'} text-7xl font-black mb-4 transition-all duration-1000`}>
      Change my color!
    </div>
  );
};

export default ChangeText1
