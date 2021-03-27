const GiveAwayThird = ({handleChange, values}) => {
    const selected = {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
    }
    if (values.who !== "") {
        values.who.some(el => el === "Kids") ? selected.first = true : selected.first = false;
        values.who.some(el => el === "Mothers") ? selected.second = true : selected.second = false;
        values.who.some(el => el === "Homeless") ? selected.third = true : selected.third = false;
        values.who.some(el => el === "Disabled people") ? selected.fourth = true : selected.fourth = false;
        values.who.some(el => el === "Older") ? selected.fifth = true : selected.fifth = false;
    }

    return (
        <div className="step__third">
            <h3>Organizations in which city you want to support?</h3>
            <div className="third__location">
                <select name="location" onChange={handleChange} value={values.location}>
                    <option value=''>Select...</option>
                    <option value="Poznań">Poznań</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Kraków">Kraków</option>
                    <option value="Katowice">Katowice</option>
                    <option value="Wrocław">Wrocław</option>
                </select>
            </div>
            <div className="third__who">
                <h3>Who you want to help?</h3>
                <label htmlFor="kids">Kids</label>
                <input checked={selected.first} id="kids" type="checkbox" name="who" value="Kids" onChange={handleChange}/>
                <label htmlFor="mothers">Mothers</label>
                <input checked={selected.second} id="mothers" type="checkbox" name="who" value="Mothers" onChange={handleChange}/>
                <label htmlFor="homeless">Homeless</label>
                <input checked={selected.third} id="homeless" type="checkbox" name="who" value="Homeless" onChange={handleChange}/>
                <label htmlFor="disabled">Disabled people</label>
                <input checked={selected.fourth} id="disabled" type="checkbox" name="who" value="Disabled people" onChange={handleChange}/>
                <label htmlFor="older">Older</label>
                <input checked={selected.fifth} id="older" type="checkbox" name="who" value="Older" onChange={handleChange}/>
            </div>
            <div className="third__name">
                <h3>Or enter a specific place (optional)</h3>
                <input type="text" name="locationAlt" value={values.locationAlt} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default GiveAwayThird