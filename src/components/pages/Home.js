import React from 'react';
import HomeIntro from '../templates/HomeIntro';
import ThreeColumns from "../organisms/ThreeColumns";
import HomeSteps from "../templates/HomeSteps";
import About from "../organisms/About";
import HomeHelp from "../templates/HomeHelp";
import Footer from "../organisms/Footer";
import Contact from "../organisms/Contact";
import HomeContact from "../templates/HomeContact";


const Home = () => {
  return (
    <>
      <HomeIntro />
      <main>
          <ThreeColumns/>
          <HomeSteps/>
          <About/>
          <HomeHelp/>
          <HomeContact/>
      </main>
        <Footer/>
    </>
  );
}

export default Home;
