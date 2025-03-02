const services = [
    { title: "Job Placements", description: "Find jobs in Cleaning, Nursing, Security, Construction, and more.", image: "/images/jobs.jpg" },
    { title: "Pre-Departure Training", description: "Get work & cultural orientation for Dubai.", image: "/images/training.jpg" },
    { title: "Visa & Travel Assistance", description: "Guidance for visa applications and travel arrangements.", image: "/images/visa.jpg" },
    { title: "AI-Powered CV Writing", description: "Let AI build a professional CV for your job application.", image: "/images/cv.jpg" }
  ];
  
  function Services() {
    return (
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Services</h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Services;
  