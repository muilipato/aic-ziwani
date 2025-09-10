import React from "react";
import { Heart, BookOpen, Users, Calendar } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="center about-head">
          <h1>About AIC Ziwani</h1>
          <div className="badge-line" />
          <p className="lead">We are a community of believers committed to knowing Christ, growing in faith, and serving others with the love of Jesus.</p>
        </div>
        {/* Mission & Vision */}
        <div className="grid-2 mission-vision">
          <div className="mv-card card pad">
            <div className="mv-title"><Heart className="mv-icon" /><h2>Our Mission</h2></div>
            <p className="muted">To make disciples of Jesus Christ who worship passionately, live authentically, and serve sacrificially. We are committed to spreading the Gospel through word and deed, building strong families, and transforming our community through the power of God's love.</p>
          </div>
          <div className="mv-card card pad">
            <div className="mv-title"><BookOpen className="mv-icon" /><h2>Our Vision</h2></div>
            <p className="muted">To be a thriving church community that reflects the love of Christ, where people experience authentic transformation, discover their God-given purpose, and are equipped to make a positive impact in Ziwani and beyond.</p>
          </div>
        </div>


        {/* History */}
        <div className="history card pad">
          <h2 className="center">Our History</h2>
          <div className="prose">
            <p>African Inland Church Ziwani was established in 1995 as part of the broader African Inland Church movement in Kenya. What started as a small gathering of families in Ziwani Estate has grown into a vibrant community of believers from diverse backgrounds.</p>
            <p>Over the years, we have been blessed to witness countless lives transformed through the Gospel, families restored, and young people discovering their calling in Christ. Our church has been actively involved in community development, education support, and poverty alleviation programs.</p>
            <p>Today, we continue to build on this foundation, reaching out to new families moving into Ziwani and surrounding areas, while maintaining our commitment to biblical teaching, authentic worship, and practical Christianity.</p>
          </div>
        </div>
        {/* Values */}
        <div className="values">
          <h2 className="center">Our Core Values</h2>
          <div className="grid-3 value-grid">
            <div className="value-item center">
              <div className="icon-circle"><BookOpen /></div>
              <h3>Biblical Truth</h3>
              <p className="muted small">We believe in the authority and sufficiency of God's Word for all matters of faith and life.</p>
            </div>
            <div className="value-item center">
              <div className="icon-circle"><Heart /></div>
              <h3>Authentic Love</h3>
              <p className="muted small">We strive to love God wholeheartedly and love our neighbors as ourselves.</p>
            </div>
            <div className="value-item center">
              <div className="icon-circle"><Users /></div>
              <h3>Community</h3>
              <p className="muted small">We value genuine relationships and believe in the power of doing life together.</p>
            </div>
            <div className="value-item center">
              <div className="icon-circle"><Calendar /></div>
              <h3>Service</h3>
              <p className="muted small">We are called to serve others as Christ served us, both within and beyond our church.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;