import { useState } from "react";


const Contact = () => {

  const [result, setResult] = useState("Send Message");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Send");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something wrong!!");
    }
  };

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58272.54363099881!2d88.21866870480011!3d24.10030057985001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dd5c0281a4d%3A0xcde56981df08cd8!2sBerhampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1734171312519!5m2!1sen!2sin" width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{result}</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
