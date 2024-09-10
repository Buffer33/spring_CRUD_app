import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import Course from '../course/Course';
import { toast } from 'react-toastify';
import baseUrl from '../api/BootApi';

function AllCourses() {
  
  const toastDisplayed = useRef(false); // useRef to track if the toast has been displayed

  useEffect(() => {
    document.title = "All Courses || Lean coding";
    fetchAllCourses();
  }, []);

  function fetchAllCourses() {
    axios.get(baseUrl).then(
      (response) => {
        setCourses(response.data);

        // Show toast only if it hasn't been displayed yet
        if (!toastDisplayed.current) {
          toast.success("Courses successfully loaded");
          toastDisplayed.current = true; // Set the ref to true to prevent further toasts
        }
      },
      (error) => {
        console.log(error);
        
        if (!toastDisplayed.current) {
          toast.error("Something went wrong!");
          toastDisplayed.current = true; // Set the ref to true to prevent further toasts
        }
      }
    );
  }

  const [courses, setCourses] = useState([]);

  const updateCourse=(id)=>{
    setCourses(courses.filter((c)=>c.id != id));
        }

      
  
        
  return (
    <div>
      {courses.length > 0 ? courses.map((course) => <Course key={course.id} course={course} update={updateCourse} />) : "No Course Available"}
    </div>
  );
}

export default AllCourses;
