import image from "../../assets/Background-Contact-Form.jpg";
import React from "react";
import Contact from "../organisms/Contact";

const HomeContact = () => {
    return (
        <section className='contact'>
            <img src={image}/>
            <Contact/>
        </section>
    )
}

export default HomeContact