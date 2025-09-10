import React from "react";
import "./ServicesPage.css"

const Row = ({ title, subtitle, time, duration }) => (
  <div className="svc-row">
    <div className="svc-row-content">
      <h3 className="svc-row-title">{title}</h3>
      <p className="muted svc-row-subtitle">{subtitle}</p>
    </div>
    <div className="svc-row-time">
      <p className="time">{time}</p>
      <p className="muted small">{duration}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <section className="section services-section">
      <div className="container">
        {/* Header */}
        <div className="center svc-head">
          <h1 className="svc-main-title">Our Services</h1>
          <div className="badge-line" />
          <p className="lead svc-lead">
            Join us in worship as we gather to honor God, learn from His Word, 
            and fellowship with one another.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid-2 svc-grid">
          <div className="card pad svc-card border-left">
            <h2 className="svc-card-title">Sunday Services</h2>
            <div className="space">
              <Row 
                title="First Service" 
                subtitle="Traditional worship with hymns and choir" 
                time="9:00 AM" 
                duration="90 minutes" 
              />
              <Row 
                title="Second Service" 
                subtitle="Contemporary worship with praise team" 
                time="11:00 AM" 
                duration="90 minutes" 
              />
            </div>
          </div>
          
          <div className="card pad svc-card border-left">
            <h2 className="svc-card-title">Weekday Services</h2>
            <div className="space">
              <Row 
                title="Midweek Service" 
                subtitle="Bible study and prayer meeting" 
                time="Wed 7:00 PM" 
                duration="60 minutes" 
              />
              <Row 
                title="Prayer Night" 
                subtitle="Intercession and worship" 
                time="Fri 6:00 PM" 
                duration="75 minutes" 
              />
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="special card pad">
          <h2 className="center special-title">Special Services</h2>
          <div className="grid-3 special-grid">
            <div className="card pad center special-item">
              <h3 className="special-item-title">Holy Communion</h3>
              <p className="muted small special-desc">
                We celebrate communion every first Sunday of the month during both services.
              </p>
              <p className="accent special-frequency">First Sunday Monthly</p>
            </div>
            <div className="card pad center special-item">
              <h3 className="special-item-title">Baptism Service</h3>
              <p className="muted small special-desc">
                Baptisms are held quarterly for new believers making their public declaration.
              </p>
              <p className="accent special-frequency">Quarterly</p>
            </div>
            <div className="card pad center special-item">
              <h3 className="special-item-title">Baby Dedication</h3>
              <p className="muted small special-desc">
                Parents can dedicate their children to God during special dedication services.
              </p>
              <p className="accent special-frequency">On Request</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="expect">
          <h2 className="center expect-title">What to Expect</h2>
          <div className="expect-container">
            <div className="grid-2 expect-grid">
              <div className="expect-item pad">
                <h3 className="expect-item-title">Welcoming Environment</h3>
                <p className="muted expect-desc">
                  Our friendly ushers will greet you at the door and help you find a seat. 
                  Don't worry about what to wear - come as you are!
                </p>
              </div>
              <div className="expect-item pad">
                <h3 className="expect-item-title">Children's Program</h3>
                <p className="muted expect-desc">
                  We have age-appropriate children's programs during both Sunday services 
                  with trained teachers and engaging activities.
                </p>
              </div>
              <div className="expect-item pad">
                <h3 className="expect-item-title">Practical Teaching</h3>
                <p className="muted expect-desc">
                  Our messages are biblically based and practically relevant, helping you 
                  apply God's Word to everyday life.
                </p>
              </div>
              <div className="expect-item pad">
                <h3 className="expect-item-title">Connect Opportunities</h3>
                <p className="muted expect-desc">
                  After service, enjoy refreshments and connect with others in our 
                  fellowship hall. Everyone is welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;