import { PagesTemplate } from "./components/PagesTemplate/PagesTemplate"
import { BannerSection } from "./components/BannerSection/BannerSection"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { TechSection } from "./components/TechSection/TechSection"
import { ProjectsSections } from "./components/ProjectsSection/ProjectsSection"
import { Projects } from "./components/ListProjects/ListProjects"

import "./styles/globalstyles.css"

const App = () => {
  

  return (
    <div className="background">
      <PagesTemplate>
        <BannerSection/>
        <AboutMe/>
        <TechSection/>
        <ProjectsSections>
          <Projects/>
        </ProjectsSections>
      </PagesTemplate>
    </div>
   
   
  )
}

export default App
