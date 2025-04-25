import { useState, useEffect } from 'react';
import css from './App.module.css';
import Options from './Options';
import Feedback from './Feedback';
import Description from './Description';
import Notification from './Notification';

export default function App() {
  const [taskCount, setTaskCount] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = taskCount.good + taskCount.neutral + taskCount.bad;

  const positiveFeedbackPercentage = totalFeedback > 0 
    ? Math.round((taskCount.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (feedbackType) => {
    setTaskCount((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setTaskCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(taskCount));
  }, [taskCount]);

  return (
    <div className={css.container}>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback > 0 ? (
        <Feedback
          stats={taskCount}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}