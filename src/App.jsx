import './App.css'
import Blog from './components/Blog';
import Bom from './components/Bom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Slider from './components/Slider';
import Time from './components/Time';
import Video from './components/Video';
import Work from './components/Work';

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Presentation/>
      <Slider/>
      <Video/>
      <Time/>
      <Work/>
      <Bom/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
