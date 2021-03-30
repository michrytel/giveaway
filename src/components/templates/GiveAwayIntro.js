import Header from "../organisms/Header";
import GiveAwayHero from "../organisms/GiveAwayHero";

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