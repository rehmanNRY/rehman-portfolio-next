"use client"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollOpacityText = ({text}) => {
  const [wordOpacities, setWordOpacities] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const words = text.split(' ');

  useEffect(() => {
    if (!inView) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 1.7; // Make the scroll more sensitive
      const scrollFraction = scrollTop / maxScroll;
      const wordCount = words.length;
      const newWordOpacities = words.map((_, index) => {
        const wordPosition = index / wordCount;
        return Math.min(1, Math.max(0, (scrollFraction - wordPosition) * wordCount * 2)); // Adjust the multiplier
      });
      setWordOpacities(newWordOpacities);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView, words.length]);

  return (
    <span ref={ref}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            opacity: inView ? (wordOpacities[index] || 0) : 0,
            transition: 'opacity 0.2s ease-out',
            marginRight: '17px', // To add space between words
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default ScrollOpacityText;
