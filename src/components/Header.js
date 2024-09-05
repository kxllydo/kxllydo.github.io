import '../styles/Header.css'
import IconGitHub from './icons/github';
import Wave from './icons/wave';
import IconLinkedin from './icons/linkedin';
import React, { useState, useEffect, useRef } from 'react';



const Header = () => {
    const nameRef = useRef(null);
    const greetRef = useRef(null);
    const descRef = useRef(null);
    const linkRef = useRef(null);
    const gitRef = useRef(null);

    const [iconSize, setIconSize] = useState('35px');

    useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
    
          if (width >= 2000) {
            setIconSize('45px');
          } else if (width >= 1000) {
            setIconSize('35px');
          } else {
            setIconSize('35px');
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        // Call once to set initial size
        handleResize();
    
        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);

  useEffect(() => {
      const nameElement = nameRef.current;
      const greetElement = greetRef.current;
      const descElement = descRef.current;
      const linkElement = linkRef.current;
      const gitElement = gitRef.current;
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('fall');
                  observer.unobserve(entry.target); // Stop observing once visible
              }
          });
      }, { threshold: 0.5 });

      if (nameElement) {
          observer.observe(nameElement);
      }

      if (greetElement) {
        observer.observe(greetElement);
      }
      if (descElement) {
      observer.observe(descElement);
      }
      if (linkElement) {
        observer.observe(linkElement);
        }
        if (gitElement) {
          observer.observe(gitElement);
          }

      // Cleanup the observer on component unmount
      return () => {
          if (nameElement) {
              observer.unobserve(nameElement);
          }
      };
  }, []);

    return(
        <header id='App-header'>
        <div className='text'>
          <p ref = {greetRef} id = 'intro' className='highlighted'>Hi there! My name is</p>
          <h1 ref = {nameRef} id='name-header'>Kelly Do</h1>
          <p id = 'description' ref = {descRef}>I am a pre-junior Computer Science student at Drexel University with a strong interest in solving real world problems through technology. I have developed numerous projects to practice various technologies and tackle different issues. Outside of class and VSCode, I make a conscious effort to stay well-rounded. I like to keep active, cook, and particpate in student organizations.</p>
          <a ref={linkRef} className='img-bounce'href = 'https://www.linkedin.com/in/kelly~do/' target='_blank' rel='noopener noreferrer' id = 'header-linkedin' ><IconLinkedin measurement = {iconSize}/> </a>
          <a ref = {gitRef} className='img-bounce' href = 'https://github.com/kxllydo' target='_blank' rel='noopener noreferrer' style={{color : '#E9F4F6'}}><IconGitHub measurement = {iconSize}/> </a>
      </div>
      </header>
    )
}



export default Header;