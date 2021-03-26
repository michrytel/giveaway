import Header from "../organisms/Header";
import {NavLink} from "react-router-dom";
import Title from "../atoms/Title";


const Login = () => {
    const handleSubmit = () => {

    }
    return (
        <>
            <Header/>
            <main>
                <div className='login__container'>
                    <Title text='Login' />
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form__inputs'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' type='email' htmlFor='email' />
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='password' htmlFor='password' />
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