import React from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import "./HomePage.css";


const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-content center">
            <h1>Welcome to AIC Ziwani</h1>
            <p className="lead hero-lead">
              Come as you are, grow in faith, and serve with love. Join our community of believers as we worship together and make disciples for Christ.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Join Us Sunday</button>
              <button className="btn btn-outline">Watch Online</button>
            </div>
          </div>
        </div>
      </section>


      {/* Quick Info */}
      <section className="section quick-info">
        <div className="container">
          <div className="grid-3">
            <div className="card pad center">
              <div className="icon-circle"><Clock /></div>
              <h3>Service Times</h3>
              <p className="muted">
                Sunday: 9:00 AM & 11:00 AM<br />Wednesday: 7:00 PM<br />Friday: 6:00 PM
              </p>
            </div>
            <div className="card pad center">
              <div className="icon-circle"><MapPin /></div>
              <h3>Location</h3>
              <p className="muted">Ziwani Estate<br />Juja, Kiambu County<br />Kenya</p>
            </div>
            <div className="card pad center">
              <div className="icon-circle"><Phone /></div>
              <h3>Contact</h3>
              <p className="muted">+254 700 000 000<br />info@aicziwani.org<br />Follow us on social media</p>
            </div>
          </div>
        </div>
      </section>
      {/* Announcements */}
      <section className="section announcements">
        <div className="container">
          <div className="center section-head">
            <h2>Latest Announcements</h2>
            <div className="badge-line" />
          </div>
          <div className="grid-3 cards">
            <article className="announcement card pad">
              <h3>Youth Conference 2025</h3>
              <p className="muted small">Join us for an inspiring time of worship, teaching, and fellowship with young people from across the region.</p>
              <p className="accent">September 5-7, 2025</p>
            </article>
            <article className="announcement card pad">
              <h3>New Members Class</h3>
              <p className="muted small">Interested in becoming a member? Join our newcomers class every first Sunday of the month.</p>
              <p className="accent">Every First Sunday</p>
            </article>
            <article className="announcement card pad">
              <h3>Community Outreach</h3>
              <p className="muted small">Join us as we serve our community through food distribution and medical camp this Saturday.</p>
              <p className="accent">Every Saturday</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;