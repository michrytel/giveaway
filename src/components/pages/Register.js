import Header from "../organisms/Header";
import Title from "../atoms/Title";
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: ``,
            password: ``,
            passwordRepeat: ''
        },
        validate: values => {
            let errors = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length < 6) {
                errors.password = "Password should be longer than 6"
            }
            if (values.passwordRepeat.length < 6 || values.password !== values.passwordRepeat) {
                errors.passwordRepeat = "Invalid password"
            }
            return errors
        },
        onSubmit: values => {
        }})
    return (
        <>
            <Header/>
            <main>
                <div className='login__container'>
                    <Title text='Register' />
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='form__inputs'>
                            <label htmlFor='email'>Email</label>
                            {formik.touched.email && formik.errors.email ? <div className='error__user'>{formik.errors.email} </div> : null}
                            <input id='email' type='email' htmlFor='email'onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                            <label htmlFor='password'>Password</label>
                            {formik.touched.password && formik.errors.password ? <div className='error__user'>{formik.errors.password} </div> : null}
                            <input id='password' type='password' htmlFor='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                            <label htmlFor='passwordRepeat'>Repeat password</label>
                            {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? <div className='error__user'>{formik.errors.passwordRepeat} </div> : null}
                            <input id='passwordRepeat' type='password' htmlFor='passwordRepeat' onChange={formik.handleChange} value={formik.values.passwordRepeat} onBlur={formik.handleBlur} />
                        </div>
                        <div className='form__btns'>
                            <NavLink to='/login' activeClassName='active'>
                                Login
                            </NavLink>
                            <button type='submit'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Register;