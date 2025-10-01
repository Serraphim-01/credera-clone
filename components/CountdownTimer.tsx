'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  eventDate: string; // ISO date string
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const eventTime = new Date(eventDate).getTime();
      const currentTime = new Date().getTime();
      const difference = eventTime - currentTime;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const totalSeconds = Math.floor(difference / 1000);

      return { days, hours, minutes, seconds, totalSeconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [eventDate]);

  const getDisplayText = () => {
    if (timeLeft.totalSeconds <= 0) {
      return 'Event has started';
    }

    if (timeLeft.days > 0) {
      return `${timeLeft.days} day${timeLeft.days !== 1 ? 's' : ''} left`;
    } else if (timeLeft.hours > 0) {
      return `${timeLeft.hours} hour${timeLeft.hours !== 1 ? 's' : ''} left`;
    } else if (timeLeft.minutes > 0) {
      return `${timeLeft.minutes} minute${timeLeft.minutes !== 1 ? 's' : ''} left`;
    } else {
      return `${timeLeft.seconds} second${timeLeft.seconds !== 1 ? 's' : ''} left`;
    }
  };

  const getDisplayColor = () => {
    if (timeLeft.totalSeconds <= 0) {
      return 'text-green-600 bg-green-100';
    } else if (timeLeft.days === 0 && timeLeft.hours < 24) {
      return 'text-red-600 bg-red-100';
    } else if (timeLeft.days < 7) {
      return 'text-orange-600 bg-orange-100';
    } else {
      return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-lg font-bold text-lg ${getDisplayColor()} ${className}`}>
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      {getDisplayText()}
    </div>
  );
};

export default CountdownTimer;