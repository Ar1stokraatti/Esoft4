import React, { useState, useEffect } from 'react';

export const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
  
    useEffect(() => {
      window.addEventListener('Изменить размер', handleResize);
      return () => {
        window.removeEventListener('Изменить размер', handleResize);
      };
    }, []);
  
    return (
      <div className="window-size-container">
        <h2 className="window-size-title">Размер текущего окна</h2>
        <p className="window-size-text">Ширина: {windowSize.width}px</p>
        <p className="window-size-text">Высота: {windowSize.height}px</p>
      </div>
    );
  };
  