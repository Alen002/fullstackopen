import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setVote] = useState([0, 0, 0, 0, 0, 0]);
  
  const addArray = () => {
  const copy = [...points];

    copy[selected] += 1;
    setVote(copy);

    console.log(copy);    
  };

  const indexOfMaxValue = points.indexOf(Math.max(...points));

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br />
      has {points[selected]} votes<br />
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>next anecdotes</button>
      <button onClick={addArray}>Vote</button>
      <br />
      <h2>Anecdote With Most Votes</h2>
      <p>{anecdotes[indexOfMaxValue]}</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App />,document.getElementById('root'));
