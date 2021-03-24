import Title from "../atoms/Title";
import Steps from "../organisms/Steps";
import BtnBig from "../atoms/BtnBig";

const HomeSteps = () => {
    return (
        <div className="steps__container">
            <Title mainText="4 Simple steps are enough"/>
            <div className="steps__box">
                <Steps/>
            </div>
            <BtnBig to="/login" text='Give things'/>
        </div>

    )
}

export default HomeSteps