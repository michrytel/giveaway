const GiveAwaySecond = ({handleChange}) => {

    return (
        <div className="step__second">
            <h3>Choose how much 60L bags you need to pack all items</h3>
            <label>
                Number of bags
                <select name="number" onChange={handleChange}>
                    <option value="" disabled selected hidden>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        </div>
    )
}

export default GiveAwaySecond