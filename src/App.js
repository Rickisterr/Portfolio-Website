import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Gallery from './Components/Gallery/Gallery';
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
        <Route path='/Gallery' element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
