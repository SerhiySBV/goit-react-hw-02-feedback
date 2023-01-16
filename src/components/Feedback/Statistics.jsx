import React from 'react';

const Statistics = ({ onGood, onBad, onNeutral }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {onGood}</li>
      <li>Neutral: {onNeutral}</li>
      <li>Bad: {onBad}</li>
      <li>Total: </li>
      <li>Positiv feedback:%</li>
    </ul>
  </div>
);
export default Statistics;
