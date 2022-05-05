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
                    I also develop new experiments and demonstrations, including
                    vacuum, liquid nitogen, high voltage, high current and high velocity. Sometimes
                    a great deal of sound also happens, typically when experimenting width
                    high pressure.
                    </p>

                    <a href="https://hackaday.com/" target="_blank" className="button">Hackaday</a>
                    <a href="https://github.com/TorGj" target="_blank" className="button">GitHub</a>
                </div>

                <div className="projects__card">
                    <h3>Work</h3>
                    <img src={work} alt="Work Related Content" />
                    <p>I'm a High School Science teacher. My subjects are mathematics,
                    physics, informatics. I've also done private lessons for university students
                    in mathematics. Experimenting on www at work. I've got a persoal Website, but I'm also
                    developer, content manager and contributor to my paraglider club's site. I'd like
                    some new areas to explore, so send me a message if you wold like to hire me.
                    </p>

                    <a href="https://www.akademiet.no/vgs/skolesteder/alesund/" target="_blank" className="button">Akademiet</a>
                    <a href="https://canvas.akademiet.no/" target="_blank" className="button">Canvas</a>
                </div>

                <div className="projects__card">
                    <h3>Paragliding</h3>
                    <img src={pg} alt="Paragliding" />
                    <p>
                    I'm an cross country paraglider pilot. Ranked no.11 2021 in Norway. I've between
                    paragliding since 2007. In 2013 I got my paraglider instructor license,
                     and I've been lead instructor for several beginner courses. In my area there are mountains and fjords, quite spectacular scenery.
                    </p>

                    <a href="https://gjerrestad.no" target="_blank" className="button">My Site</a>
                    <a href="https://apgk.no" target="_blank" className="button">PG Club</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
