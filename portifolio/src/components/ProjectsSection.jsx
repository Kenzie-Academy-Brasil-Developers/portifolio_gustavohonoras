import git from "../assets/git-icon.png"
import { Projects } from "./ListProjects"

export const ProjectsSections =() =>{
    return(
        <div className="ProjectSectionsController">
            <div className='ProjectSections'>
                <p className="Title"> Projetos</p>
                <Projects></Projects> 
            </div>   
        </div>
       
    )
}