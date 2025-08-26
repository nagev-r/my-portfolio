import "./Projects.css";
import Card from "../components/Card.jsx";
import projects from "../data/projects.json";

function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    // Handle ongoing projects (null endDate) by treating them as the most recent
    const dateA = a.endDate ? new Date(a.endDate) : new Date("9999-12-31");
    const dateB = b.endDate ? new Date(b.endDate) : new Date("9999-12-31");
    return dateB - dateA;
  });
}

export default function Projects() {
  const sortedProjects = sortProjects(projects);
  return (
    <section className="projects-section">
      <header className="section-header">
        <h1 className="section-title">process_my.projects</h1>
        <p className="section-description">
          Here are some of my recent projects.
        </p>
      </header>
      <div>
        {sortedProjects.map((p) => (
          <Card
            key={p.id}
            title={p.name}
            date={`${p.startDate} - ${p.endDate || "Present"}`}
            media={p.media}
            technologies={p.technologies}
            description={p.description}
            
          />
        ))}
      </div>
    </section>
  );
}
