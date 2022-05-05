// Import Assets
import experiments from '../assets/taake.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Experiments</h3>
                    <img src={experiments} alt="Uniswap Swap Page" />
                    <p>This is an early prototype of my cloud chamber,
                    it is silent, light weight, cheap and instantly working. It
                    is also with 4x viewable area compared to most other models.
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Nothing here yet
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Nothing here yet
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
