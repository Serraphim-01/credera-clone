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
  const [shouldHide, setShouldHide] = useState(false);

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

    const checkIfShouldHide = () => {
      const eventTime = new Date(eventDate).getTime();
      const currentTime = new Date().getTime();
      const timeSinceEventEnded = currentTime - eventTime;
      
      // Hide if event ended more than 2 days ago (2 days in milliseconds)
      const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
      if (timeSinceEventEnded > twoDaysInMs) {
        setShouldHide(true);
        return true;
      }
      return false;
    };

    const timer = setInterval(() => {
      if (checkIfShouldHide()) {
        clearInterval(timer);
        return;
      }
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial checks
    if (checkIfShouldHide()) {
      clearInterval(timer);
    } else {
      setTimeLeft(calculateTimeLeft());
    }

    return () => clearInterval(timer);
  }, [eventDate]);

  const getDisplayText = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const timeSinceEventStarted = currentTime - eventTime;

    // Event ended more than 2 days ago - component should be hidden
    if (shouldHide) {
      return null;
    }

    // Event is in the future
    if (timeLeft.totalSeconds > 0) {
      // More than 2 days: show days
      if (timeLeft.days > 2) {
        return `${timeLeft.days}d`;
      }
      // 2 days or less but more than 0 days: show total hours
      else if (timeLeft.days > 0) {
        const totalHours = (timeLeft.days * 24) + timeLeft.hours;
        return `${totalHours}h`;
      }
      // Less than 1 day but more than 100 minutes: show hours
      else if (timeLeft.hours > 0 && (timeLeft.hours * 60 + timeLeft.minutes) > 100) {
        return `${timeLeft.hours}h`;
      }
      // Less than 100 minutes but more than 0 minutes: show minutes and seconds
      else if (timeLeft.minutes > 0 || timeLeft.seconds > 0) {
        return `${timeLeft.minutes}m ${timeLeft.seconds}s`;
      }
    }
    // Event is currently happening (within 2 days of start time)
    else if (timeSinceEventStarted <= (2 * 24 * 60 * 60 * 1000)) {
      return 'Started';
    }
    // Event ended (more than 2 days ago but less than 4 days ago - component will hide after 4 days)
    else {
      return 'Ended';
    }

    return 'Starting';
  };

  const getDisplayColor = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const timeSinceEventStarted = currentTime - eventTime;

    if (timeLeft.totalSeconds > 0) {
      if (timeLeft.days > 2) {
        return 'text-blue-600 bg-blue-100';
      } else if (timeLeft.days > 0) {
        return 'text-orange-600 bg-orange-100';
      } else {
        return 'text-red-600 bg-red-100';
      }
    } else if (timeSinceEventStarted <= (2 * 24 * 60 * 60 * 1000)) {
      return 'text-green-600 bg-green-100';
    } else {
      return 'text-gray-600 bg-gray-100';
    }
  };

  // Don't render anything if component should be hidden
  if (shouldHide) {
    return null;
  }

  const displayText = getDisplayText();
  
  // Don't render if no display text (shouldn't happen, but safety check)
  if (!displayText) {
    return null;
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full font-semibold text-xs ${getDisplayColor()} ${className}`}>
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
      {displayText}
    </div>
  );
};

export default CountdownTimer;