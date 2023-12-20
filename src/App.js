import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Banner } from './Components/Banner';
import Skill from './Components/Skill';
import { Projects } from './Components/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
