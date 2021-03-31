import tshirt from "../../assets/Icon-1.svg"
import refresh from "../../assets/Icon-4.svg"

const GiveAwayFifth = ({values}) => {
    let who
    if (values.who.length > 1) {
        who = values.who.join(", ")
    } else {
        who = values.who
    }
    return (
        <div className="results__container">
            <h3>Donation Summary</h3>
            <div className="results__top">
                <h3>You want donate:</h3>
                <div className="top__what">
                    <img src={tshirt}/>
                    <p>{values.number} bag(s) of {values.what} for {who}</p>
                </div>
                <div className="top__where">
                    <img src={refresh}/>
                    <p>For location: {values.location} {values.locationAlt}</p>
                </div>
            </div>
            <div className="results__bottom">
                <div className="address">
                    <h3>Address</h3>
                    <p>Street: {values.address.street}</p>
                    <p>City: {values.address.city}</p>
                    <p>Postal: {values.address.postal}</p>
                    <p>Phone: {values.address.phone}</p>
                </div>
                <div className="date">
                    <h3>Receipt date</h3>
                    <p>Date: {values.address.date}</p>
                    <p>Hour: {values.address.hour}</p>
                    <p>Message: {values.address.extras}</p>
                </div>
            </div>
        </div>
    )
}

export default GiveAwayFifth