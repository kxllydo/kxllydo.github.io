import '../styles/Header.css'
import IconGitHub from './icons/github';
import IconLinkedin from './icons/linkedin';
import React, { useEffect, useRef } from 'react';

const Header = () => {
    const nameRef = useRef(null);
    const greetRef = useRef(null);
    const descRef = useRef(null);
    const linkRef = useRef(null);
    const gitRef = useRef(null);


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
        <header id="App-header">
        <div className="text">
          <p ref = {greetRef} id = "intro" className='highlighted' style = {{fontSize : '20px'}}>Hi there! My name is</p>
          <h1 ref = {nameRef} id='name-header'>Kelly Do</h1>
          <p id = "description" ref = {descRef} style= {{fontSize: '22px'}}>I am an aspiring Software Engineer. I am passionate about developing projects for a greater good for any demographic. I know a variety of coding languages, frontend development tools, and web development skills. I do my best to keep myself well rounded; so while I'm not on <span className='highlighted'>VSCode, </span> I enjoy exercising, badminton, and cooking </p>
          <a ref={linkRef} className="img-bounce"href = 'https://www.linkedin.com/in/kelly~do/' target='_blank' rel="noopener noreferrer" id = 'header-linkedin' ><IconLinkedin measurement = {'35px'}/> </a>
          <a ref = {gitRef} className="img-bounce" href = 'https://github.com/kxllydo' target='_blank' rel="noopener noreferrer" style={{color : '#E9F4F6'}}><IconGitHub measurement = {'35px'}/> </a>
      </div>
      </header>
    )
}



export default Header;