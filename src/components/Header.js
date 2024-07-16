import '../styles/Header.css'

const Header = () => {
    return(
        <header id="App-header">
        <div className="text">
          <p className='highlighted' style = {{fontSize : '20px'}}>Hi there! My name is</p>
          <h1 id='name-header'>Kelly Do</h1>
          <p style = {{fontSize: '22px'}}>I am an aspiring Software Engineer. I am passionate about developing projects for a greater good for any demographic. I know a variety of coding languages, frontend development tools, and web development skills. I do my best to keep myself well rounded; so while I'm not on <span className='highlighted'>VSCode, </span> I enjoy exercising, badminton, and cooking </p>
      </div>
      </header>
    )
}

export default Header;