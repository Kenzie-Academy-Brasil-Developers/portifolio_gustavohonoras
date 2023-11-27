import { Header } from "./components/header"
import { BannerSection } from "./components/BannerSection"
import { AboutMe } from "./components/AboutMe"
import { TechSection } from "./components/TechSection"
import { ProjectsSections } from "./components/ProjectsSection"
import { Footer } from "./components/Footer"
import { Projects } from "./components/ListProjects"

import "./styles/globalstyles.css"

function App() {
  

  return (
    <div className="Main">
      <Header></Header>
      <BannerSection></BannerSection>
      <AboutMe></AboutMe>
      <TechSection></TechSection>
      <ProjectsSections>
        <Projects></Projects>
      </ProjectsSections>
      <Footer></Footer>
    </div>
      
   
  )
}

export default App
