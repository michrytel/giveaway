import Title from "../atoms/Title";
import HeroBtns from "../molecules/HeroBtns";

const Hero = ({to}) => {
    return (
            <div className='hero'>
            <Title
            mainText='Start helping!'
            text='Give unwanted things in trusted hands'
            />
            <HeroBtns to={to}/>
            </div>

        )
}
export default Hero