import React from 'react';
import Header from '../organisms/Header';
import Hero from "../organisms/Hero";
import {useAuth} from "../contexts/AuthContext";

const HomeIntro = () => {
    const {currentUser, logout} = useAuth()
    let checker
    let email
    if (currentUser !== null) {
        checker = true;
        if (currentUser !== undefined) {
            email = currentUser.email
        } else {
            email = "username@mail.com"
        }
    } else {
        checker = false;
    }
    let handleLogout = () => {
        logout()
    }
    return (
        <section className="intro" name="root">
            <div className="intro__img"/>
            <div className="intro__content">
                {checker ? <Header firstName={email} firstLink={"/"} secondName={"Logout"} secondLink={"/login"} navbar={true} clicker={handleLogout}/> :
                    <Header firstName={"Login"} firstLink={"/login"} secondName={"Register"} secondLink={"/register"} navbar={true}/>}
                {checker ? <Hero to="/giveaway"/> : <Hero to="/login"/>}
            </div>
        </section>
    );
}

export default HomeIntro;
