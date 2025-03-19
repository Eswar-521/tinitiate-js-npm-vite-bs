import React, { useState, useEffect } from "react";
import "../styles/CourseCatalog.css";

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error loading courses:", error));
  }, []);

  // Filter courses based on search input
  const filteredCourses = courses.filter(
    (course) =>
      course.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-catalog">
      {/* Search Box */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, price, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Course Grid Section */}
      <div className="container">
        <div className="row">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div key={index} className="col-md-4">
                <div className="course-card">
                  <img src={course.image_path} alt={course.course_name} />
                  <h3>{course.course_name}</h3>
                  <p className="category">{course.course_category}</p>
                  <p className="price">{course.price}</p>
                  <p className="description">{course.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No matching courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
