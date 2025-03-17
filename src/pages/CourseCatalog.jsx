import React from "react";
import "../styles/CourseCatalog.css";
import course1 from "../assets/course1.png"; // Example image
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";

const CourseCatalog = () => {
  return (
    <div className="course-catalog">
      {/* Banner Section */}
      <header className="catalog-banner">
        <h1>Course Catalog</h1>
        <p>Take your skills to the next level</p>
      </header>

      {/* Dropdown Section */}
      <div className="catalog-filter">
        <select className="form-select">
          <option value="">Select a Course Category</option>
          <option value="python course">Python Course</option>
          <option value="web development course">web Development Course</option>
          <option value="Java course">Java Course</option>
        </select>
      </div>

      {/* Course Grid Section */}
      <div className="container">
        <h2 className="text-center mt-4">Most Popular</h2>
        <div className="row">
          {/* Course Card 1 */}
          <div className="col-md-4">
            <div className="course-card">
              <img src={course1} alt="Course 1" />
              <h3>Python Course</h3>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="col-md-4">
            <div className="course-card">
              <img src={course2} alt="Course 2" />
              <h3>Java Course</h3>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="col-md-4">
            <div className="course-card">
              <img src={course3} alt="Course 3" />
              <h3>Web Development</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
