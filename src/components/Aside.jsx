import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src="/images/my-avatar.png"
              alt="Sandip Dutta"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name">
              Sandip Dutta
            </h1>

            <p className="title">Web Developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:ayandutta2005@gmail.com" className="contact-link">
                  ayandutta2005@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+918617636494" className="contact-link">
                  +91 8617636494
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="03/04/2005">April 3, 2005</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiMayanPyramid/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Berhampore, West Bengal</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.instagram.com/sandip_dutta_37/" className="social-link" target="_blank">
                <ion-icon name="logo-facebook"><AiFillInstagram size={25}/></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.facebook.com/ayan.dutta.37604303" className="social-link" target="_blank">
                <ion-icon name="logo-twitter"><AiFillFacebook size={25}/></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.linkedin.com/in/sandip-dutta-50415b25a/" className="social-link" target="_blank">
                <ion-icon name="logo-instagram"><AiFillLinkedin size={25}/></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/Sandip-Dutta-8" className="social-link" target="_blank">
                <ion-icon name="logo-instagram"><AiFillGithub size={25}/></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  )
}

export default Aside