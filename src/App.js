import "./App.css";
import { Card } from "./components/body/card"
import { Navbar } from "./components/navbar";
import { Routes, Route,Navigate } from 'react-router-dom';
import { Mobile } from './components/mobiles';
import { Mobile1 } from './components/others' ;
import {Banner } from './components/body/banner'
import {Main } from './components/body/main'
import Footer from './components/footer'
import {Contact } from './components/contact';
import {About} from './components/about'


function App() {
  return (
    <div className="App">
      <Card />
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path='/mobiles' element={<Mobile />} />
        <Route path='/Others' element={<Mobile1 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
