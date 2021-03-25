import instagram from '../../assets/Instagram.svg';
import facebook from '../../assets/Facebook.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>Copyright by Coders Lab</p>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/'>
                    <img src={facebook} alt='facebook icon' />
                </a>
                <a href='https://www.instagram.com/'>
                    <img src={instagram} alt='instagram icon' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;