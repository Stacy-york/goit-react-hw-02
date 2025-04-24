const Feedback = ({ stats }) => {
    const total = stats.good + stats.neutral + stats.bad;
    const positivePercentage = total === 0 ? 0 : Math.round((stats.good / total) * 100);

  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;