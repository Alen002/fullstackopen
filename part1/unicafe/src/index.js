import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Button Component
const UserFeedback = ({state, criterion}) => {
  return (
    <>
      <button onClick={state}>{criterion}</button>
    </>
  );
};

// Statistics Component
const Statistics = ({stateGood, stateNeutral, stateBad}) => {
  const resultsAll = stateGood + stateNeutral + stateBad;
  const resultsAverage = (stateGood - stateBad)/(stateGood + stateNeutral + stateBad)
  const resultsPositive = (stateGood/(stateGood + stateNeutral + stateBad)).toFixed(2)*100 + '%'
  return (
    <>
    <h2>Statistics</h2>
      Good: {stateGood}<br/>
      Neutral: {stateNeutral}<br/>
      Bad: {stateBad}<br/>
      <p/>
      All: {resultsAll}<br/>
      Average: {resultsAverage}<br/>
      Positive: {resultsPositive}<br/>
    </>
  );
};

// App Component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <h2>Give Feedback</h2>
      <UserFeedback criterion={'good'} state={() => setGood(good + 1)}/>  
      <UserFeedback criterion={'neutral'} state={() => setNeutral(neutral + 1)}/>  
      <UserFeedback criterion={'bad'} state={() => setBad(bad + 1)}/>  

      <Statistics stateGood={good} stateNeutral={neutral} stateBad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
