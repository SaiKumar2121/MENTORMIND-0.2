import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CourseDetails.css' // Ensure this CSS file contains the necessary styles
import CourseSearch from '../Assets/SearchCourse'
import rating_img from '../Assets/rating.png'
import enrolled_students from '../Assets/enrolled.png'
import course_level from '../Assets/courselevel.png'
import course_duration from '../Assets/course_Duration.png'

const CourseDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const courseDetails = CourseSearch.find((course) => course.id === parseInt(id))

  if (!courseDetails) {
    return <div>Course not found</div>
  }

  const handleBackButtonClick = () => {
    navigate('/Category')
  }

  return (
    <div className='course-details-container'>
      <div className='course-content'>
        <h1 className='course-title'>{courseDetails.name}</h1>
        <img src={courseDetails.image} alt={courseDetails.name} className='course-image' />
        <div className='course-description'>
          <p>{courseDetails.description}</p>
        </div>
        <div className='course-roadmap'>
          <p>Roadmap: {courseDetails.roadmap}</p>
        </div>
      </div>
      <div className='course-meta'>
        <div className='course-price-info'>
          <div className='course-price'>${courseDetails.price}</div>
          <div className='course-rating'>
            <img src={rating_img} alt='Rating' />
            <span>{courseDetails.reviews} Stars</span>
          </div>
          <div className='course-enrollment'>
            <img src={enrolled_students} alt='Enrolled Students' />
            <span>{courseDetails.totalStudents} Students</span>
          </div>
          <div className='course-duration'>
            <img src={course_duration} alt='Course Duration' />
            <span>{courseDetails.totalHours} Hours</span>
          </div>
        </div>
        <button onClick={handleBackButtonClick} className='start-button'>Start Now</button>
      </div>
    </div>
  )
}

export default CourseDetails
