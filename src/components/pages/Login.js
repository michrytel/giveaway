import {NavLink} from "react-router-dom";
import Title from "../atoms/Title";
import {useFormik} from "formik";
import Header from "../organisms/Header";
import {useAuth} from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";



const Login = () => {
    const history = useHistory()
    const { login } = useAuth()
        const formik = useFormik({
            initialValues: {
                email: ``,
                password: ``
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
                return errors
            },
            onSubmit: values => {
                login(values.email, values.password)
                history.push("/")

        }})
    return (
        <>
            <Header navbar={false} firstLink={"/"} firstName={"Home"} secondLink={"/register"} secondName={"Register"}/>
            <main>
                <div className='login__container'>
                    <Title text='Login' />
                    <form className='form' onSubmit={formik.handleSubmit}>
                        <div className='form__inputs'>
                            <label htmlFor='email'>Email</label>
                            {formik.touched.email && formik.errors.email ? <div className='error__user'>{formik.errors.email} </div> : null}
                            <input id='email' type='email' htmlFor='email'onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                            <label htmlFor='password'>Password</label>
                            {formik.touched.password && formik.errors.password ? <div className='error__user'>{formik.errors.password} </div> : null}
                            <input id='password' type='password' htmlFor='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        </div>
                        <div className='form__btns'>
                            <NavLink to='/register' activeClassName='active'>
                                Register
                            </NavLink>
                            <button type='submit'>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login;