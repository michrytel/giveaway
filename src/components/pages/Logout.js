import {NavLink} from "react-router-dom";
import Title from "../atoms/Title";
import Header from "../organisms/Header";


const Logout = () => {
    return (
        <>
            <Header/>
            <div className='logout__container'>
                <Title text='You are logged out!' />
                <div className='logout__btn'>
                    <NavLink to='/' activeClassName='active'>
                        Main page
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Logout;