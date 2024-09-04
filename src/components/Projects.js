import '../styles/Projects.css';
import BudgetBuddy1 from '../imgs/BudgetBuddy1.png';
import BudgetBuddy2 from '../imgs/BudgetBuddy2.png';
import BestProfessor1 from '../imgs/BestProfessor1.png';
import BestProfessor2 from '../imgs/BestProfessor2.png';
import SpotiU1 from '../imgs/SpotiU1.png';
import SpotiU2 from '../imgs/SpotiU2.png';
import {projectNames, skills, bulletPoints} from '../info/project-info.js';
import { useEffect, useState } from 'react';
import IconGitHub from './icons/github.js';

console.log(projectNames);
const Projects = () => {
    const [currentBtn, setCurrentBtn] = useState('img-btn1')
    const [currentPg, setCurrentPg] = useState(projectNames[0])
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div id="projects" className="element">
            <h1>Featured Projects</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems : 'center'}}>
            <Carousel currentBtn = {currentBtn} setCurrentBtn={setCurrentBtn} currentPg = {currentPg} setCurrentPg = {setCurrentPg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
            {/* <button id = 'all-projects-btn'>All Projects</button> */}
            </div>
        </div>
    )
}

const Skills = ({ skills }) => {
    return (
        <div id='skills-container'>
            {skills.map((skill, index) => (
                <div className='skill-bubble'>
                    {skill}
                </div>
            ))}
        </div>
    );
};

const DemoImages = ({currentPg, currentBtn}) => {
    return (
        <div className='showcase'>
            {currentPg === 'Budget Buddy' ? (
                <div style={{width: '42vw'}}>
                    <img src={BudgetBuddy1} className={`demo-img ${currentBtn === 'img-btn1' ? 'active' : ''}`} id='img-1' alt=''></img>
                    <img src={BudgetBuddy2} className={`demo-img ${currentBtn === 'img-btn2' ? 'active' : ''}`} id='img-2' alt=''></img>
                </div>
            ) : currentPg === 'Best Professor' ? (
                <div style={{width: '42vw'}}>
                    <img src={BestProfessor1} className={`demo-img ${currentBtn === 'img-btn1' ? 'active' : ''}`} id='img-1' alt=''></img>
                    <img src={BestProfessor2} className={`demo-img ${currentBtn === 'img-btn2' ? 'active' : ''}`} id='img-2' alt=''></img>
                </div>
            ) : (
                <div style={{width: '42vw'}}>
                    <img src={SpotiU1} className={`demo-img ${currentBtn === 'img-btn1' ? 'active' : ''}`} id='img-1' alt=''></img>
                    <img src={SpotiU2} className={`demo-img ${currentBtn === 'img-btn2' ? 'active' : ''}`} id='img-2' alt=''></img>
                </div>
            )}
        </div>
    )
}


const Carousel = ({currentBtn, setCurrentBtn, currentPg, setCurrentPg, currentIndex, setCurrentIndex}) => {
    const repoName = currentPg.replace(/\s+/g, '');

    const nextPage = (event) => {
        event.preventDefault();
        let newIndex;
        if (currentIndex !== projectNames.length - 1) {
            newIndex = currentIndex + 1;
        } else {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setCurrentPg(projectNames[newIndex]);
        setCurrentBtn('img-btn1');
    };

    const backPage = (event) => {
        event.preventDefault();
        let newIndex;
        if (currentIndex !== 0) {
            newIndex = currentIndex - 1;
        } else {
            newIndex = projectNames.length - 1;
        }
        setCurrentIndex(newIndex);
        setCurrentPg(projectNames[newIndex]);
        setCurrentBtn('img-btn1');
    };

    const changeImg = (event) => {
        const btn = event.target.id;
        setCurrentBtn(btn);
    }

    return (
        <div className = 'container' style={{alignItems: 'center'}}>
            <button id='triangle-btn-left' onClick={backPage}>;</button>
            <div id = 'img-carousel'>
                <DemoImages currentPg={currentPg} currentBtn={currentBtn}/>

                <div id = 'carousel-btns'>
                    <button className={`dot-btn ${currentBtn == 'img-btn1' ? 'active' : ''}`} id = 'img-btn1' onClick={changeImg}>.</button>
                    <button className={`dot-btn ${currentBtn == 'img-btn2' ? 'active' : ''}`} id = 'img-btn2' onClick={changeImg}>.</button>                
                </div>
            </div>
            <div className='project-info'>
                <div className='first-line'>
                <h1 className='position-title' style={{marginLeft : '35px'}}>{currentPg}</h1>
                <a href = {`https://github.com/kxllydo/${repoName}`} target = '_blank' rel="noopener noreferrer">
                <IconGitHub measurement={'30px'}/> </a>
                </div>
                <ul className='bullets'>
                   {bulletPoints[currentPg].map((point, index) =>(
                    <li className='points'>{point}</li>
                   ))}
                </ul>
                <Skills skills={skills[currentPg]}/>
            </div>
            <button id='triangle-btn-right' onClick={nextPage}> </button>

        </div>
    )



}
export default Projects;