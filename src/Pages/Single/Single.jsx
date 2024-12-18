import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data'; 
import './Single.css'
import { useColor } from "../../colorContext.js";
const Single = () => {
    const [activeIndex, setActiveIndex] = useState(null);
 const { bgColor } = useColor();
  const { id } = useParams();
  const course = data.find((course) =>
    course.types.some((type) => type.subtitle.toLowerCase() === id.toLowerCase())
  );

  if (!course) {
    return <div>Course not found!</div>;
  }

  const type = course.types.find((type) => type.subtitle.toLowerCase() === id.toLowerCase());

 

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <div  style={{ backgroundColor: bgColor }}>
    <div className="single-course">
      <h1 className='title'>{course.title}</h1>
      <h2 className='sub-title'>{type.subtitle}</h2>
      <img src={type.desc[0]?.logo} alt={type.subtitle} className="course-logo" />

      <div className="qa-section">
        {type.desc.map((desc, idx) => (
          <div key={idx}>
            {desc.qa.map((item, qIndex) => (
              <div key={qIndex} className="qa-item">
                <div
                  className="question"
                  onClick={() => toggleAnswer(qIndex)}
                >
                  <h3>{item.question}</h3>
                  <span className={`arrow ${activeIndex === qIndex ? 'rotate' : ''}`}>
                    &#x2193;
                  </span>
                </div>
                {activeIndex === qIndex && (
                  <div className="answer">
                    <p>A: {item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Single;
