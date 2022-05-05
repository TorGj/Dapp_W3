// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Tor Gjerrestad" />

            <div className='header__content'>
                <h1>Tor Gjerrestad</h1>
                <p>Science experiments Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;
