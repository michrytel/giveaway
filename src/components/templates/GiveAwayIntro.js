import GiveAwayHero from "../organisms/GiveAwayHero";
import Header from "../organisms/Header";

const GiveAwayIntro = () => {
    return (
        <section className="give__away-intro" name="root">
            <div className="intro__img"/>
            <div className="intro__content">
                <Header/>
                <GiveAwayHero/>
            </div>
        </section>
    )
}
export default GiveAwayIntro