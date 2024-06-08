import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
