import React from 'react';

// --- SVG Icons (for convenience, normally these would be in separate files) ---

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px', flexShrink: 0 }}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00B8E1"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z" />
  </svg>
);


// --- Main Landing Page Component ---

export default function LucaLandingPage() {
  return (
    <>
      {/* CSS Styles are embedded here for simplicity */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        :root {
          --primary-blue: #00B8E1;
          --dark-text: #333;
          --light-text: #555;
          --bg-color: #fff;
          --grid-color: rgba(229, 231, 235, 0.5);
          --footer-bg: #E3F8FC;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--dark-text);
          background-color: var(--bg-color);
          margin: 0;
          overflow-x: hidden;
          background-image:
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        section {
          padding: 6rem 0;
          text-align: center;
        }

        h1, h2, h3 {
          font-weight: 700;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }

        .section-title::before,
        .section-title::after {
          content: '';
          font-family: monospace;
          font-size: 4rem;
          color: var(--primary-blue);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .section-title::before {
          content: '[';
          left: -2rem;
        }

        .section-title::after {
          content: ']';
          right: -2rem;
        }
        
        .btn {
          background-color: var(--primary-blue);
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
        }
        .logo {
          font-size: 2rem;
          font-weight: 700;
          color: var(--dark-text);
        }
        .nav a {
          margin: 0 1rem;
          text-decoration: none;
          color: var(--light-text);
          font-weight: 600;
        }

        /* Hero Section */
        .hero {
          padding-top: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }
        .hero-text {
          max-width: 50%;
        }
        .hero-text .subtitle {
          color: var(--light-text);
          margin-bottom: 1rem;
        }
        .hero-text h1 {
          font-size: 4rem;
          line-height: 1.2;
          margin-bottom: 2rem;
        }
        .hero-highlight {
          position: relative;
          display: inline-block;
        }
        .hero-highlight.wave span {
          position: relative;
          z-index: 1;
        }
        .hero-highlight.wave::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          height: 15px;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='15' viewBox='0 0 100 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 10.1602C13.4005 5.09345 28.5342 3.14946 43.1979 4.32709C60.2443 5.71454 76.539 10.288 98 13' stroke='%2300B8E1' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: bottom left;
          z-index: 0;
        }
        .hero-highlight.circle {
          border: 3px solid var(--primary-blue);
          border-radius: 50%;
          padding: 0.1rem 0.5rem;
        }
        .hero-image {
          max-width: 45%;
        }
        .hero-image img {
          width: 100%;
          max-width: 500px;
        }

        /* Crew Section */
        .crew-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .crew-card {
          background-color: var(--footer-bg);
          border-radius: 15px;
          padding: 1.5rem;
          width: 250px;
        }
        .crew-card img {
          width: 100%;
          height: 200px;
          object-fit: contain;
          margin-bottom: 1rem;
        }
        .crew-card h3 {
          margin: 0.5rem 0;
        }
        .crew-card p {
          font-size: 0.9rem;
          color: var(--light-text);
          line-height: 1.5;
        }

        /* Leadership Minutes Section */
        .video-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }
        .video-thumbnail {
          width: 100%;
          display: block;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
        }
        .video-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .episode-tag {
          align-self: flex-start;
          background-color: rgba(0,0,0,0.5);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          font-weight: 600;
        }
        .watch-link {
          align-self: flex-end;
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        /* Author Section */
        .author-section {
          background-color: var(--footer-bg);
          border-radius: 20px;
          padding: 4rem;
          display: flex;
          align-items: center;
          gap: 4rem;
          text-align: left;
        }
        .author-info h3 {
          font-size: 2rem;
          margin-top: 0;
        }
        .author-info ul {
          list-style: none;
          padding: 0;
        }
        .author-info li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .author-photo {
          flex-shrink: 0;
          width: 300px;
          height: 350px;
          border-radius: 15px;
          object-fit: cover;
        }

        /* Book Section */
        .book-section img {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          margin-bottom: 2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          border-radius: 5px;
        }

        /* Contact Section */
        .contact-form {
          max-width: 800px;
          margin: 2rem auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          text-align: left;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .form-group input, .form-group textarea {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
        }
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        .contact-section .btn {
          margin-top: 1rem;
          grid-column: 1 / -1;
          justify-self: center;
        }

        /* Footer */
        .footer {
          background-color: var(--primary-blue);
          color: white;
          padding-top: 8rem;
          margin-top: 10rem;
          padding-bottom: 2rem;
          position: relative;
        }
        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          // transform: translateY(-100%);
          overflow: hidden;
          line-height: 0;
          
          // transform: rotate(180deg);
        }
        .footer-wave svg {
          position: relative;
          // transform: translateY(-100%);
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }
        .footer-wave .shape-fill {
          fill: #FFFFFF;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .footer-about, .footer-links, .footer-contact {
          flex: 1;
          min-width: 200px;
        }
        .footer-about .logo {
          color: white;
        }
        .social-icons a {
          color: white;
          margin-right: 1rem;
          font-size: 1.5rem;
        }
        .footer h4 {
          margin-bottom: 1rem;
        }
        .footer ul {
          list-style: none;
          padding: 0;
        }
        .footer a {
          color: white;
          text-decoration: none;
          line-height: 2;
        }
        .copyright {
          text-align: center;
          margin-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.3);
          padding-top: 2rem;
          font-size: 0.9rem;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }
          .hero-text {
            max-width: 100%;
            margin-bottom: 3rem;
          }
          .hero-image {
            max-width: 80%;
          }
          .author-section {
            flex-direction: column;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 3rem; }
          .section-title { font-size: 2rem; }
          .section-title::before, .section-title::after { display: none; }
          .header {
            flex-direction: column;
            gap: 1rem;
          }
          .contact-form {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
      
      <div className="landing-page">
        <header className="header container">
          <div className="logo">Luca.</div>
          <nav className="nav">
            <a href="#stories">Stories</a>
            <a href="#author">Author's Website</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="container">
            <div className="hero">
              <div className="hero-text">
                <p className="subtitle">The online training series.</p>
                <h1>
                  Ride the <span className="hero-highlight wave"><span>Wave of Leadership</span></span> with <span className="hero-highlight circle">Luca</span>.
                </h1>
                <a href="#video" className="btn">Watch the Series</a>
              </div>
              <div className="hero-image">
                {/* Replace with your image */}
                <img src="..\public\srufer.png" height={1000} alt="Luca the surfer" />
              </div>
            </div>
          </section>

          {/* Crew Section */}
          <section id="stories" className="container">
            <br/><br/>
            <h2 className="section-title">Luca & his Crew.</h2>
            <br/><br/>
            <div className="crew-grid">
              <div className="crew-card">
                 {/* Replace with your image */}
                <img src="..\public\man1.png" alt="Luca" />
                <h3>Luca</h3>
                <p>An internal Lead determined to grow his leadership skills.</p>
              </div>
              <div className="crew-card">
                 {/* Replace with your image */}
                <img src="..\public\man1.png" alt="Rex" />
                <h3>Rex</h3>
                <p>The information-hoarding director who stifles collaboration.</p>
              </div>
              <div className="crew-card">
                 {/* Replace with your image */}
                <img src="..\public\man1.png" alt="Valerie" />
                <h3>Valerie</h3>
                <p>The leader who has empathy while prioritizing results.</p>
              </div>
            </div>
          </section>
          
          {/* Leadership Minutes Section */}
          <section id="video" className="container">
            <br/><br/>
            <h2 className="section-title">Luca's → Leadership Minutes.</h2>
            <div className="video-container">
              {/* <img src='https://i.ibb.co/7W8VYt1/leadership-minutes-logo.png' alt='Leadership Minutes Logo' style={{ position: 'absolute', top: '10px', left: '10px', width: '150px', zIndex: 2 }} /> */}
               {/* Replace with your thumbnail image */}
              <img src="..\public\Episode.png" alt="Leadership Minutes Episode 1" className="video-thumbnail" />
              
              <div className="video-overlay">
                <span className="episode-tag">Episode 01</span>
                <div className="video-play-button">
                  <PlayIcon />
                </div>
                <a href="#" className="watch-link">WATCH EPISODE 1 ON YOUTUBE ▸</a>
              </div>
            </div>
            <br/><br/>
          </section>

          {/* Author Section */}
          <section id="author" className="container">
            <div className="author-section">
              <div className="author-info">
                <h3>Meet the Author:<br/>Leslie.</h3>
                <ul>
                  <li><CheckIcon /><span>CEO of Trility Consulting, a 150+ employee growth-focused technology consulting firm.</span></li>
                  <li><CheckIcon /><span>Author of the book "Core Feeding Teams" - a proven system for teams that win.</span></li>
                  <li><CheckIcon /><span>Author who turned her "big idea" blog into a trusted resource for leaders.</span></li>
                </ul>
              </div>
               {/* Replace with your image */}
              <img src="..\public\849f4ea6ecfa13af5a9575177ceb421cf146c773 (1).png" alt="Author Leslie" className="author-photo"/>
            </div>
          </section>

          
          {/* Book Section */}
          <section className="container">
            <h2 className="section-title">Where Luca's story began.</h2>
            <div className="book-section">
               {/* Replace with your book cover image */}
              <img src="..\public\image.png" alt="Core Feeding Teams book cover" />
              <br/>
              <a href="#" className="btn">Get the book for deeper knowledge</a>
              <br/><br/>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="container">
            <h2 className="section-title">Got a Question for Luca's Crew?</h2>
            <p>Ask about — Leadership, Luca's story, or anything!</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Job Title</label>
                <input type="text" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="question">Your Question</label>
                <textarea id="question" rows="5"></textarea>
              </div>
              <button type="submit" className="btn">Send it my way!</button>
            </form>
          </section>

        </main>

        {/* Footer Section */}
        <footer className="footer">
            <div className="footer-wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,23.5V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>

            </div>
            <div className="container footer-content">
              <div className="footer-about">
                <div className="logo">Luca.</div>
                 {/* FontAwesome or other icon library would be better here */}
                <div className="social-icons">
                  <a href="#">F</a> <a href="#">T</a> <a href="#">I</a>
                </div>
              </div>
              <div className="footer-links">
                <h4>Links</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>Contact</h4>
                <ul>
                  <li><a href="mailto:hello@lucaseries.com">hello@lucaseries.com</a></li>
                  <li><a href="tel:5155551234">(515) 555-1234</a></li>
                </ul>
              </div>
            </div>
            <div className="container copyright">
              © 2025 Luca Series. All Rights Reserved.
            </div>
        </footer>
      </div>
    </>
  );
}