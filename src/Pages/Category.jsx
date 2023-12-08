// Category.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Categorybanner from '../Components/Categorybanner/Categorybanner';
import CategorySearch from '../Components/CategorySearch/CategorySearch';
import SearchCard from '../Components/SearchCard/SearchCard';
import CourseDetails from '../Components/CourseDetails/CourseDetails';
import CourseSearch from '../Components/Assets/SearchCourse';

const Category = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);

  const getRandomCourses = () => {
    const shuffled = [...CourseSearch].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setFilteredCourses(getRandomCourses());
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = CourseSearch.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(getRandomCourses());
    }
  };

  return (
    <div>
      <Categorybanner />
      <CategorySearch onSearch={handleSearch} />
      <Routes>
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/' element={<SearchCard courses={filteredCourses} />} />
      </Routes>
    </div>
  );
};

export default Category;


