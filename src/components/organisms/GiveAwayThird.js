const GiveAwayThird = ({handleChange, values}) => {

    return (
        <div className="step__third">
            <h3>Choose location</h3>
            <div className="third__location">
                <select name="location" onChange={handleChange}>
                    <option value="" disabled selected hidden>Choose location</option>
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
                <input id="kids" type="checkbox" name="who" value="Kids" onChange={handleChange}/>
                <label htmlFor="mothers">Mothers</label>
                <input id="mothers" type="checkbox" name="who" value="Mothers" onChange={handleChange}/>
                <label htmlFor="homeless">Homeless</label>
                <input id="homeless" type="checkbox" name="who" value="Homeless" onChange={handleChange}/>
                <label htmlFor="disabled">Disabled people</label>
                <input id="disabled" type="checkbox" name="who" value="Disabled people" onChange={handleChange}/>
                <label htmlFor="older">Older</label>
                <input id="older" type="checkbox" name="who" value="Older" onChange={handleChange}/>
            </div>
            <div className="third__name">
                <h3>Name of a specific recipient (optional)</h3>
                <input type="text" name="name" value={values.name} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default GiveAwayThird