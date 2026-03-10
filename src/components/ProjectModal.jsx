function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          x
        </button>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectModal;
