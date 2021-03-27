import {useFormik} from 'formik';
import React, {useState} from "react";
import GiveAwayFirst from "../organisms/GiveAwayFirst";
import GiveAwaySecond from "../organisms/GiveAwaySecond";
import GiveAwayThird from "../organisms/GiveAwayThird";
import GiveAwayFourth from "../organisms/GiveAwayFourth";

const GiveAwayAll = () => {
    let [state, setState] = "";
    const formik = useFormik({
        initialValues: {
            what: "",
            number: "",
            location: "",
            who: "",
            name: "",
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

        },
        onSubmit: values => {
        }
    })
    console.log(formik.values);

    return (
        <section className="give__away-container">
            <form onSubmit={formik.handleSubmit}>
                <GiveAwayFirst handleChange={formik.handleChange}/>
               <GiveAwaySecond handleChange={formik.handleChange}/>
               <GiveAwayThird handleChange={formik.handleChange} values={formik.values}/>
               <GiveAwayFourth handleChange={formik.handleChange} values={formik.values}/>
                <button type="submit">submit</button>
            </form>
        </section>
    )

}

export default GiveAwayAll