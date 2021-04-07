import GiveAwayHero from "../organisms/GiveAwayHero";
import Header from "../organisms/Header";
import React from "react";
import {useAuth} from "../contexts/AuthContext";

const GiveAwayIntro = () => {
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
        <section className="give__away-intro" name="root">
            <div className="intro__img"/>
            <div className="intro__content">
                {checker ? <Header firstName={email} firstLink={"/"} secondName={"Home"} secondLink={"/"} navbar={false}/> :
                    <Header firstName={email} firstLink={"/"} secondName={"Home"} secondLink={"/"} navbar={false}/>}
                <GiveAwayHero/>
            </div>
        </section>
    )
}
export default GiveAwayIntro