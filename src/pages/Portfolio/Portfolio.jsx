import  { useState, useEffect } from 'react';
import ProjectCard from './project-card';

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Load project data from projects.json
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {['All',  'Web development', 'Applications'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Portfolio items */}
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              image={project.image}
              category={project.category}
              description={project.description}
              link={project.link}
            />
          ))}
        </ul>
      </section>

      <div className='github-button'>
          <button className='git-button'><a href="https://github.com/sandip-dutta-8">More</a></button>
      </div>
      
    </section>
  );
};

export default Portfolio;
