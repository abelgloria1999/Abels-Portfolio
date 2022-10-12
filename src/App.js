// Below are imported components
import Nav from "./Components/Nav-Component/Nav";
import Title from "./Components/Title-Componet/Title";
import AboutMe from "./Components/AboutMe-Component/AboutMe";
import Skill from "./Components/Skills-Components/Skills";
import Projects from "./Components/Projects-Component/Projects";
import Languages from "./Components/Languages-Component/Languages";
import Footer from "./Components/Footer-Components/Footer";

//Below are imported css files
import './Components/Nav-Component/Nav.css'
import './Components/Title-Componet/Title.css'
import './Components/AboutMe-Component/AboutMe.css'
import './Components/Skills-Components/Skills.css'
import './Components/Projects-Component/Projects.css'
import './Components/Languages-Component/Languages.css'
import './Components/Footer-Components/Footer.css'

//Below are imported data
import skillsData from "./skills-data";
import projectsData from "./projectsData";
import languagedata from "./languagedata";
import footerData from "./footerData";


// app component below 
function App() {
  const footerLInk = footerData.map(item =>{
    return(
      <Footer
      key={item}
      {...item}
      />
    )
  })
  
  const codeSkill = skillsData.map(item => {
    return(
      <Skill
        key={item}
        {...item}
      />
    )
  })

  const project = projectsData.map(item =>{
    return(
      <Projects
      key={item}
      {...item}
      />
    )
  })

  const language = languagedata.map(item =>{
    return(
      <Languages
        key={item}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Nav/>
      <Title/>
      <AboutMe/>
      <section id="skills-section" className="skills-container">
        <h2>Skills</h2>
        <div className="skill-box">
          {codeSkill}
        </div>
      </section>
      <section id='projects-section' className="projects-container">
        <h2>Projects</h2>
        <div className="project-box">
          {project}
        </div>
      </section>
      <section id="language-section" className="language-container" >
        <div className="title-conainer-l">
        <h2>Languages</h2>
        </div>
        <div className="language-box">
          {language}      
        </div>
      </section>
      <footer id="footer-section" className="footer-container">
        {footerLInk}
      </footer>
    </div>
  );
}

export default App;
