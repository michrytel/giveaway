import React from 'react';
import HomeIntro from '../templates/HomeIntro';
import ThreeColumns from "../organisms/ThreeColumns";
import HomeSteps from "../templates/HomeSteps";


const Home = () => {
  return (
    <>
      <HomeIntro />
      <main>
          <ThreeColumns/>
          <HomeSteps/>
      </main>
    </>
  );
}

export default Home;
