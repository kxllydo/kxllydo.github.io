import './App.css';
import Header from './components/Header'
import Projects from './components/Projects';
import Work from './components/Work,';
import FadeInSection from './components/Fade';


function App() {


  return (
    <div id = "about" className ="App">
      <nav id = 'navbar'>
        <a href = '#about'>About</a>
        <a href = '#experience'>Experience</a>
        <a href = '#projects'>Projects</a>
        <a href ='/resume.pdf' id = 'resume-btn' >Resume</a>
      </nav>
        <Header />
      <FadeInSection>
        <Work />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
    </div>

  );
}

export default App;