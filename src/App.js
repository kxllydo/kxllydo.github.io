import './App.css';
import Header from './components/Header'
import Projects from './components/Projects';
import Work from './components/Work,';
import FadeInSection from './components/Fade';


function App() {
  return (
    <div className ="App">
      <nav id = 'navbar'>
        <a href = '#App-header'>About</a>
        <a href = '#experience'>Experience</a>
        <a href = '#project-section'>Projects</a>
        <a id = 'resume-btn'>Resume</a>
      </nav>
      <FadeInSection>
        <Header />
      </FadeInSection>
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