import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header"></div>
        <nav>
          <ul className="navbar">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Educations</a>
            </li>
            <li>
              <a href="#certification">Certifications</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="emp">Hire me as an Employee</button>
          <button className="int">Hire me as a trainee</button>
        </div>
      </header>

      <section className="home-page" id="about">
        <div className="description">
          <p className="first-line">
            Hi, I'm a Ala Eddine Saihi<h1>FullStuck Developer</h1>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            vitae officiis facilis ullam quaerat illo rem magnam maiores nostrum
            sapiente.
          </p>
        </div>
        <div className="card">
          <div className="first-content">
            <div className="img-photo"></div>
          </div>
          <div className="second-content">
            <div className="contacts">
              <p>Find me in</p>
              <div className="icons">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1>Education</h1>
        <div>
          <i className="fa-solid fa-circle"></i>
          <div className="education-card">
            <h2>
              Higher Institute of Applied Sciences and Technology of Kasserine,
              Tunisia
            </h2>
            <h3>Bachlor Degree in Computer Sciences | 09/2022 - 06/2025</h3>
          </div>
          <i className="fa-solid fa-circle"></i>
          <div className="education-card">
            <h2>Kasserine High School, Tunisia</h2>
            <h3>High School Degree, Mathematics Section | 09/2021 - 06/2022</h3>
          </div>
        </div>
      </section>

      <section className="education" id="certification">
        <h1>Certifications</h1>
        <div>
          <i className="fa-solid fa-circle"></i>
          <div className="education-card">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <i className="fa-solid fa-circle"></i>
          <div className="education-card">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h1>My Recent Works</h1>
        <div className="project-list">
          <div className="project">
            <img src="/todolist.png" alt="" />
            <div className="desc">
              <h2>To-Do-List</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                quo!
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/calcul.png" alt="" />
            <div className="desc">
              <h2>Calculator-App</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                quo!
              </p>
            </div>
          </div>
          <div className="project">
            <img src="/rizervini.png" alt="" />
            <div className="desc">
              <h2>Rizervini</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
                quo!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h1>My Skills</h1>
        <div className="skills-list">
          <div className="skill">
            <h4>
              <i className="fa-brands fa-html5"></i> HTML
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-css3-alt"></i> CSS
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-react"></i> ReactJS
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-js"></i> JavaScript
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-java"></i> Java
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-java"></i> C++
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
          <div className="skill">
            <h4>
              <i className="fa-brands fa-java"></i> C
            </h4>
            <div className="level-bar">
              <div className="level"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
