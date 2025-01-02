import React from 'react';
import { Link } from 'react-router-dom';
export default function Disease({
    navigationItems,
    headerContent,
    mainSection,
    featuredEpisodes,
    footerText
}) {
    return (
        
        <div lang="ar" dir="rtl">
            <header>
                <div className="container">
                    <div className="logo-container">
                        <img src="../one.jpeg" alt={headerContent.logoAlt} className="logo" />
                    </div>
                    <p>{headerContent.tagline}</p>
                    <nav>
                        <ul>
                            {navigationItems.map((item, index) => (
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

            <main>
                <section className="hero">
                    <h2>{mainSection.title}</h2>
                    <p>{mainSection.description}</p>
                    <p>{mainSection.paragraph}</p>
                </section>

                {/* Featured Episodes Section */}
                <section className="featured-episodes">
                    <h2>{featuredEpisodes.title}</h2>
                    <div className="podcast-list">
                        {featuredEpisodes.episodes.map((podcast, index) => (
                            <div className="podcast" key={index}>
                                <img src={podcast.imageUrl} alt={podcast.altText} />
                                <h3>{podcast.title}</h3>
                                <p>{podcast.description}</p>
                                <Link to={podcast.link} className="btn">{podcast.buttonText}</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>{footerText}</p>
            </footer>
        </div>
    );
}
