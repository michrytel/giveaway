const GiveAwayFifth = ({values}) => {
    return (
        <div className="results__container">
            <h3>Donation Summary</h3>
            <div className="results__first">
                <p>{values.number} bags, {values.what}, {values.who}</p>
            </div>
        </div>
    )
}

export default GiveAwayFifth