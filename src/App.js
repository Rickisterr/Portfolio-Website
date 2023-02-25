import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Blog from './Pages/Blog/Blog';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
