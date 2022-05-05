// Import Assets
import experiments from '../assets/taake.jpg';
import work from '../assets/phys.jpg';
import pg from '../assets/pg.jpg';

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

                    <a href="https://hackaday.com/" target="_blank" className="button">Hackaday</a>
                    <a href="https://github.com/TorGj" target="_blank" className="button">GitHub</a>
                </div>

                <div className="projects__card">
                    <h3>Work</h3>
                    <img src={work} alt="Work Related Content" />
                    <p>I'm a High School Science teacher. My subjects are mathematics,
                    physics, informatics.
                    </p>

                    <a href="https://www.akademiet.no/vgs/skolesteder/alesund/" target="_blank" className="button">School</a>
                    <a href="https://canvas.akademiet.no/" target="_blank" className="button">Canvas</a>
                </div>

                <div className="projects__card">
                    <h3>Paragliding</h3>
                    <img src={pg} alt="My WWW Sites" />
                    <p>Experimenting on www, this is my Website, but I'm also
                    content manager and contributor to my paragliger club's page.
                    </p>

                    <a href="https://gjerrestad.no" target="_blank" className="button">Site</a>
                    <a href="https://apgk.no" target="_blank" className="button">PG Club</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
