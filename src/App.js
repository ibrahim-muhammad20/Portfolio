import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Banner } from './Components/Banner';
import Skill from './Components/Skill';
import { Projects } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
