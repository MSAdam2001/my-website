import React from "react";
import "./Achievements.css";

function Achievements() {
  const stats = [
    { number: "70%", label: "Success Rate" },
    { number: "8.5M", label: "Website Views" },
    { number: "1.7K", label: "Happy Clients" },
    { number: "+28", label: "Projects Completed" },
  ];

  return (
    <section className="achievements">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
