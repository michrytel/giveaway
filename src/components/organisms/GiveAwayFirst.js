const GiveAwayFirst = ({handleChange}) => {

    return (
        <div className="step__first">
            <h3>Pick what you want to give away</h3>
            <label>
                <input name="what" type="radio" value="Destroyed clothes" onChange={handleChange}/>
                Destroyed clothes
            </label>
            <label>
                <input name="what" type="radio" value="Clothes" onChange={handleChange}/>
                Clothes
            </label>
            <label>
                <input name="what" type="radio" value="Toys" onChange={handleChange}/>
                Toys
            </label>
            <label>
                <input name="what" type="radio" value="Books" onChange={handleChange}/>
                Books
            </label>
            <label>
                <input name="what" type="radio" value="Other" onChange={handleChange}/>
                Other
            </label>
        </div>
    )
}

export default GiveAwayFirst