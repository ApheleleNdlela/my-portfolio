import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './containers/home';
import Contact from './containers/contact';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <Navbar/>

    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>

    </Routes>
    </div>
  );
}

export default App;
