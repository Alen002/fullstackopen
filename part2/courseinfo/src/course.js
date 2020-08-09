import React from 'react';


const Course = (props) => {
    const courses = props.courses.parts;
    
      return (
        <>
          {courses.map((value, i) =><p key={i}>{value.name} {value.exercises}</p>)}
          <h4>Total of {courses.reduce((sum, end) => sum + end.exercises, 0)} exercises</h4>
        </>                      
      );  
  };

export default Course;