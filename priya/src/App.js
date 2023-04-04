
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Aboutus from './pages/Aboutus';
import Certifications from './pages/Certifications';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Qualification" element={<Qualification/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Project" element={<Project/>}/>
        <Route path="Certifications" element={<Certifications/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
