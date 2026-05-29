import React, { useState } from "react";
import { Baby, CalendarDays, ChevronRight, Clock3, CupSoda, HandHeart, Sparkles } from "lucide-react";
import "./ServicesPage.css";

const serviceGroups = [
  {
    id: "sunday",
    title: "Sunday Services",
    intro: "Two welcoming worship gatherings designed to help families, young adults, and long-time members grow together in Christ.",
    services: [
      {
        id: "first-service",
        title: "First Service",
        subtitle: "Traditional worship with hymns and choir",
        time: "9:00 AM",
        duration: "90 minutes",
        audience: "A calm and reflective service loved by many families and long-time members."
      },
      {
        id: "second-service",
        title: "Second Service",
        subtitle: "Contemporary worship with praise team",
        time: "11:00 AM",
        duration: "90 minutes",
        audience: "A vibrant gathering with uplifting worship, practical teaching, and warm fellowship."
      },
      {
        id: "third-service",
        title: "Third Service",
        subtitle: "Family-centered worship and fellowship",
        time: "12:00 PM",
        duration: "90 minutes",
        audience: "A welcoming gathering for families and anyone needing a later Sunday service time."
      }
    ]
  },
  {
    id: "weekday",
    title: "Weekday Services",
    intro: "Moments throughout the week to pray, study Scripture, and stay spiritually refreshed together as a church family.",
    services: [
      {
        id: "midweek-service",
        title: "Midweek Service",
        subtitle: "Bible study and prayer meeting",
        time: "Wednesday 7:00 PM",
        duration: "60 minutes",
        audience: "Perfect for deepening your understanding of God's Word in a focused midweek setting."
      },
      {
        id: "prayer-night",
        title: "Prayer Night",
        subtitle: "Intercession and worship",
        time: "Friday 6:00 PM",
        duration: "75 minutes",
        audience: "A peaceful time of worship, prayer, and standing together for one another's needs."
      }
    ]
  }
];

const specialServices = [
  {
    id: "communion",
    title: "Holy Communion",
    frequency: "First Sunday Monthly",
    description: "We celebrate communion every first Sunday of the month during both services.",
    note: "A meaningful moment of remembrance, gratitude, and spiritual reflection for the whole church family.",
    icon: Sparkles
  },
  {
    id: "baptism",
    title: "Baptism Service",
    frequency: "Quarterly",
    description: "Baptisms are held quarterly for new believers making their public declaration.",
    note: "A joyful celebration for those taking a public step of faith and obedience in Christ.",
    icon: HandHeart
  },
  {
    id: "dedication",
    title: "Baby Dedication",
    frequency: "On Request",
    description: "Parents can dedicate their children to God during special dedication services.",
    note: "A special time for families to commit their children to the Lord with prayer and church support.",
    icon: Baby
  }
];

const expectations = [
  {
    title: "Welcoming Environment",
    description: "Our friendly ushers will greet you at the door and help you find a seat. Do not worry about what to wear. Come as you are!"
  },
  {
    title: "Children's Program",
    description: "We have age-appropriate children's programs during both Sunday services with trained teachers and engaging activities."
  },
  {
    title: "Practical Teaching",
    description: "Our messages are biblically based and practically relevant, helping you apply God's Word to everyday life."
  },
  {
    title: "Connect Opportunities",
    description: "After service, enjoy refreshments and connect with others in our fellowship hall. Everyone is welcome."
  }
];

const Row = ({ service, isActive, onSelect }) => (
  <button
    type="button"
    className={`svc-row ${isActive ? "active" : ""}`}
    onClick={() => onSelect(service)}
  >
    <div className="svc-row-content">
      <h3 className="svc-row-title">{service.title}</h3>
      <p className="muted svc-row-subtitle">{service.subtitle}</p>
    </div>
    <div className="svc-row-time">
      <p className="time">{service.time}</p>
      <p className="muted small">{service.duration}</p>
    </div>
  </button>
);

const ServicesPage = () => {
  const defaultService = serviceGroups[0].services[0];
  const [activeService, setActiveService] = useState(defaultService);
  const [activeSpecial, setActiveSpecial] = useState(specialServices[0]);
  const ActiveSpecialIcon = activeSpecial.icon;

  return (
    <section className="section services-section">
      <div className="container">
        <div className="center svc-head">
          <h1 className="svc-main-title">Our Services</h1>
          <div className="badge-line" />
          <p className="lead svc-lead">
            Join us in worship as we gather to honor God, learn from His Word,
            and fellowship with one another.
          </p>
        </div>

        <div className="service-spotlight card pad">
          <div className="service-spotlight-top">
            <span className="service-pill">
              <Clock3 size={16} />
              Service Spotlight
            </span>
            <span className="service-spotlight-time">{activeService.time}</span>
          </div>
          <h2>{activeService.title}</h2>
          <p className="muted service-spotlight-subtitle">{activeService.subtitle}</p>
          <div className="service-spotlight-meta">
            <span>{activeService.duration}</span>
            <span>{activeService.audience}</span>
          </div>
        </div>

        <div className="grid-2 svc-grid">
          {serviceGroups.map((group) => (
            <div key={group.id} className="card pad svc-card border-left">
              <h2 className="svc-card-title">{group.title}</h2>
              <p className="muted svc-card-copy">{group.intro}</p>
              <div className="space">
                {group.services.map((service) => (
                  <Row
                    key={service.id}
                    service={service}
                    isActive={activeService.id === service.id}
                    onSelect={setActiveService}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="special card pad">
          <div className="center special-head">
            <h2 className="special-title">Special Services</h2>
            <p className="section-copy">
              Explore the important moments we share together across the church year and family life.
            </p>
          </div>
          <div className="special-spotlight card pad">
            <div className="special-spotlight-head">
              <div className="icon-circle">
                <ActiveSpecialIcon />
              </div>
              <div>
                <span className="special-pill">
                  <CalendarDays size={16} />
                  {activeSpecial.frequency}
                </span>
                <h3>{activeSpecial.title}</h3>
                <p className="muted">{activeSpecial.note}</p>
              </div>
            </div>
          </div>
          <div className="grid-3 special-grid">
            {specialServices.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`card pad center special-item ${activeSpecial.id === item.id ? "active" : ""}`}
                  onClick={() => setActiveSpecial(item)}
                >
                  <div className="icon-circle"><Icon /></div>
                  <h3 className="special-item-title">{item.title}</h3>
                  <p className="muted small special-desc">{item.description}</p>
                  <p className="accent special-frequency">{item.frequency}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="expect">
          <div className="center expect-head">
            <h2 className="expect-title">What to Expect</h2>
            <p className="section-copy">
              A first visit should feel clear and comfortable. Here is what many people appreciate most when they join us.
            </p>
          </div>
          <div className="expect-container">
            <div className="grid-2 expect-grid">
              {expectations.map((item) => (
                <div key={item.title} className="expect-item pad">
                  <div className="expect-item-top">
                    <div className="expect-icon">
                      <CupSoda size={18} />
                    </div>
                    <h3 className="expect-item-title">{item.title}</h3>
                  </div>
                  <p className="muted expect-desc">{item.description}</p>
                  <button className="expect-link" type="button">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;