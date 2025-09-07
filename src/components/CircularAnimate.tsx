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
      progress.set(progress.get() + 0.002);
      requestAnimationFrame(animation);
    };
    
    const frameId = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(frameId);
  }, [progress]);

  return (
    <div className='h-full relative'>
      <motion.div
        style={{
        //   width: size,
        //   height: size,
          position: 'absolute',
          x,
          y
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CircularMotion;