import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Tech from './Components/Tech'
import Works from './Components/Works'
import Feedbacks from './Components/Feedbacks'
import Contact from './Components/Contact'
import StarsCanvas from './Components/StarsCanvas'




function App() {
  return (
    <BrowserRouter>
       <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>

          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
            
          </div>

       </div>
    </BrowserRouter>
  );
}

export default App;
