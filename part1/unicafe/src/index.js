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

      <h2>Statistics</h2>
      Good: {good}<br/>
      Neutral: {neutral}<br/>
      Bad: {bad}<br/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
