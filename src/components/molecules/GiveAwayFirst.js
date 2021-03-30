const GiveAwayFirst = ({handleChange, values}) => {
    const selected = {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
    }
    values.what === "Destroyed clothes" ? selected.first = true : selected.first = false;
    values.what === "Clothes" ? selected.second = true : selected.second = false;
    values.what === "Toys" ? selected.third = true : selected.third = false;
    values.what === "Books" ? selected.fourth = true : selected.fourth = false;
    values.what === "Other" ? selected.fifth = true : selected.fifth = false;
    return (
        <div className="step__first">
            <h3>Pick what you want to give away</h3>
            <label>
                <input checked={selected.first} name="what" type="radio" value="Destroyed clothes" onChange={handleChange}/>
                Destroyed clothes
                <span className="checkbox"/>
            </label>
            <label>
                <input checked={selected.second} name="what" type="radio" value="Clothes" onChange={handleChange}/>
                Clothes
                <span className="checkbox"/>
            </label>
            <label>
                <input checked={selected.third} name="what" type="radio" value="Toys" onChange={handleChange}/>
                Toys
                <span className="checkbox"/>
            </label>
            <label>
                <input checked={selected.fourth} name="what" type="radio" value="Books" onChange={handleChange}/>
                Books
                <span className="checkbox"/>
            </label>
            <label>
                <input checked={selected.fifth} name="what" type="radio" value="Other" onChange={handleChange}/>
                Other
                <span className="checkbox"/>
            </label>
        </div>
    )
}
export default GiveAwayFirst