
// import css from './App.module.css'
import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from './Section/Section'
import { Notification } from './Notification/Notification';


export const App = () => {

  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const increaseStat = (type) => {
    setStats((prevStats) => ({
      ...prevStats,
      [type]: prevStats[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    return stats.good + stats.neutral + stats.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.floor((stats.good / total) * 100) : 0;
  };


  return (
    <div 
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
      flexDirection: 'column',
    }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={increaseStat}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? 
        <Statistics
          good={stats.good}
          neutral={stats.neutral}
          bad={stats.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        /> : <Notification title="There is no feedback"/>}
      </Section>
    </div>
  );
};


