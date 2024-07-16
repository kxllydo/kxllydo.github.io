import '../styles/Header.css'

const Header = () => {
    return(
        <div className="text">
          <p className='highlighted'>Hi there! I'm</p>
          <h1 id='name-header'>Kelly Do</h1>
          <p style = {{fontSize: '20px'}}>I am an aspiring Software Engineer. I am passionate about developing projects for a greater good for any demographic. I know a variety of coding languages, frontend development tools, and web development skills. I do my best to keep myself well rounded; so while I'm not on VSCode, I enjoy exercising, badminton, and cooking </p>
      </div>
    )
}

export default Header;