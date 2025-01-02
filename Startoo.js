import React from 'react';
import { Link } from 'react-router-dom';
import Navoo from './Navoo';

const Startoo = ({ podcasts, footerText, subscribeText, buttonText }) => {
  const navigationItems = [
    { title: "الرئيسية", icon: "fas fa-home", link: "/" },
    { title: "الأمراض النفسية", icon: "fas fa-brain", link: "/Disease" },
    { title: "الأنماط الفكرية", icon: "fas fa-stream", link: "/patterns" },
    { title: "الاضطرابات النفسية", icon: "fas fa-user-md", link: "/disorders1" },
    { title: "البودكاستات", icon: "fas fa-podcast", link: "/Startoo" },
  ];

  return (
    <div>
      <Navoo
        logoAlt="شعار نَفْس"
        headerText="نافذتك لفهم النفس والعقل"
        navigationItems={navigationItems}
      />
      <div>
        {/* Hero Section */}
        <section className="hero">
          <h2>البودكاستات</h2>
          <p>استمع إلى أفضل الحلقات التي تتناول موضوعات الصحة النفسية، تطوير الذات، والتوازن الحياتي.</p>
        </section>

        {/* Featured Episodes Section */}
        <section className="featured-episodes">
          <h2>الحلقات المميزة</h2>
          <div className="podcast-list">
            {podcasts.map((podcast, index) => (
              <div className="podcast" key={index}>
                <img src={podcast.image} alt={podcast.title} />
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
                <Link to="/Podcast" className="btn">استمع الآن</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="subscribe-section">
          <h2>{subscribeText}</h2>
          <form action="#">
            <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
            <button type="submit">{buttonText}</button>
          </form>
        </section>

        {/* Footer Section */}
        <footer>
          <p>{footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default Startoo;
