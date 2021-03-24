const StepsSingle = ({imgSrc, imgAlt, title, text}) => {
    return (
        <div className="step">
            <img className="step__img" src={imgSrc} alt={imgAlt}/>
            <h3 className="step__title">{title}</h3>
            <div className="step__deco"/>
            <p className="step__text">{text}</p>
        </div>
    )
}
export default StepsSingle