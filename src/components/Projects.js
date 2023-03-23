// Import Assets
import experiments from '../assets/taake.jpg';
import work from '../assets/phys.jpg';
import pg from '../assets/pg.jpg';
import vann from '../assets/vann.jpg';
import mc from '../assets/mc.png';
import fam from '../assets/fam.jpg';

const Projects = () => {
    return (
        <section className="projects">
            <h2>What I do</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Experiments</h3>
                    <img src={experiments} alt="Experiments Developer" />
                    <p> This is my early prototype of a cloud
                        chamber, it is silent, light weight, 
                        cheap and instantly working. I is also
                        with 4x viewable area compared to 
                        most other models. I also develop new 
                        experiments and demonstrations, 
                        including, vacuum, liquid nitogen, high 
                        voltage, high current and high velocity. 
                        Sometimes a great deal of sound also 
                        happens, typically when experimenting 
                        width high pressure.
                    </p>

                    <a href="https://hackaday.com/" target="_blank" rel="noreferrer" className="button">Hackaday</a>
                    <a href="https://github.com/TorGj" target="_blank" rel="noreferrer" className="button">GitHub</a>
                </div>

                <div className="projects__card">
                    <h3>Work</h3>
                    <img src={vann} alt="Automation Engineer" />
                    <p> My work is Supervisory Control and 
                        Data Acquisition (SCADA) development 
                        for Ålesund municipality's water 
                        treatment plant and sewage treatment.
                        Sensors are installed and configured 
                        by me before connection. Choosing 
                        between competing technologies can 
                        be exciting and challenging. Contact 
                        with service and equipment suppliers 
                        requires personal engagement.
                    </p>

                    <a href="https://alesund.kommune.no/veg-vatn-og-avlop/vatn-og-avlop/" target="_blank" rel="noreferrer" className="button">Water/Sewage</a>
                    <a href="https://en.wikipedia.org/wiki/SCADA" target="_blank" rel="noreferrer" className="button">SCADA</a>
                </div>

                <div className="projects__card">
                    <h3>Paragliding</h3>
                    <img src={pg} alt="Paragliding" />
                    <p> I'm an cross country paraglider pilot. 
                        Ranked no.11 2021 in Norway. I've between
                        paragliding since 2007. In 2013 I got my
                        paraglider instructor license, and I've 
                        been lead instructor for several beginner
                        courses. In my area there are mountains 
                        and fjords, quite spectacular scenery.
                    </p>

                    <a href="https://gjerrestad.no" target="_blank" rel="noreferrer" className="button">My Site</a>
                    <a href="https://apgk.no" target="_blank" rel="noreferrer" className="button">PG Club</a>
                </div>
                
                <div className="projects__card">
                    <h3>Science Teacher</h3>
                    <img src={work} alt="High School Science Teacher" />
                    <p> I was a high school science teacher. 
                        My subjects was physics, mathematics,  
                        informatics. I've also done private lessons for university
                        students in mathematics. I've got a self made 
                        persoal Website, with focus on software development,
                        and related science subjects. Science videos has
                        been published at YouToube and TikTok.
                    </p>

                    <a href="https://www.akademiet.no/vgs/skolesteder/alesund/" target="_blank" rel="noreferrer" className="button">Akademiet</a>
                    <a href="https://canvas.akademiet.no/" target="_blank" rel="noreferrer" className="button">Canvas</a>
                </div>


                <div className="projects__card">
                    <h3>Electric Offroad</h3>
                    <img src={mc} alt="Motorcycle" />
                    <p> I like nature, but I need strong input. 
                        Electric motocycles can offer low weight,
                        silent operation, high reliability, 
                        low maintainance cost. No one is bothered about
                        invisible, inaudible and careful riders,
                        this can mean access to more nature. 
                        If pictured bike is what you choose.
                    </p>

                    <a href="https://www.talaria.cn/" target="_blank" rel="noreferrer" className="button">Talaria</a>
                    <a href="" target="_blank" rel="noreferrer" className="button">MC-route</a>
                </div>


                <div className="projects__card">
                    <h3>Family</h3>
                    <img src={fam} alt="My family" />
                    <p> I'm lucky to have a moderatly seized family
                        with all four of my kids grandparents beeing 
                        supportive and in reasonally good health. This 
                        summer (2023) we will travel to USA for three
                        weeks during USA-cup (soccer). 
                    </p>

                </div>
            </div>
        </section>
    );
}

export default Projects;
