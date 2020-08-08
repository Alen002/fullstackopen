import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
  const courses = props.courses.parts;

    return (
      <>
        {courses.map((value, i) =>
          <p key={i}>{value.name} {value.exercises}</p>
        )}   
      </>
    );  
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

    

  return (
    <>
      <Course courses={course} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

