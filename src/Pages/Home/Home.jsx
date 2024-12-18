import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { useColor } from "../../colorContext.js";
import "./Home.css";
import data from "../../data/data.js";

const Home = () => {
  const { bgColor } = useColor();
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="ban">
        <div className="left">
          <h3>Ace Your Interview, Unlock Your Future</h3>
          <h1>Prepare, Practice, Succeed</h1>
          <h4>
            Explore a Wide Range of IT Topics and Interview Questions to Master
            Your Prep
          </h4>
        </div>
        <div className={`right ${imageVisible ? "visible" : ""}`}>
          <img
            src="https://aquinascollege.ca/wp-content/uploads/2024/02/how-to-prepare-for-a-job-interview.webp"
            alt="Job Interview Preparation"
            className="img1"
          />
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="category-section">
          <h2 className="cat-title">{item.title}</h2>

          <div className="subtitle-flex">
            {item.types.map((type, idx) => (
              <Link
                className="link"
                to={`/questions/${type?.subtitle}`}
                key={idx}
              >
                <div className="subtitle-box">
                  <h3>{type.subtitle}</h3>
                  {type.desc &&
                    type.desc.map((desc, dIdx) => (
                      <div key={dIdx} className="description">
                        <p>
                          {desc.logo && (
                            <img
                              src={desc.logo}
                              className="subtitle-logo"
                              alt="logo"
                            />
                          )}
                        </p>
                      </div>
                    ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
