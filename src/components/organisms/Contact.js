import React from "react";
import Title from "../atoms/Title";
import {useFormik} from "formik";

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: ``,
            email: ``,
            message: ``
        },
        validate: values => {
            let errors = {}
            if (!values.name || values.name.trim().includes(' ')) {
                errors.name = "Wrong name"
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.message.length < 120) {
                errors.message = "Message should be longer than 120 words"
            }
            return errors
        },
        onSubmit: values => {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
    })

    return (
        <div className='contact__form'>
            <Title text='Contact with us!'/>
            <form onSubmit={formik.handleSubmit}>
                <div className="form__top">
                    <div className="form__top-name">
                        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name} </div> : null}
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                    </div>
                    <div className="form__top-email">
                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email} </div> : null}
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                    </div>
                </div>
                <div className="form__bottom">
                    {formik.touched.message && formik.errors.message ? <div className='error'>{formik.errors.message} </div> : null}
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur}/>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact