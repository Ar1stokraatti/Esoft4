import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer-container">
      <div className="countdown-timer">
        <span>Осталось: </span>{timer}
      </div>
    </div>
  );
};
