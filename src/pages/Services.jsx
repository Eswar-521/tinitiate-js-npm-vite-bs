import React from "react";
import "../styles/Services.css";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="services-page">
      <div className="container services-container">
        <h2 className="services-title">
          MY <span>SERVICES</span>
        </h2>
        <p className="services-subtitle">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum standard dummy text.
        </p>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
