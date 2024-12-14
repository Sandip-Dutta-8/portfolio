/* eslint-disable react/no-unescaped-entities */

import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  }
];


const About = () => {

  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hello, I am Sandip Dutta, a third-year Computer Science and Engineering student at the Government College of Engineering and Textile Technology, Berhampore. With a strong foundation in data structures and algorithms, I am passionate about leveraging my technical expertise to develop innovative solutions in the ever-evolving field of technology.
        </p>

        <p>
          As a proficient full-stack web developer, I specialize in crafting seamless and efficient digital experiences that prioritize precision and excellence. My dedication to continuous learning and problem-solving drives my ability to contribute meaningfully to impactful projects and advancements in the tech industry.
        </p>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>
    </article>
  )
}

export default About