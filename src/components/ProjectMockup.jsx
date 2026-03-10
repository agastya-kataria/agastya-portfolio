function ProjectMockup({ src, alt }) {
  return (
    <div className="project-mockup">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default ProjectMockup;
