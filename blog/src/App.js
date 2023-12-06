import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
import { About } from './Components/About';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
