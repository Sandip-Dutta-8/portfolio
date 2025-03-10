import { FaBookReader, FaLink, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';
import skills from '../../../public/skills.json'
import { Link } from "react-router-dom";

const Resume = () => {

  return (
    <section>
      <header>
          <h2 className="h2 article-title resume">Resume <a href="https://drive.google.com/drive/u/0/folders/1mDGUBiK3aDtQ-mR4tLw_Rkm2xqIZGJfW" target="_blank"><FaLink style={{color: "white"}}/></a></h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Tantipara N.K. Vidyaniketan"
            date="2014 - 2022"
          />
          <TimelineItem
            title="Government College of Engineering and Textile Technology, Berhampore"
            date="2022 - 2026"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Development Lead at GDG - On Campus GCETTB"
            date="2024 — Present"
            description="Lead and conducted web development sessions for students, covering topics like HTML, CSS, JavaScript, ReactJS and other modern web technologies."
          />
          <TimelineItem
            title="Freelance at SequenceMaster"
            date="March 2024 - April 2024"
            description=" Developed and maintained the SequenceMaster website, enhancing functionality and user experience using ReactJS, SCSS and Tailwind CSS also worked on the SequenceMaster mobile app using React Native, ensuring smooth performance and a responsive UI"
          />
          <TimelineItem
            title="Internship at CodeNexus"
            date="Oct 2023 - Dec 2023"
            description="Developed and maintained the CodeNexus website, enhancing functionality and user experience."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {
            skills.map((skill) => (
              <SkillItem title={skill.title} key={skill.id} />
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Resume;
