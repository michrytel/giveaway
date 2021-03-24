import StepsSingle from "../molecules/StepsSingle";
import tshirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import loupe from '../../assets/Icon-3.svg';
import order from '../../assets/Icon-4.svg';
const Steps = () => {
    return (
        <div className="steps">
            <StepsSingle imgSrc={tshirt} imgAlt="tshirt" title="Pick stuff" text="Clothes, toys, equipment and other"/>
            <StepsSingle imgSrc={bag} imgAlt="bag" title="Pack them" text="Use garbage bags"/>
            <StepsSingle imgSrc={loupe} imgAlt="loupe" title="Decide who you want to help" text="Choose trusted place"/>
            <StepsSingle imgSrc={order} imgAlt="order" title="Order the courier" text="courier will arrive at a convenient time"/>
        </div>
    )
}

export default Steps