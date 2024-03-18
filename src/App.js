import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Banner } from './Components/Banner';
import { BrowserRouter as Router, Route, Routes,Switch, Link,  Navigate } from 'react-router-dom'
import Skill from './Components/Skill';
import { Projects } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Main from './Components/Main';
import ShortForm from './Components/ShortForm';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div>
    <NavBar/>
  </div>
  );
}

export default App;
