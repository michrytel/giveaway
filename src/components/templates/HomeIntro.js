import React from 'react';
import Header from '../organisms/Header';
import Hero from "../organisms/Hero";

const HomeIntro = () => {
    return (
        <div className="intro" name="root">
            <div className="intro__img"/>
            <div className="intro__content">
                <Header/>
                <Hero to="/login"/>
            </div>
        </div>
    );
}

export default HomeIntro;
