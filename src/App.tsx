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
              <a href="#">Certifications</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skills</a>
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
    </>
  );
}

export default App;
