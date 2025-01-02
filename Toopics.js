import { Link } from 'react-router-dom';

export default function Toopics({ topics, callToAction, footerText ,buttonText}) {
  return (
    <>
      <div>
        {/* Topics Section */}
        <section className="topics">
          <div className="container">
            <h2>المواضيع الرئيسية</h2>
            <div className="topic-list">
              {topics.map((topic, index) => (
                <div className="topic" key={index}>
                  <img src={topic.imageUrl} alt={topic.imageAlt} />
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <Link to="/startoo" className="btn">{topic.buttonText}</Link> {/* Link to Startoo */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="call-to-action">
          <div className="container">
            <h2>{callToAction.title}</h2>
            <p>{callToAction.description}</p>
            <Link to="/startoo" className="btn">{callToAction.buttonText}</Link> {/* Link to Startoo */}
          </div>
        </section>

        {/* Footer Section */}
        <footer>
          <p>{footerText}</p>
        </footer>
      </div>
    </>
  );
}
