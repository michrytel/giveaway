const GiveAwayFourth = ({handleChange, values}) => {


    return (
        <div className="step__fourth">
            <h3>Shipment details</h3>
            <div className="fourth__first">
                <h3>Address:</h3>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="address.street" value={values.address.street} onChange={handleChange}/>
                <label htmlFor="city">City</label>
                <input id="city" type="text" name="address.city" value={values.address.city} onChange={handleChange}/>
                <label htmlFor="postal">Postal Code</label>
                <input id="postal" type="text" name="address.postal" value={values.address.postal} onChange={handleChange}/>
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="text" name="address.phone" value={values.address.phone} onChange={handleChange}/>
            </div>
            <div className="fourth__second">
                <h3>Shipment date</h3>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="address.date" value={values.address.date} onChange={handleChange}/>
                <label htmlFor="hour">Hour</label>
                <input id="hour" type="text" name="address.hour" value={values.address.hour} onChange={handleChange}/>
                <label htmlFor="msg">Message</label>
                <textarea name="address.extras" id="message" onChange={handleChange} value={values.address.extras}/>
            </div>
        </div>
    )
}

export default GiveAwayFourth