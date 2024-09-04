import '../styles/Work.css';
import { useEffect, useState } from 'react';
import { workplaces, workBulletPoints, workInfo, highlightedProjectWords} from '../info/work-info';

const Work = () => {
    const [locationName, setLocationName] = useState(workplaces[0])

    return (
        <div id = 'experience' className="element" style = {{margin: '0 10% 0 10%'}}>
            <h1>Professional Experience</h1>
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
        currentBtn.style.borderLeft = '3px solid hsl(184, 100%, 57%)';
        currentBtn.style.color = 'hsl(184, 100%, 57%)'
    }, [locationName]);

    return (
    <div className="scrollbar">
        {workplaces.map((work, index) => (
            <button className="workplace" id = {work} onClick={jobHandler}>{work}</button>
        ))}
    </div>
    )
}


const ResumeInfo = ({ locationName}) => {
    return (
        <div className='resume-info'>
            <div className='first-line'>
                <h1 className='position-title'>
                    {workInfo[locationName]['position']} &nbsp;
                    <span className='highlighted'>
                        <a className='fancy' href='https://www.aramark.com/home'>@{locationName}</a>
                    </span>
                </h1>
                <h2 className='sub-info'>{workInfo[locationName]['date']}</h2>
            </div>
            <h2 className='sub-info'>{workInfo[locationName]['location']}</h2>

            <ul className='bullets'>
                {workBulletPoints[locationName].map((point, index) => {
                    let highlightedText = [point];

                    highlightedProjectWords[locationName].forEach((word) => {
                        // Escape special characters in the word
                        const escapedWord = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        const regex = new RegExp(`(${escapedWord})`, 'gi');

                        highlightedText = highlightedText.flatMap((textSegment) => {
                            if (typeof textSegment === 'string') {
                                return textSegment.split(regex).map((part, idx) =>
                                    part.toLowerCase() === word.toLowerCase() ? (
                                        <span key={idx} style={{ color: 'hsl(184, 100%, 57%)' }}>{part}</span>
                                    ) : (
                                        part
                                    )
                                );
                            }
                            return textSegment;
                        });
                    });

                    return <li className='points' key={index}>{highlightedText}</li>;
                })}
            </ul>
        </div>
    );
};




export default Work;