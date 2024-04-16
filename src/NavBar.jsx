import './NavBar.css'

function NavBar() {
  return(
    <>
    <nav>
      <div>
        <ul id = "navbar">
          <li><a href="#/Home">Home</a></li>
          <li><a href="#/Poetry">Poetry</a></li>
          <li><a href="#/Songs">Songwriting</a></li>
          <li><a href="#/Visual">Visual Art</a></li>
          <li><a href="#/Demos">Demos</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar;