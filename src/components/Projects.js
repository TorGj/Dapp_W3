// Import Assets
import experiments from '../assets/taake.jpg';
import work from '../assets/phys.jpg';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Experiments</h3>
                    <img src={experiments} alt="Experimens Developing Page" />
                    <p>This is an early prototype of my cloud chamber,
                    it is silent, light weight, cheap and instantly working. It
                    is also with 4x viewable area compared to most other models.
                    </p>

                    <a href="." target="_blank" className="button">Site</a>
                    <a href="." target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Work</h3>
                    <img src={work} alt="Work Related Content" />
                    <p>I'm a High School Science teacher. My subjects are mathematics,
                    physics, informatics.
                    </p>

                    <a href="." target="_blank" className="button">Site</a>
                    <a href="." target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Nothing here yet
                    </p>

                    <a href="." target="_blank" className="button">Site</a>
                    <a href="." target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
