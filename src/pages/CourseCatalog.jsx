import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import "../styles/CourseCatalog.css";


const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12; // Number of courses displayed per page

  // Array of available images (assuming you have 4 images named course1.png, course2.png, etc.)
  const imagePaths = [
    "/assets/course1.png", 
    "/assets/course2.png", 
    "/assets/course3.png", 
    "/assets/course4.png"
  ];

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

  // Pagination logic
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

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
          {currentCourses.length > 0 ? (
            currentCourses.map((course, index) => (
              <div key={index} className="col-md-4">
                <div className="course-card">
                  <LazyLoad height={200} offset={100}>
                    {/* Dynamically assign images to each course */} 
                    <img
                      src={imagePaths[index % imagePaths.length]}  // Loop through the imagePaths array
                      alt={course.course_name}
                      className="course-image"
                    />
                  </LazyLoad>
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={`page-btn ${currentPage === num + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
