import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className ="App">
      <header id = 'navbar'>
        <a href = 'http://localhost:3000/'>About</a>
        <a>Experience</a>
        <a>Projects</a>
        <a id = 'resume-btn'>Resume</a>
      </header> 
      <Header />
    </div>
  );
}

export default App;
