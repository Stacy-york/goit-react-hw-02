import { useState, useEffect } from 'react';
import css from './App.module.css';
import Options from './Options';
import Feedback from './Feedback';
import Description from './Description';
import Notification from './Notification';

export default function App() {
  const savedFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [taskCount, setTaskCount] = useState(savedFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(taskCount));
  }, [taskCount]);

  const totalFeedback = taskCount.good + taskCount.neutral + taskCount.bad;

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

  return (
    <div className={css.container}>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      
      {totalFeedback > 0 ? (
        <Feedback stats={taskCount} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
