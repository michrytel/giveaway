import Header from "../organisms/Header";
import Title from "../atoms/Title";
import {NavLink} from "react-router-dom";


const Register = () => {
    const handleSubmit = () => {}
    return (
        <>
            <Header/>
            <main>
                <div className='login__container'>
                    <Title text='Register' />
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form__inputs'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' htmlFor='email' />
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='password' htmlFor='password' />
                            <label htmlFor='passwordRepeat'>Repeat password</label>
                            <input id='passwordRepeat' type='password' />
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