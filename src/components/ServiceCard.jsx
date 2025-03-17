import React from "react";
import { FaCode, FaCamera, FaPalette, FaApple, FaVideo, FaSearch, FaPython } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa6";

const services = [
  { icon: <FaCode />, title: "Web Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: <FaDiscourse />, title: "Java", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: <FaPalette />, title: "Web Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: <FaApple />, title: "App Developing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: <FaPython />, title: "Python", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: <FaSearch />, title: "Interview Preparation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

const ServiceCard = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card text-white text-center p-3">
          <div className="icon mb-3">{service.icon}</div>
          <h5 className="fw-bold">{service.title}</h5>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
