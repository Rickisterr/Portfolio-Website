import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import ParticleEff from './ParticlesEffect';

function App() {
  return (
    <Router>
      <NavBar />
      <ParticleEff />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
