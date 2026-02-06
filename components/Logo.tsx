
import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`font-serif-elegant font-bold tracking-tight ${sizes[size]} flex items-center`}>
      <span className="text-white">My</span>
      <span className="text-ken-pink ml-2 italic">Ken</span>
    </div>
  );
};

export default Logo;
