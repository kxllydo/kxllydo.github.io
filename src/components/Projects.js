import '../styles/Projects.css';
import budgetAdd from '../imgs/add.png';
import dashboard from '../imgs/dashboard.png';

const Projects = () => {
    return (
        <div className="element">
            <h1>Projects</h1>
            <Carousel />
        </div>
    )
}


const Carousel = () => {
    return (
        <div className = 'container'>
            <div id = 'img-carousel'>
                <div className='showcase'>
                    <img src={budgetAdd} className='demo-img'></img>
                </div>
                <div id = 'carousel-btns'>
                    <button className='dot-btn' id = 'img-btn1'>.</button>
                    <button className='dot-btn'>.</button>
                </div>
            </div>
            <div>
                <p>this is text</p>
            </div>
        </div>
    )
}
export default Projects;