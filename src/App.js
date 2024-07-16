import './App.css';
import Header from './components/Header'
import Projects from './components/Projects';
import Work from './components/Work,';

function App() {
  return (
    <div className ="App">
      <nav id = 'navbar'>
        <a href = '#App-header'>About</a>
        <a href = '#experience'>Experience</a>
        <a>Projects</a>
        <a id = 'resume-btn'>Resume</a>
      </nav>
      <Header />
      <Work />
      <Projects />
    </div>
  );
}

export default App;