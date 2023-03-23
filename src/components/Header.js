// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Tor Gjerrestad" />

            <div className='header__content'>
                <h1>Tor Gjerrestad</h1>
                <p>Science Experiments Developer</p>
                <a href="mailto:tortur@gmail.com" className="button">Send mail</a>
            </div>
        </section>
    );
}

export default Header;
