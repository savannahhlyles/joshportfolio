import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import Poetry from "./pages/Poetry"
import Songs from "./pages/Songs"
import Visual from "./pages/Visual"
import Demos from "./pages/Demos"
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Poetry" element={<Poetry />} />
          <Route path="/Songs" element={<Songs />} />
          <Route path="/Visual" element={<Visual />} />
          <Route path="/Demos" element={<Demos />} />
        </Routes>
      </div>
    </HashRouter>
    </>
  )
}

export default App;
