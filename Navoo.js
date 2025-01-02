import React from 'react';
import '../one.jpeg'
import { Link } from 'react-router-dom';

export default function Navoo({ logoAlt, headerText, navigationItems }) {
  return (
    <header lang="ar" dir="rtl">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="one.jpeg" alt={logoAlt} className="logo" />
        </div>

        {/* Header Content */}
        <p>{headerText}</p>

        {/* Navigation Section */}
        <nav>
          <ul>
          {navigationItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <i className={item.icon}></i> {item.title}
            </Link>
          </li>
        ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
