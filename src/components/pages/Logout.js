import Header from "../organisms/Header";
import {NavLink} from "react-router-dom";
import Title from "../atoms/Title";


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