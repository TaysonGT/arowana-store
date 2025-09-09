import React, { type PropsWithChildren } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface CircularMotionProps {
  radius?: number;
  duration?: number;
  size?: number;
  color?: string;
}

const CircularMotion: React.FC<PropsWithChildren<CircularMotionProps>> = ({
  radius = 100,
  duration = 10,
  children
}) => {
  const progress = useMotionValue(0);
  
  const x = useTransform(progress, (value) => {
    return Math.cos(value * 2 * Math.PI) * radius;
  });
  
  const y = useTransform(progress, (value) => {
    return Math.sin(value * 2 * Math.PI) * radius;
  });

  React.useEffect(() => {
    const animation = () => {
      progress.set(progress.get() + 0.0009);
      requestAnimationFrame(animation);
    };
    
    const frameId = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(frameId);
  }, [progress]);

  return (
    <motion.div className='relative bg-red-400'>
      <motion.div
        style={{
          position: 'absolute',
          x,
          y
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default CircularMotion;