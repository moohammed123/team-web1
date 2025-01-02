import React from 'react';
import { Link } from 'react-router-dom';
import '../one.jpeg'
export default function Podcast({ logoUrl, headerText, footerText, videoUrl, navItems }) {
  return (
    <>
      <div lang="ar" dir="rtl">
        {/* Header Section */}
        <header>
          <div className="container">
            <div className="logo-container">
              <img src="../one.jpeg" alt="شعار نَفْس" className="logo" />
            </div>
            <p>{headerText}</p>
            <nav>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>
                      <i className={item.icon} /> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Section */}
        <main>
          <section className="video-section">
            <h2>مشاهدة الفيديو</h2>
            <iframe
              width="100%"
              height={800}
              src={videoUrl}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Podcast Video"
            />
          </section>
        </main>

        {/* Footer Section */}
        <footer>
          <p>{footerText}</p>
        </footer>
      </div>
    </>
  );
}
