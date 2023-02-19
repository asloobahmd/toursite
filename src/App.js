import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Contactus from './pages/Contactus';
import About from './pages/About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/contact-us' element={<Contactus/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
