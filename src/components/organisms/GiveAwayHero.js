import Title from "../atoms/Title";

const GiveAwayHero = () => {
    return (
        <div className='give__away-hero'>
            <Title
                mainText='Start helpinig'
                text='Give unwanted things in trusted hands'/>
            <div className="give__away-deco">
                <h3>It's only 4 simple steps</h3>
                <div className="deco__elements">
                    <div className="deco__element">
                        <h3>1</h3>
                        <p>Pick stuff</p>
                    </div>
                    <div className="deco__element">
                        <h3>2</h3>
                        <p>Pack it</p>
                    </div>
                    <div className="deco__element">
                        <h3>3</h3>
                        <p>Choose foundation</p>
                    </div>
                    <div className="deco__element">
                        <h3>4</h3>
                        <p>Order a courier</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiveAwayHero