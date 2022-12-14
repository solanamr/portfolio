import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
