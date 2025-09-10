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
      image: "https://lh3.googleusercontent.com/pw/AP1GczMltftXnfGnPiBtk2mwknNAXhmDuazVHbY1dnB9AqEeM1P6MBbq23TajBObojmCedvHqANc42Id3_4IGPOazCDs4ULWkY99uMvKJ7iaaDFOjHrT5Yb9dUH7aWseyNBfKCU-WLU_LNQg7U-C2DvegKEmBg=w1266-h839-s-no-gm?authuser=0"
    },
    {
      id: 2,
      name: "Women's Ministry",
      description: "Building strong, godly women who impact their families and communities",
      leader: "Mrs. Leah Rutto",
      meetingTime: "Thursdays 2:00 PM",
      activities: ["Bible Study", "Prayer Meetings", "Mentorship", "Community Outreach"],
      image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/504376321_1070707581874728_5690804452682937195_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFKbbonCYpiKNIH1vXQ0a_IxS24PQ1V_z_FLbg9DVX_P34U30z7h2fopFRKW5eoWDZ2GyYKkqK2tqrhlZhw71TT&_nc_ohc=igujQoikUL0Q7kNvwFsXkdp&_nc_oc=AdkocqmGJ8y0xH9hTur8aRnbH43-JCwTbAr7p6jF0oIxTuLMZQVjlzuzrnc2LOEUTds&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=gx_23QDcoKjKlXL6RKtfBQ&oh=00_AfYiqrxrBobCCaqYoiSXfUnOC3XzfPByT4IG282ObcnoJw&oe=68C7BD36"
    },
    {
      id: 3,
      name: "Men's Ministry",
      description: "Raising men of integrity who lead with wisdom and courage",
      leader: "Elder Benson Kanyi",
      meetingTime: "Saturdays 8:00 AM",
      activities: ["Men's Breakfast", "Discipleship", "Marriage Seminars", "Leadership Training"],
      image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/481161320_956502479961906_8014167327048516567_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXeXJRIGpMXjMA5JgBIEkJoXF9jwR_yQyhcX2PBH_JDJBnERQkCwqYVsLxgTkyVyErS377Zv6P3NV49HI0o0lo&_nc_ohc=R2Qrtjfj8zkQ7kNvwH73Z0k&_nc_oc=AdndBZKRq6TNzipl-FnitOIy8clon2UvdNt-ZfmfaWje78u8_S9E1lAB4cYZbSzKDc4&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=Qj8v1ar1t_SFnkXMS6-Kuw&oh=00_Afb4pJQCbwfxVp8inKShu07We2gDPz_lomYRCZx1UcENCw&oe=68C7D756"
    },
    {
      id: 4,
      name: "Children's Ministry",
      description: "Nurturing children in the love and knowledge of Jesus Christ",
      leader: "Pst. Elizabeth Mutua",
      meetingTime: "Sundays during service",
      activities: ["Sunday School", "Vacation Bible School", "Children's Church", "Family Events"],
      image: "https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/536280077_1087054496906703_2996966586455096347_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmhqPQT_t2GlLa014YH8xtFaymVe3nAPYVrKZV7ecA9ltADEHn4G17TcmRPkLlp9S3mFp0LTtE_BHMkUjUBXOP&_nc_ohc=OoJ8n639M20Q7kNvwEKLap0&_nc_oc=AdkZlwl6kWW8jEeQp_86SkH9k2GAb2-iSxPO3hvz95fT9zaa0N3s4jpfUAJ-og7u-Es&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=kX_XsBhzg5dcKJFvN9eoiw&oh=00_AfbUFW8YxImiuOSbQ42z6o90R2WBELLlHhWey0docg0Cow&oe=68C7C9E9"
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