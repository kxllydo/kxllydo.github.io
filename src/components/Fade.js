// FadeInSection.js
import React, { useEffect, useRef } from 'react';
// import './styles.css';

const FadeInSection = ({ children }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className="fade-in-section">
      {children}
    </div>
  );
};

export default FadeInSection;
