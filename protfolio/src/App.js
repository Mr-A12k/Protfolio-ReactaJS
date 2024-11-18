import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SkillsSection from './Components/Skills';
import ContactPage from './Components/ContactPage';
import Internship from './Components/Internsihip';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <SkillsSection/>
      <Internship/>
      <Projects/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
