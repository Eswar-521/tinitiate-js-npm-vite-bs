const Services = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right,rgb(255, 236, 95),rgb(151, 254, 123))",
        minHeight: "100vh",
        padding: "2rem",
        color: "#2c3e50",
      }}
    >
      <h2 className="mb-5 text-center fw-bold">Our Services</h2>

      <div className="row">
        {[
          {
            title: "Web Development",
            description:
              "Responsive, scalable web applications tailored to your business needs.",
          },
          {
            title: "Mobile App Development",
            description:
              "Cross-platform apps for Android and iOS with seamless performance.",
          },
          {
            title: "UI/UX Design",
            description:
              "Elegant, user-friendly interfaces that delight and engage users.",
          },
          {
            title: "Digital Marketing",
            description:
              "SEO, SEM, and social media strategies to grow your digital footprint.",
          },
          {
            title: "Cloud Solutions",
            description:
              "Reliable and scalable cloud deployments using AWS, Azure, and GCP.",
          },
        ].map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div
              className="p-4 rounded shadow-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: "1px solid rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h4 className="fw-semibold">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
