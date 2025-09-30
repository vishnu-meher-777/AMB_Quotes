import React, { useState, useEffect } from 'react';

interface ImageDisplayProps {
  src: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (src) {
      setIsLoading(true);
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoading(false);
    }
  }, [src]);

  return (
    <div className="w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
      {isLoading ? (
        <div className="w-full h-full bg-stone-200 animate-pulse"></div>
      ) : (
        <img
          src={src}
          alt="Inspirational"
          className="w-full h-full object-cover fade-in"
        />
      )}
    </div>
  );
};

export default ImageDisplay;
