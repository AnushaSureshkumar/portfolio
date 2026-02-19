import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState(""); 
    const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm(
    "service_jbrjk94",      
    "template_dg5ve95",
    form.current,
    "oCm4QILQS4dOlmbIg"
    ).then(
    () => {
      setStatus("sent");
      form.current.reset();
    },
    () => {
      setStatus("error");
    }
  );
};
    useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
    if(entry.isIntersecting){
    entry.target.classList.add("active");
    } else {
    entry.target.classList.remove("active");
    }
    });
    },{ threshold:0.15 });
    document.querySelectorAll(".reveal").forEach(el=>{
      observer.observe(el);
    });
    return ()=>observer.disconnect();
  },[]);

    return (
    <section id="contact" className="contact">
    <div className="contact-container">
    <h2 className="section-title reveal">
    GET IN <span className="neon-accent">TOUCH</span>
    </h2>
    <div className="contact-wrapper">
    <div className="contact-info reveal">
    <h3>Let's Connect</h3>
    <p>
    Interested in collaborating or building something amazing?
    Feel free to reach out anytime.
    </p>
    <span className="contact-mail">anushasureshkumarrr@gmail.com</span>
    </div>
    <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
    <input
      name="user_name"
      type="text"
      placeholder="Your Name"
      required
            />
      <input
        name="user_email"
        type="email"
        placeholder="Your Email"
        required
            />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        ></textarea>
      <button type="submit" className={`neon-btn ${status}`}>
      {status === "sending" && "Sending..."}
      {status === "sent" && "Message Sent ✓"}
      {status === "error" && "Try Again"}
      {status === "" && "Send Message"}
      </button>
          </form>
          </div>
          </div>
      </section>
  );
}
