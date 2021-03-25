import React from 'react';
import HomeIntro from '../templates/HomeIntro';
import ThreeColumns from "../organisms/ThreeColumns";
import HomeSteps from "../templates/HomeSteps";
import About from "../organisms/About";
import HomeHelp from "../templates/HomeHelp";


const Home = () => {
  return (
    <>
      <HomeIntro />
      <main>
          <ThreeColumns/>
          <HomeSteps/>
          <About/>
          <HomeHelp/>
      </main>
    </>
  );
}

export default Home;
