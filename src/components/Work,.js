import '../styles/Work.css';
import { useEffect, useState } from 'react';

const workplaces = ['Aramark']

const Work = () => {
    const [locationName, setLocationName] = useState(workplaces[0])

    return (
        <div className="container">
            <h1 id ='experience'>Professional Experience</h1>
            <div className='resume-container'>
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
            btn.style.borderLeft = '2px solid #98ADB1';
        })

        const currentBtn = document.getElementById(locationName);
        currentBtn.style.borderLeft = '2px solid #6DF1B3'; 
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
            {locationName === "Aramark" ? (
                <>
                <div className='first-line'>
                <h1 className='position-title'>IT Generalist 
                    <span className='highlighted'><a href='https://www.aramark.com/home'> @{locationName}</a></span>
                </h1>
                <h2 className='sub-info'>April – September 2024</h2>
                </div>
                <h2 className='sub-info'>Philadelphia, PA</h2>

                <ul className='bullets'>
                    <li className='points'>Automated chargeback calculations from large, monthly Azure billing CSVs, saving 90% time and effort allocated</li>
                    <li className='points'>Utilized Pandas and Openpyxl to synthesis data from CSVs to create sheets detailing taxes and charges by department</li>
                    <li className='points'>Resolved Azure resources and AD permissions requests/issues from ServiceNow, enhancing project productivity</li>
                </ul>
                </>
            ) : locationName === "Apple" ? (
                <>
                <h1 className='position-title'>IT Generalist 
                    <span className='highlighted'><a href='https://www.aramark.com/home'> @{locationName}</a></span>
                </h1>
                <li>wassup</li>
                </>
                ) : (
                    <>
                    <h1 className='position-title'>IT Generalist 
                        <span className='highlighted'><a href='https://www.aramark.com/home'> @{locationName}</a></span>
                    </h1>
                    <li>wassup</li>
                    </>
                )}
        </div>

    )
}

export default Work;