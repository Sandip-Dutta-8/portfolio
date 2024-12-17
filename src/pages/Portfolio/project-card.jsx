

const ProjectCard = ({ title, category, skills, image, description, link }) => {
  return (
    <li className="blog-post-item">
      <a href={link}>
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
          <div className="blog-meta">
            <p className="blog-category">Techstack : {skills}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default ProjectCard;
