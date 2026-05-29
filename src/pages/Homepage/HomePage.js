import React, { useState } from "react";
import { CalendarDays, ChevronRight, Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import congreImage from "../../images/congre.jpeg";
import "./HomePage.css";

const weeklySchedule = [
  {
    title: "Sunday Celebration",
    time: "8:00 AM, 10:00 AM & 12:00 PM",
    note: "Worship, teaching, and fellowship for the whole family."
  },
  {
    title: "Midweek Prayer",
    time: "Wednesday at 7:00 PM",
    note: "A quiet space to pray together and be encouraged."
  },
  {
    title: "Friday prayers",
    time: "Friday at 6:00 PM",
    note: "Community, testimony, and spiritual refreshment."
  }
];

const announcements = [
  {
    id: "youth",
    title: "Youth Conference 2025",
    body: "Join us for an inspiring time of worship, teaching, and fellowship with young people from across the region.",
    accent: "September 5-7, 2025",
    tag: "Upcoming Event"
  },
  {
    id: "members",
    title: "New Members Class",
    body: "Interested in becoming a member? Join our newcomers class every first Sunday of the month.",
    accent: "Every First Sunday",
    tag: "Get Connected"
  },
  {
    id: "outreach",
    title: "Community Outreach",
    body: "Join us as we serve our community through food distribution and medical camp this Saturday.",
    accent: "Every Saturday",
    tag: "Serve Together"
  }
];

const HomePage = () => {
  const [activeAnnouncement, setActiveAnnouncement] = useState(announcements[0]);

  return (
    <div>
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${congreImage})` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-kicker">AIC Ziwani Nairobi</div>
              <h1>Welcome to AIC Ziwani</h1>
              <p className="lead hero-lead">
                A life-transforming Center of Jesus Christ.
              </p>
              <div className="hero-highlights" aria-label="Church highlights">
                <span className="hero-highlight">Sunday Worship</span>
                <span className="hero-highlight">Prayer & Teaching</span>
              </div>
              <div className="hero-actions">
                <button className="btn btn-primary">Join Us Sunday</button>
                <button className="btn btn-outline">Watch Online</button>
              </div>
              <p className="hero-note">Ziwani Estate, Starehe, Nairobi County</p>
            </div>

            <aside className="hero-side-card">
              <div className="hero-side-head">
                <CalendarDays size={18} />
                <span>This Week at AIC Ziwani</span>
              </div>
              <div className="hero-side-list">
                {weeklySchedule.map((item) => (
                  <div key={item.title} className="hero-side-item">
                    <div className="hero-side-time">{item.time}</div>
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>


      {/* Quick Info */}
      <section className="section quick-info" id="quick-info">
        <div className="container">
          <div className="center section-head">
            <h2>A Warm Place to Worship and Belong</h2>
            <p className="section-copy">
              Whether you are visiting for the first time or looking for a church home, here are a few quick ways to get oriented.
            </p>
            <div className="badge-line" />
          </div>
          <div className="grid-3">
            <div className="card pad center">
              <div className="icon-circle"><Clock /></div>
              <h3>Service Times</h3>
              <p className="muted">
                Sunday: 8:00 AM & 10:00 AM<br />Wednesday: 7:00 PM<br />Friday: 6:00 PM
              </p>
            </div>
            <div className="card pad center">
              <div className="icon-circle"><MapPin /></div>
              <h3>Location</h3>
              <p className="muted">Ziwani Estate<br />Starehe, Nairobi County<br />Kenya</p>
            </div>
            <div className="card pad center contact-card">
              <div className="icon-circle"><Phone /></div>
              <h3>Contact</h3>
              <p className="muted">
                +254 700 000 000<br />
                info@aicziwani.org<br />
                Follow us on social media
              </p>
              <div className="social-links" aria-label="AIC Ziwani social media links">
                <a
                  className="social-link"
                  href="https://www.facebook.com/AICZiwaniKenya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit AIC Ziwani on Facebook"
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
                <a
                  className="social-link"
                  href="https://www.instagram.com/aicziwanike/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit AIC Ziwani on Instagram"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Announcements */}
      <section className="section announcements" id="announcements">
        <div className="container">
          <div className="center section-head">
            <h2>Latest Announcements</h2>
            <p className="section-copy">
              Explore what is coming up in church life and tap any item to bring it into focus.
            </p>
            <div className="badge-line" />
          </div>
          <div className="announcement-spotlight card pad">
            <div className="announcement-spotlight-meta">
              <span className="announcement-tag">{activeAnnouncement.tag}</span>
              <span className="announcement-date">{activeAnnouncement.accent}</span>
            </div>
            <h3>{activeAnnouncement.title}</h3>
            <p className="muted">{activeAnnouncement.body}</p>
            <button className="announcement-link" type="button">
              Learn More <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid-3 cards">
            {announcements.map((announcement) => (
              <article
                key={announcement.id}
                className={`announcement card pad ${activeAnnouncement.id === announcement.id ? "active" : ""}`}
                onMouseEnter={() => setActiveAnnouncement(announcement)}
                onFocus={() => setActiveAnnouncement(announcement)}
                onClick={() => setActiveAnnouncement(announcement)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveAnnouncement(announcement);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <span className="announcement-mini-tag">{announcement.tag}</span>
                <h3>{announcement.title}</h3>
                <p className="muted small">{announcement.body}</p>
                <p className="accent">{announcement.accent}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;