import React from "react";

const Row = ({ title, subtitle, time, duration }) => (
  <div className="svc-row">
    <div>
      <h3>{title}</h3>
      <p className="muted">{subtitle}</p>
    </div>
    <div className="right">
      <p className="time">{time}</p>
      <p className="muted small">{duration}</p>
    </div>
  </div>
);


const ServicesPage = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="center svc-head">
          <h1>Our Services</h1>
          <div className="badge-line" />
          <p className="lead">Join us in worship as we gather to honor God, learn from His Word, and fellowship with one another.</p>
        </div>
        {/* Main Services */}
        <div className="grid-2 svc-grid">
          <div className="card pad svc-card border-left">
            <h2>Sunday Services</h2>
            <div className="space">
              <Row title="First Service" subtitle="Traditional worship with hymns and choir" time="9:00 AM" duration="90 minutes" />
              <Row title="Second Service" subtitle="Contemporary worship with praise team" time="11:00 AM" duration="90 minutes" />
            </div>
          </div>
          <div className="card pad svc-card border-left">
            <h2>Weekday Services</h2>
            <div className="space">
              <Row title="Midweek Service" subtitle="Bible study and prayer meeting" time="Wed 7:00 PM" duration="60 minutes" />
              <Row title="Prayer Night" subtitle="Intercession and worship" time="Fri 6:00 PM" duration="75 minutes" />
            </div>
          </div>
        </div>


        {/* Special Services */}
        <div className="special card pad">
          <h2 className="center">Special Services</h2>
          <div className="grid-3 special-grid">
            <div className="card pad center">
              <h3>Holy Communion</h3>
              <p className="muted small">We celebrate communion every first Sunday of the month during both services.</p>
              <p className="accent">First Sunday Monthly</p>
            </div>
            <div className="card pad center">
              <h3>Baptism Service</h3>
              <p className="muted small">Baptisms are held quarterly for new believers making their public declaration.</p>
              <p className="accent">Quarterly</p>
            </div>
            <div className="card pad center">
              <h3>Baby Dedication</h3>
              <p className="muted small">Parents can dedicate their children to God during special dedication services.</p>
              <p className="accent">On Request</p>
            </div>
          </div>
        </div>
        {/* What to Expect */}
        <div className="expect">
          <h2 className="center">What to Expect</h2>
          <div className="grid-2 expect-grid">
            <div className="pad">
              <h3>Welcoming Environment</h3>
              <p className="muted">Our friendly ushers will greet you at the door and help you find a seat. Don't worry about what to wear - come as you are!</p>
            </div>
            <div className="pad">
              <h3>Children's Program</h3>
              <p className="muted">We have age-appropriate children's programs during both Sunday services with trained teachers and engaging activities.</p>
            </div>
            <div className="pad">
              <h3>Practical Teaching</h3>
              <p className="muted">Our messages are biblically based and practically relevant, helping you apply God's Word to everyday life.</p>
            </div>
            <div className="pad">
              <h3>Connect Opportunities</h3>
              <p className="muted">After service, enjoy refreshments and connect with others in our fellowship hall. Everyone is welcome!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;