import React from "react";
import { Clock, User } from "lucide-react";
import "./MinistriesPage.css"

const ministries = [
    {
      id: 1,
      name: "Youth Ministry",
      description: "Empowering young people to discover their purpose in Christ",
      leader: "Rev. Patrick Odhiambo",
      meetingTime: "Sundays 12:30 PM",
      activities: ["Youth Fellowship", "Sports", "Bible Study", "Community Service"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Women's Ministry",
      description: "Building strong, godly women who impact their families and communities",
      leader: "Mrs. Leah Rutto",
      meetingTime: "Thursdays 2:00 PM",
      activities: ["Bible Study", "Prayer Meetings", "Mentorship", "Community Outreach"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Men's Ministry",
      description: "Raising men of integrity who lead with wisdom and courage",
      leader: "Elder Benson Kanyi",
      meetingTime: "Saturdays 8:00 AM",
      activities: ["Men's Breakfast", "Discipleship", "Marriage Seminars", "Leadership Training"],
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Children's Ministry",
      description: "Nurturing children in the love and knowledge of Jesus Christ",
      leader: "Pst. Elizabeth Mutua",
      meetingTime: "Sundays during service",
      activities: ["Sunday School", "Vacation Bible School", "Children's Church", "Family Events"],
      image: "/api/placeholder/300/200"
    }
  ];
  
const MinistriesPage = () => (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Our Ministries</h1>
          <div className="badge-line" />
          <p>Discover ways to grow, serve, and connect through our various ministry programs designed for all ages and stages of life.</p>
        </div>

        <div className="ministries-grid">
          {ministries.map((ministry) => (
            <div key={ministry.id} className="ministry-card">
              <div className="ministry-image">
                <img src={ministry.image} alt={ministry.name} />
              </div>
              <div className="ministry-content">
                <h3>{ministry.name}</h3>
                <p>{ministry.description}</p>
                <div className="ministry-details">
                  <div className="detail-item">
                    <User className="detail-icon" />
                    <span>{ministry.leader}</span>
                  </div>
                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span>{ministry.meetingTime}</span>
                  </div>
                </div>
                <div className="ministry-activities">
                  <h4>Activities:</h4>
                  <ul>
                    {ministry.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn-outline1">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="get-involved">
          <h2>Get Involved</h2>
          <div className="involvement-content">
            <p>We believe everyone has a place to serve and grow in the body of Christ. Whether you're looking to develop your gifts, serve others, or find community, there's a ministry for you.</p>
            <div className="involvement-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Explore</h3>
                <p>Visit different ministries and see where your heart connects</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Connect</h3>
                <p>Reach out to ministry leaders to learn more and get involved</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Serve</h3>
                <p>Use your gifts and talents to make a difference in people's lives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default MinistriesPage;