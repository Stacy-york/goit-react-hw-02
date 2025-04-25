const Feedback = ({ stats, positiveFeedbackPercentage }) => {
    const total = stats.good + stats.neutral + stats.bad;


  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;