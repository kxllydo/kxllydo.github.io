import './App.css';
import Header from './components/Header'
import Work from './components/Work,';

function App() {
  return (
    <div className ="App">
      <nav id = 'navbar'>
        <a href = 'http://localhost:3000/'>About</a>
        <a>Experience</a>
        <a>Projects</a>
        <a id = 'resume-btn'>Resume</a>
      </nav>
      <Header />
      <Work />
    </div>
  );
}

export default App;
