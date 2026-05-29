import React, { useState } from "react";
import { BookOpen, Calendar, Heart, Landmark, Users } from "lucide-react";
import "./AboutPage.css";

const missionVision = [
  {
    id: "mission",
    title: "Our Mission",
    icon: Heart,
    body: "To make disciples of Jesus Christ who worship passionately, live authentically, and serve sacrificially. We are committed to spreading the Gospel through word and deed, building strong families, and transforming our community through the power of God's love."
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: BookOpen,
    body: "To be a thriving church community that reflects the love of Christ, where people experience authentic transformation, discover their God-given purpose, and are equipped to make a positive impact in Ziwani and beyond."
  }
];

const historyMoments = [
  {
    id: "land",
    year: "1955",
    title: "Land Set Apart for Worship",
    body: "Members working with the Nairobi City Council requested a plot for a permanent AIC church in Ziwani. The council granted land in what had been a water-filled area known as Ziwa."
  },
  {
    id: "support",
    year: "1955",
    title: "Churchwide Support Mobilized",
    body: "Rev. Kioko shared the news with the Ukambani Region, and support quickly grew. AIC regions across Kenya and missionaries were invited to contribute so the new church could be built."
  },
  {
    id: "building",
    year: "1955-1958",
    title: "Construction and Dedication",
    body: "The building work was awarded to Mr. David Wanguhu of AIC Kijabe. The foundation stone was laid in 1955, the church building was opened in August 1958, and the sanctuary was dedicated in December 1958."
  },
  {
    id: "legacy",
    year: "Today",
    title: "A Continuing Testimony",
    body: "AIC Ziwani continues to build on that foundation by welcoming families, teaching the Word faithfully, and serving the surrounding community with the love of Christ."
  }
];

const values = [
  {
    id: "truth",
    title: "Biblical Truth",
    icon: BookOpen,
    summary: "We believe in the authority and sufficiency of God's Word for all matters of faith and life.",
    detail: "Scripture shapes our preaching, our discipleship, our families, and the way we make decisions as a church."
  },
  {
    id: "love",
    title: "Authentic Love",
    icon: Heart,
    summary: "We strive to love God wholeheartedly and love our neighbors as ourselves.",
    detail: "We want people to experience kindness, grace, hospitality, and genuine care from the moment they arrive."
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    summary: "We value genuine relationships and believe in the power of doing life together.",
    detail: "Church life is not only about attending a service. It is about belonging, praying together, and growing side by side."
  },
  {
    id: "service",
    title: "Service",
    icon: Calendar,
    summary: "We are called to serve others as Christ served us, both within and beyond our church.",
    detail: "We seek practical ways to care for people, strengthen families, and bless the wider community."
  }
];

const AboutPage = () => {
  const [activeHistory, setActiveHistory] = useState(historyMoments[0]);
  const [activeValue, setActiveValue] = useState(values[0]);
  const ActiveValueIcon = activeValue.icon;
  const renderHistoryDetail = (item, className = "") => (
    <div className={`history-detail ${className}`.trim()}>
      <div className="history-badge">
        <Landmark size={18} />
        <span>{item.year}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="muted">{item.body}</p>
      <p className="history-note">
        The story of AIC Ziwani continues through worship, discipleship, and faithful service to families in the community.
      </p>
    </div>
  );

  return (
    <section className="section">
      <div className="container">
        <div className="center about-head">
          <h1>About AIC Ziwani</h1>
          <div className="badge-line" />
          <p className="about-lead">
            We are a community of believers committed to knowing Christ, growing in faith, and serving others with the love of Jesus.
          </p>
        </div>

        <div className="grid-2 mission-vision">
          {missionVision.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="mv-card card pad">
                <div className="mv-title">
                  <Icon className="mv-icon" />
                  <h2>{item.title}</h2>
                </div>
                <p className="muted">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="history card pad">
          <div className="history-head center">
            <h2>Our History</h2>
            <p className="section-copy">
              Explore key moments in the journey of AIC Ziwani and see how God has shaped this church over the years.
            </p>
          </div>
          <div className="history-layout">
            <div className="history-nav" aria-label="AIC Ziwani history timeline">
              {historyMoments.map((item) => {
                const isActive = activeHistory.id === item.id;

                return (
                  <div key={item.id} className="history-step-group">
                    <button
                      type="button"
                      className={`history-step ${isActive ? "active" : ""}`}
                      onClick={() => setActiveHistory(item)}
                      aria-expanded={isActive}
                    >
                      <span className="history-year">{item.year}</span>
                      <span className="history-step-title">{item.title}</span>
                    </button>
                    {isActive ? renderHistoryDetail(item, "history-detail-inline") : null}
                  </div>
                );
              })}
            </div>
            {renderHistoryDetail(activeHistory, "history-detail-desktop")}
          </div>
        </div>

        <div className="values">
          <div className="center values-head">
            <h2>Our Core Values</h2>
            <p className="section-copy">
              Hover or select a value to see what it means in the life of our church community.
            </p>
          </div>
          <div className="value-spotlight card pad">
            <div className="value-spotlight-head">
              <div className="icon-circle">
                <ActiveValueIcon />
              </div>
              <div>
                <h3>{activeValue.title}</h3>
                <p className="muted">{activeValue.detail}</p>
              </div>
            </div>
          </div>
          <div className="grid-4 value-grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.id}
                  className={`value-item center ${activeValue.id === value.id ? "active" : ""}`}
                  onMouseEnter={() => setActiveValue(value)}
                  onFocus={() => setActiveValue(value)}
                  onClick={() => setActiveValue(value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveValue(value);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="icon-circle"><Icon /></div>
                  <h3>{value.title}</h3>
                  <p className="muted small">{value.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;