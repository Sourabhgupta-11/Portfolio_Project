import React from "react";

const achievements = [
  {
    title: "HackIndia Spark 4 Hackathon",
    issuer: "KCC College - East NCR Growth Region",
    description:
      "Reached Final Round (Top 25 out of 138 teams). Developed a FactCheck Bot to identify and verify misinformation, including both a browser extension and a web-based platform.",
    file: "/certificates/hackathon-certificate.pdf",
    badge: "Top 25",
    github: "https://github.com/Sourabhgupta-11/jeetenge"
  }
];

const certificates = [
  {
    title: "Frontend Virtual Internship",
    issuer: "Edunet Foundation",
    description:
      "Worked on frontend development using React and modern UI practices.",
    file: "/certificates/frontend-internship.pdf"
  },
  {
    title: "Python Course",
    issuer: "Tutedude",
    description:
      "Completed Python course covering core programming, OOP, OpenCV, automation, networking, and backend development using Django and Flask, along with strong problem-solving skills.",
    file: "/certificates/python-certificate.pdf"
  },
  {
    title: "Graph Camp",
    issuer: "Algo University",
    description:
      "Learned graph algorithms like BFS, DFS, shortest paths, and problem solving.",
    file: "/certificates/graph-camp.pdf"
  }
];

const Certificates = () => {
  return (
    <div className="container my-5">

      {/* 🔥 ACHIEVEMENTS */}
      <h2 className="text-center mb-4">
        <i className="bi bi-trophy-fill text-warning"></i> Achievements
      </h2>

      <div className="row mb-5">
        {achievements.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card border-success shadow h-100">
              <div className="card-body">

                <span className="badge bg-warning text-dark mb-2 me-2">
                  Featured
                </span>

                <span className="badge bg-success mb-2">
                  {item.badge}
                </span>

                <h5 className="card-title mt-2">{item.title}</h5>
                <h6 className="text-muted">{item.issuer}</h6>
                <p>{item.description}</p>

                <div className="d-flex gap-2 mt-3">

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    View Proof
                  </a>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                  )}

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📜 CERTIFICATES */}
      <h2 className="text-center mb-4">
        <i className="bi bi-award-fill text-primary"></i> Certificates
      </h2>

      <div className="row">
        {certificates.map((cert, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                <h6 className="text-muted">{cert.issuer}</h6>
                <p>{cert.description}</p>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Certificates;