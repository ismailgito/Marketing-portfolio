import Navbar from '../components/Navbar';
import MarketingTools from '../components/Marketing-tools';
import About from '../components/About';
import Skillset from '../components/Skillset'; // Imported updated name
import Portfolio from '../components/Portfolio';
import Projects from '@/components/Projects';
import Resume from '../components/Resume';
import Certficates from '../components/Certficates';
import Internship from '../components/Internship';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container-fluid bg-white p-0">
      <Navbar />
      <About />
      <MarketingTools />
      <Skillset />
      <Portfolio />
      <Projects />
      <Resume />
      <Certficates />
      <Internship />
      <Contact />
      <Footer />
    </div>
  );
}