import GiveAwayForm from "../organisms/GiveAwayForm";
import Footer from "../organisms/Footer";
import GiveAwayIntro from "../templates/GiveAwayIntro";
import HomeContact from "../templates/HomeContact";

const GiveAway = () => {
    return (
        <>
            <GiveAwayIntro/>
            <GiveAwayForm/>
            <HomeContact/>
            <Footer/>
        </>
    )
}

export default GiveAway