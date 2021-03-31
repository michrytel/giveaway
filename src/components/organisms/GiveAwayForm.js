import {useFormik} from 'formik';
import React, {useState} from "react";
import GiveAwayFirst from "../molecules/GiveAwayFirst";
import GiveAwaySecond from "../molecules/GiveAwaySecond";
import GiveAwayThird from "../molecules/GiveAwayThird";
import GiveAwayFourth from "../molecules/GiveAwayFourth";
import GiveAwayHelper from "../atoms/GiveAwayHelper";
import GiveAwayFifth from "../molecules/GiveAwayFifth";
import Title from "../atoms/Title";

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

            return errors
        },
        onSubmit: values => {
            console.log(values);
            setVisibility(visibility + 1)
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
                        <GiveAwayHelper title={"Important!"}
                                        text={"Complete the details of your belongings. Thanks to this, we will know who is best to pass them on."}/>
                        <div className="step">
                            <GiveAwayFirst handleChange={formik.handleChange} values={formik.values}/>
                            <div className="give__away-buttons">
                                {firstButtonDisplay ? <button onClick={nextButton}>Next</button> : null}
                            </div>
                        </div>
                    </>
                    : null}
                {visibility === 2 ?
                    <>
                        <GiveAwayHelper title={"Important!"}
                                        text={"Pack all the things you want to donate in 60 liter bags."}/>
                        <div className="step">
                            <GiveAwaySecond handleChange={formik.handleChange}/>
                            <div className="give__away-buttons">
                                <button onClick={prevButton}>Previous</button>
                                <button onClick={nextButton}>Next</button>
                            </div>
                        </div>
                    </> : null}
                {visibility === 3 ?
                    <>
                        <GiveAwayHelper title={"Important!"}
                                        text={"If you know who you want to help, you can enter the name of this organization in the search engine. You can also filter organizations by their location or the purpose of their help."}/>
                        <div className="step">
                            <GiveAwayThird handleChange={formik.handleChange} values={formik.values}/>
                            <div className="give__away-buttons">
                                <button onClick={prevButton}>Previous</button>
                                {secondButtonDisplay ? <button onClick={nextButton}>Next</button> : null}
                            </div>
                        </div>

                    </> : null}
                {visibility === 4 ?
                    <>
                        <GiveAwayHelper title={"Important!"}
                                        text={"Enter the address and the date of receipt of things."}/>
                        <div className="step">
                            <GiveAwayFourth handleChange={formik.handleChange} values={formik.values}/>
                            <div className="give__away-buttons">
                                <button onClick={prevButton}>Previous</button>
                                {thirdButtonDisplay ? <button onClick={nextButton}>Next</button> : null}
                            </div>
                        </div>

                    </> : null}
                {visibility === 5 ?
                    <>
                        <GiveAwayHelper title={"Important!"}
                                        text={"Make sure all the details are correct."}/>
                        <div className="step">
                            <GiveAwayFifth values={formik.values}/>
                            <div className="give__away-buttons">
                                <button onClick={prevButton}>Previous</button>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </>
                    : null}
                {visibility === 6 ?
                    <>
                        <div className="step">
                            <Title text="Thank you for submitting the form. We will send you all information about the receipt by e-mail."/>
                        </div>
                    </>
                    : null}
            </form>
        </section>
    )

}

export default GiveAwayForm