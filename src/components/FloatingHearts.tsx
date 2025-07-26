"use client";

import React, { useState, useEffect } from 'react';

interface Heart {
  id: number;
  style: React.CSSProperties;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const heartCount = 15;

  useEffect(() => {
    const generatedHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 7 + 8}s`,
        fontSize: `${Math.random() * 1.5 + 0.75}rem`,
      },
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <div className="hearts-container" aria-hidden="true">
      {hearts.map(heart => (
        <div 
          key={heart.id} 
          className="heart" 
          style={heart.style}
        >
          &#10084;
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts; 