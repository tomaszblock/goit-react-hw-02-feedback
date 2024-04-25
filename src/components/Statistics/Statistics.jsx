import React, { useState } from 'react';

const StatisticTracker = () => {
    const [stats, setStats] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });

  // Funkcja do zwiększania statystyki
  const increaseStat = (type) => {
    setStats((prevStats) => ({
      ...prevStats,
      [type]: prevStats[type] + 1
    }));
  };

  // Funkcja do obliczająca total głosów
  const countTotalFeedback = () => {
return stats.good + stats.neutral + stats.bad
  }

   // Funkcja do obliczająca procent głósów GOOD
   const countPositiveFeedbackPercentage = () => {
    return Math.floor(stats.good / (stats.good + stats.neutral + stats.bad)*100);
      }
  

  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <button onClick={() => increaseStat('good')}>GOOD</button>
        <button onClick={() => increaseStat('neutral')}>NEUTRAL</button>
        <button onClick={() => increaseStat('bad')}>BAD</button>
      </div>
      <h2>Statistics</h2>
      <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
      </div>
    </div>
  );
};

export default StatisticTracker;






