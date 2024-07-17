import '../styles/Projects.css';
import BudgetBuddy1 from '../imgs/BudgetBuddy1.png';
import BudgetBuddy2 from '../imgs/BudgetBuddy2.png';
import {projectNames, skills, bulletPoints} from '../info/project-info.js';
import { useEffect, useState } from 'react';

console.log(projectNames);
const Projects = () => {
    const [currentBtn, setCurrentBtn] = useState('img-btn1')
    const [currentPg, setCurrentPg] = useState(projectNames[0])
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="element">
            <h1>Projects</h1>
            <Carousel currentBtn = {currentBtn} setCurrentBtn={setCurrentBtn} currentPg = {currentPg} setCurrentPg = {setCurrentPg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
        </div>
    )
}

const Skills = ({ skills }) => {
    return (
        <div className='container'>
            {skills.map((skill, index) => (
                <div key={index} className='skill-bubble'>
                    {skill}
                </div>
            ))}
        </div>
    );
};


const Carousel = ({currentBtn, setCurrentBtn, currentPg, setCurrentPg, currentIndex, setCurrentIndex}) => {
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
    };

    const changeImg = (event) => {
        const btn = event.target.id;
        setCurrentBtn(btn);
    }

    return (
        <div className = 'container' style={{alignItems: 'center'}}>
            <button id='triangle-btn-left' onClick={backPage}>;</button>
            <div id = 'img-carousel'>
                <div className='showcase'>
                    <div style={{width: '42vw'}}>
                        <img src={BudgetBuddy1} className={`demo-img ${currentBtn === 'img-btn1' ? 'active' : ''}`} id='img-1' alt=''></img>
                        <img src={BudgetBuddy2} className={`demo-img ${currentBtn === 'img-btn2' ? 'active' : ''}`} id='img-2' alt=''></img>
                    </div>
                </div>

                <div id = 'carousel-btns'>
                    <button className={`dot-btn ${currentBtn == 'img-btn1' ? 'active' : ''}`} id = 'img-btn1' onClick={changeImg}>.</button>
                    <button className={`dot-btn ${currentBtn == 'img-btn2' ? 'active' : ''}`} id = 'img-btn2' onClick={changeImg}>.</button>                
                </div>
            </div>
            <div className='project-info'>
                <h1 className='position-title' style={{marginLeft : '35px'}}>{currentPg}</h1>
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