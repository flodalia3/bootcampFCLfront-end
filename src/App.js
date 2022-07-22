//import bookImg from './books.jpeg';
import './App.css';
//import {useState} from 'react'; //hook
import axios from 'axios';
import React, { useState } from "react";

function App() {
  const [editions, setEditions] = useState([]);
  const loadData = () => {
    const p = axios.get("http://localhost:8080/edition"); //cambia url
    p.then((res) => setEditions(res.data));
  };

  return (

    <div class="grid-container">
      <div class="grid-item">id: 1 startDate: 23/09/2022 endDate: 15/10/2022 courseName: classroomName:</div>
      <div class="grid-item">id: 1 startDate: 23/09/2022 endDate: 15/10/2022 courseName: classroomName:</div>
      <div class="grid-item">id: 1 startDate: 23/09/2022 endDate: 15/10/2022 courseName: classroomName:</div>
      <div class="grid-item">id: 1 startDate: 23/09/2022 endDate: 15/10/2022 courseName: classroomName:</div>
    </div>
    {
      courses.map( (e) => {
        return (
          <div key={e.id} class="grid-item">
              id: {e.id} startDate: {e.startDate} endDate: {e.endDate} 
              courseId: {e.courseId} courseName: {e.courseName} 
              classroomId: {e.classroomId} classroomName: {e.classroomName}
          </div>
        )
      }
      )
    }
    
  );
}



export default App;
