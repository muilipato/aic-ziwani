export default function VideoSection() {
    return (
      <section className="video-section">
        <div className="gallery-header">
          <h2>Take a Look at How Our 70 Year Celebrations Went</h2>
  
          <p>
            A glimpse into the celebration, worship and moments shared
            during our 70 year anniversary.
          </p>
        </div>
  
        <div className="video-wrapper">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAICZiwaniKenya%2Fvideos%2F2579508255764171%2F&show_text=false&width=560&t=0"
            title="AIC Ziwani 70 Year Celebrations"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    );
  }