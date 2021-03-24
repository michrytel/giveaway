import Title from "../atoms/Title";
import sign from "../../assets/Signature.svg"
import people from "../../assets/People.jpg"
const About = () => {
    return (
        <div className="about__container">
            <div className="about__content">
                <Title mainText="About us"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias commodi eius quos repellendus. Corporis hic natus quasi? Lorem ipsum dolor sit amet.</p>
                <img src={sign} alt="signature"/>
            </div>
            <img src={people} alt="people"/>
        </div>
    )
}
export default About