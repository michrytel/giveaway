import StatusBar from "../User/StatusBar";

const Header = () => {
    return (
        <header className="header__container">
            <StatusBar/>
            <ul className="header__nav">
                <li>Start</li>
                <li>What's about</li>
                <li>About us</li>
                <li>Fundations and organizations</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default Header
