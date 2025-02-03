import About from "../Components/About/About";
import Counter from "../Components/Counter/Counter";
import FooterAnim from "../Components/FooterAnimation/FooterAnimation";
import HeroSection from "../Components/HeroSection/HeroSection";
import Logo from "../Components/Logo/Logo";
import Philosophy from "../Components/Philosophy/Philosophy";
import TechnologyTab from "../Components/TechnologyTab/TechnologyTab";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Philosophy />
      <TechnologyTab />
      <Counter />
      <Logo />
      <FooterAnim />
      
    </div>
  );
};

export default Home;
