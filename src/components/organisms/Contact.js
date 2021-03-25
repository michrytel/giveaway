import React, {useState} from "react";
import Title from "../atoms/Title";

const Contact = () => {
    return (
        <div className='contact__form'>
            <Title text='Skontaktuj się z nami'/>
            <form>
                <div className="form__top">
                    <div className="form__top-name">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div className="form__top-email">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                </div>
                <div className="form__bottom">
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" id="msg"/>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact