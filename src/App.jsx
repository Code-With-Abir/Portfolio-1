import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Rating from './Components/Rating';
import Skil from './Components/Skil';

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Home />
      <About />
      <Skil />
      <Rating />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
