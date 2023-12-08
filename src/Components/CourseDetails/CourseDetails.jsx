// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'; // Add your styles here
import CourseSearch from '../Assets/SearchCourse';

const CourseDetails = () => {
  const { id } = useParams();

  const courseDetails = CourseSearch.find((course) => course.id === parseInt(id));

  if (!courseDetails) {
    return <div>Course not found</div>;
  }

  return (
    <div className='course-details-container'>
      <h2>{courseDetails.name}</h2>
      <img src={courseDetails.image} alt={courseDetails.name} />
      <p>{courseDetails.description}</p>
      <p>Roadmap: {courseDetails.roadmap}</p>
      <p>Reviews: {courseDetails.reviews}</p>
      <p>Total Students: {courseDetails.totalStudents}</p>
      <p>Total Course Duration: {courseDetails.totalHours} hours</p>
    </div>
  );
};

export default CourseDetails;

