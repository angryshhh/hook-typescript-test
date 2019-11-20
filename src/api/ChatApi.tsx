import React from 'react';

interface Intervals {
  [id: number]: NodeJS.Timeout;
}

const intervals: Intervals = {};

const subscribe = (id: number, setIsOnline: React.Dispatch<React.SetStateAction<boolean | null>>) => {
  if (!intervals[id]) {
    intervals[id] = setInterval(() => {
      let isOnline = Math.random() * 2 <= 1;
      console.log(id, isOnline);
      setIsOnline(isOnline);
    }, 3000);
  }
}

const unsubscribe = (id: number, setIsOnline: React.Dispatch<React.SetStateAction<boolean | null>>) => {
  clearInterval(intervals[id]);
  setIsOnline(null);
  delete intervals[id];
}

export default {subscribe, unsubscribe};
