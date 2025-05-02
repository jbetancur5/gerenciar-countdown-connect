
import { useEffect, useState } from 'react';

// Define la fecha del evento (22 de mayo de 2025)
const EVENT_DATE = new Date('2025-05-22T09:00:00');

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +EVENT_DATE - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-pill text-white py-4 px-6 rounded-full max-w-2xl mx-auto flex items-center justify-center text-center">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-bold">{timeLeft.days}</span>
          <span className="text-xs md:text-sm">días</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-xs md:text-sm">horas</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-xs md:text-sm">minutos</span>
        </div>
        <span className="text-2xl md:text-4xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-xs md:text-sm">segundos</span>
        </div>
      </div>
      <div className="ml-4 text-xs md:text-sm mt-2">para GERENCIAR 2025</div>
    </div>
  );
};

export default CountdownTimer;
