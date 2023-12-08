import React, { useState, useEffect } from 'react';
import Categorybanner from '../Components/Categorybanner/Categorybanner';
import CategorySearch from '../Components/CategorySearch/CategorySearch';
import SearchCard from '../Components/SearchCard/SearchCard';
import Courses_list from '../Components/Assets/SearchCourse'; // Path to your course data

const Category = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Function to get 3 random courses
  const getRandomCourses = () => {
    const shuffled = [...Courses_list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setFilteredCourses(getRandomCourses());
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = Courses_list.filter(course => 
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(getRandomCourses()); // Show random courses when search is cleared
    }
  };

  return (
    <div>
        <Categorybanner />
        <CategorySearch onSearch={handleSearch} />
        <SearchCard courses={filteredCourses} />
    </div>
  );
};

export default Category;
