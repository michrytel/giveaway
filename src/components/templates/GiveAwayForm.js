import {useFormik} from 'formik';
import React, {useState} from "react";
import GiveAwayFirst from "../organisms/GiveAwayFirst";
import GiveAwaySecond from "../organisms/GiveAwaySecond";
import GiveAwayThird from "../organisms/GiveAwayThird";
import GiveAwayFourth from "../organisms/GiveAwayFourth";
const GiveAwayForm = () => {
    let [visibility, setVisibility] = useState(1);
    let [firstButtonDisplay, setFirstButtonDisplay] = useState(false)
    let [secondButtonDisplay, setSecondButtonDisplay] = useState(false)
    let [thirdButtonDisplay, setThirdButtonDisplay] = useState(false)
    const formik = useFormik({
        initialValues: {
            what: "",
            number: "1",
            location: "",
            who: "",
            locationAlt: "",
            address: {
                street: "",
                city: "",
                postal: "",
                phone: "",
                date: "",
                hour: "",
                extras: ""
            }
        }, validate: values => {
            let errors = {}
            if (values.what !== "") {
                setFirstButtonDisplay(true)
            }
            if (values.who !== "" && values.who.length !== 0 && (values.location !== "" || values.locationAlt !== "")) {
                setSecondButtonDisplay(true)
            } else {
                setSecondButtonDisplay(false)
            }
            if (values.location === "" && values.locationAlt.length < 5) {
                setSecondButtonDisplay(false)
                errors.locationAlt = "Please enter correct address"
            }
            /*ADDRESS INFO VALIDATION*/
            if (values.address.street === "" || values.address.street.length < 3) {
                errors.street = "Please insert correct street address"
            }
            if (values.address.city === "" || values.address.city.length < 3) {
                errors.city = "Please insert correct city"
            }
            if (!values.address.postal.match(/^\d\d-\d\d\d$/)) {
                errors.postal = "Please insert correct postal code"
            }
            if ((!/^[0-9]+$/.test(values.address.phone) || values.address.phone.length !== 9)) {
                errors.phone = "Please insert correct phone number"
            }
            if (values.address.date === "") {
                errors.date = "Please insert correct date"
            }
            if (!values.address.hour.match(/^\d\d:\d\d$/)) {
                errors.hour = "Please insert correct hour (XX:YY)"
            }
            if (!errors.street && !errors.city && !errors.postal && !errors.phone && !errors.date && !errors.hour) {
                setThirdButtonDisplay(true)
            } else {
                setThirdButtonDisplay(false)
            }

            console.log(errors);

            return errors
        },
        onSubmit: values => {
            console.log(values);
        }
    })
    console.log(formik.values);
    const nextButton = () => setVisibility(visibility + 1)
    const prevButton = () => setVisibility(visibility - 1)
    return (
        <section className="give__away-container">
            <form onSubmit={formik.handleSubmit}>
                {visibility === 1 ?
                    <>
                        <GiveAwayFirst handleChange={formik.handleChange} values={formik.values}/>
                        <div className="give__away-buttons">
                            {firstButtonDisplay ?  <button onClick={nextButton}>Next</button> : null}
                        </div>
                    </> : null}
                {visibility === 2 ?
                <>
                    <GiveAwaySecond handleChange={formik.handleChange}/>
                    <div className="give__away-buttons">
                        <button onClick={prevButton}>Previous</button>
                        <button onClick={nextButton}>Next</button>
                    </div>
                </> : null}
                {visibility === 3 ?
                <>
                    <GiveAwayThird handleChange={formik.handleChange} values={formik.values}/>
                    <div className="give__away-buttons">
                        <button onClick={prevButton}>Previous</button>
                        {secondButtonDisplay ?  <button onClick={nextButton}>Next</button> : null}
                    </div>
                </> : null}
                {visibility === 4 ?
                <>
                    <GiveAwayFourth handleChange={formik.handleChange} values={formik.values}/>
                    <div className="give__away-buttons">
                        <button onClick={prevButton}>Previous</button>
                        {thirdButtonDisplay ?  <button onClick={nextButton}>Next</button> : null}
                    </div>
                </> : null}
                {visibility === 5 ?
                    <div className="step__last">
                        <div className="results__first">
                            <p>{formik.values.number} bags, {formik.values.what}, {formik.values.who}</p>
                        </div>
                        <div className="give__away-buttons">
                            <button onClick={prevButton}>Previous</button>
                            <button type="submit">submit</button>
                        </div>
                    </div> : null}

            </form>
        </section>
    )

}

export default GiveAwayForm