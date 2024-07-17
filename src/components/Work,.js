import '../styles/Work.css';
import { useEffect, useState } from 'react';
import { workplaces, workBulletPoints, workInfo} from '../info/work-info';

const Work = () => {
    const [locationName, setLocationName] = useState(workplaces[0])

    return (
        <div className="element">
            <h1 id ='experience'>Professional Experience</h1>
            <div className='container fade-in'>
                <ScrollBar setLocationName = {setLocationName} locationName={locationName}/>
                <ResumeInfo locationName = {locationName} />
            </div>
        </div>
    )
}

const ScrollBar = ({locationName, setLocationName}) => {
    const jobHandler = (event) => {
        event.preventDefault(event);
        setLocationName(event.target.id);   
    }

    useEffect (() => {
        const otherBtns = document.querySelectorAll ('.workplace');
        Array.from(otherBtns).forEach(btn => {
            btn.style.borderLeft = '3px solid #98ADB1';
            btn.style.color = '#98ADB1'

        })

        const currentBtn = document.getElementById(locationName);
        currentBtn.style.borderLeft = '3px solid #6DF1B3'; 
        currentBtn.style.color = '#6DF1B3'
    }, [locationName]);

    return (
    <div className="scrollbar">
        {workplaces.map((work, index) => (
            <button className="workplace" id = {work} onClick={jobHandler}>{work}</button>
        ))}
    </div>
    )
}

const ResumeInfo = ({locationName}) => {
    return (
        <div className='resume-info'>
            <div className='first-line'>
                <h1 className='position-title'>{workInfo[locationName]['position']}
                    <span className='highlighted'><a href='https://www.aramark.com/home'> @{locationName}</a></span>
                </h1>
                <h2 className='sub-info'>{workInfo[locationName]['date']}</h2>
            </div>
            <h2 className='sub-info'>{workInfo[locationName]['location']}</h2>

            <ul className='bullets'>
                {workBulletPoints[locationName].map((point, index) => (
                    <li className='points'>{point} </li>
                ))}
            </ul>
        </div>

    )
}

export default Work;