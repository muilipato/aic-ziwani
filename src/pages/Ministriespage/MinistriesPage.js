import React, { useState } from "react";
import { ChevronRight, Clock, Sparkles, User, Users } from "lucide-react";
import "./MinistriesPage.css";

const ministries = [
  {
    id: 1,
    name: "Youth Ministry",
    description: "Empowering young people to discover their purpose in Christ",
    leader: "Rev. Patrick Odhiambo",
    meetingTime: "Sundays 12:30 PM",
    activities: ["Youth Fellowship", "Sports", "Bible Study", "Community Service"],
    image: "https://lh3.googleusercontent.com/pw/AP1GczMltftXnfGnPiBtk2mwknNAXhmDuazVHbY1dnB9AqEeM1P6MBbq23TajBObojmCedvHqANc42Id3_4IGPOazCDs4ULWkY99uMvKJ7iaaDFOjHrT5Yb9dUH7aWseyNBfKCU-WLU_LNQg7U-C2DvegKEmBg=w1266-h839-s-no-gm?authuser=0",
    spotlight: "A space where young people grow in faith, build friendships, and learn to lead with confidence."
  },
  {
    id: 2,
    name: "Women's Ministry",
    description: "Building strong, godly women who impact their families and communities",
    leader: "Mrs. Leah Rutto",
    meetingTime: "Thursdays 2:00 PM",
    activities: ["Bible Study", "Prayer Meetings", "Mentorship", "Community Outreach"],
    image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/504376321_1070707581874728_5690804452682937195_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFKbbonCYpiKNIH1vXQ0a_IxS24PQ1V_z_FLbg9DVX_P34U30z7h2fopFRKW5eoWDZ2GyYKkqK2tqrhlZhw71TT&_nc_ohc=igujQoikUL0Q7kNvwFsXkdp&_nc_oc=AdkocqmGJ8y0xH9hTur8aRnbH43-JCwTbAr7p6jF0oIxTuLMZQVjlzuzrnc2LOEUTds&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=gx_23QDcoKjKlXL6RKtfBQ&oh=00_AfYiqrxrBobCCaqYoiSXfUnOC3XzfPByT4IG282ObcnoJw&oe=68C7BD36",
    spotlight: "Women of faith gathering for prayer, encouragement, discipleship, and practical support for daily life."
  },
  {
    id: 3,
    name: "Men's Ministry",
    description: "Raising men of integrity who lead with wisdom and courage",
    leader: "Elder Benson Kanyi",
    meetingTime: "Saturdays 8:00 AM",
    activities: ["Men's Breakfast", "Discipleship", "Marriage Seminars", "Leadership Training"],
    image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/481161320_956502479961906_8014167327048516567_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXeXJRIGpMXjMA5JgBIEkJoXF9jwR_yQyhcX2PBH_JDJBnERQkCwqYVsLxgTkyVyErS377Zv6P3NV49HI0o0lo&_nc_ohc=R2Qrtjfj8zkQ7kNvwH73Z0k&_nc_oc=AdndBZKRq6TNzipl-FnitOIy8clon2UvdNt-ZfmfaWje78u8_S9E1lAB4cYZbSzKDc4&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=Qj8v1ar1t_SFnkXMS6-Kuw&oh=00_Afb4pJQCbwfxVp8inKShu07We2gDPz_lomYRCZx1UcENCw&oe=68C7D756",
    spotlight: "A ministry helping men grow in prayer, discipleship, family leadership, and Christ-like character."
  },
  {
    id: 4,
    name: "Children's Ministry",
    description: "Nurturing children in the love and knowledge of Jesus Christ",
    leader: "Pst. Elizabeth Mutua",
    meetingTime: "Sundays during service",
    activities: ["Sunday School", "Vacation Bible School", "Children's Church", "Family Events"],
    image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/536280077_1087054496906703_2996966586455096347_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmhqPQT_t2GlLa014YH8xtFaymVe3nAPYVrKZV7ecA9ltADEHn4G17TcmRPkLlp9S3mFp0LTtE_BHMkUjUBXOP&_nc_ohc=OoJ8n639M20Q7kNvwEKLap0&_nc_oc=AdkZlwl6kWW8jEeQp_86SkH9k2GAb2-iSxPO3hvz95fT9zaa0N3s4jpfUAJ-og7u-Es&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=kX_XsBhzg5dcKJFvN9eoiw&oh=00_AfbUFW8YxImiuOSzQ42z6o90R2WBELLlHhWey0docg0Cow&oe=68C7C9E9",
    spotlight: "A joyful environment where children learn about Jesus through stories, worship, and caring teachers."
  }
];

const involvementSteps = [
  {
    id: 1,
    title: "Explore",
    text: "Visit different ministries and see where your heart connects."
  },
  {
    id: 2,
    title: "Connect",
    text: "Reach out to ministry leaders to learn more and get involved."
  },
  {
    id: 3,
    title: "Serve",
    text: "Use your gifts and talents to make a difference in people's lives."
  }
];

const MinistriesPage = () => {
  const [activeMinistry, setActiveMinistry] = useState(ministries[0]);

  return (
    <div className="page-content">
      <div className="container">
        <div className="page-header">
          <h1>Our Ministries</h1>
          <div className="badge-line" />
          <p>
            Discover ways to grow, serve, and connect through our ministry programs designed for all ages and stages of life.
          </p>
        </div>

        <div className="ministry-spotlight card pad">
          <div className="ministry-spotlight-image">
            <img src={activeMinistry.image} alt={activeMinistry.name} />
          </div>
          <div className="ministry-spotlight-content">
            <span className="ministry-pill">
              <Sparkles size={16} />
              Ministry Spotlight
            </span>
            <h2>{activeMinistry.name}</h2>
            <p className="muted ministry-spotlight-copy">{activeMinistry.spotlight}</p>
            <div className="ministry-spotlight-details">
              <div className="detail-item">
                <User className="detail-icon" />
                <span>{activeMinistry.leader}</span>
              </div>
              <div className="detail-item">
                <Clock className="detail-icon" />
                <span>{activeMinistry.meetingTime}</span>
              </div>
            </div>
            <div className="spotlight-activities">
              {activeMinistry.activities.map((activity) => (
                <span key={activity} className="activity-chip">{activity}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="ministries-grid">
          {ministries.map((ministry) => (
            <button
              key={ministry.id}
              type="button"
              className={`ministry-card ${activeMinistry.id === ministry.id ? "active" : ""}`}
              onClick={() => setActiveMinistry(ministry)}
            >
              <div className="ministry-image">
                <img src={ministry.image} alt={ministry.name} />
              </div>
              <div className="ministry-content">
                <h3>{ministry.name}</h3>
                <p className="ministry-description">{ministry.description}</p>
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
                  <h4>Activities</h4>
                  <ul>
                    {ministry.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <span className="btn-outline1">
                  Learn More <ChevronRight size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="get-involved">
          <div className="get-involved-head">
            <h2>Get Involved</h2>
            <p>
              We believe everyone has a place to serve and grow in the body of Christ. Whether you are looking to develop your gifts, serve others, or find community, there is a ministry for you.
            </p>
          </div>
          <div className="get-involved-panel">
            <div className="panel-badge">
              <Users size={16} />
              Join the Journey
            </div>
            <p className="panel-copy">
              Start by exploring one ministry that fits your season of life, then take a simple next step toward connection and service.
            </p>
          </div>
          <div className="involvement-steps">
            {involvementSteps.map((step) => (
              <div key={step.id} className="step">
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;