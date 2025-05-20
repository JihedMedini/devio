'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'button';
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

const Skeleton = ({
  className,
  variant = 'default',
  width,
  height,
  animated = true,
  ...props
}: SkeletonProps) => {
  const style = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  };

  const variants = {
    default: "h-4 w-full rounded-md bg-gray-200",
    card: "h-48 w-full rounded-lg bg-gray-200",
    text: "h-4 w-3/4 rounded-md bg-gray-200",
    avatar: "h-12 w-12 rounded-full bg-gray-200",
    button: "h-10 w-20 rounded-md bg-gray-200",
  };

  const baseClass = variants[variant] || variants.default;
  
  if (animated) {
    return (
      <motion.div
        className={cn(baseClass, className)}
        style={style}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn(baseClass, className)}
      style={style}
      {...props}
    />
  );
};

export { Skeleton }; 