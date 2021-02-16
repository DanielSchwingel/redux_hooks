import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CoursesList = () => {
   const courses = useSelector(state => state.courses.data);
   const dispatch = useDispatch();

   function addCourse(){
      dispatch({
         type: 'ADD_COURSE',
         title: 'Elixir'
      })
   }
   return (
      <div>
         <ul>
            {courses.map(course => {
               return(
                  <li key={course}>
                     {course}
                  </li>
               )
            })}
         </ul>
         <button type='button' onClick={addCourse}>Adicionar Curso</button>
      </div>
   )
};


export default CoursesList;