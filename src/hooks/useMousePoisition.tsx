import { useState } from 'react';
import { useEffect } from 'react';

export const useMousePoisition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Seetting up event');
    const handleMouseMove: (this: Document, ev: MouseEvent) => any = e => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('Removing event');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};
