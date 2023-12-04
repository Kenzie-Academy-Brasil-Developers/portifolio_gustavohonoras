
import styles from "./styles.module.css"
import github from "../../assets/git-icon.png"

fetch('https://api.github.com/users/gustavohonoras/repos' )
.then( async resposta => {
    if (!resposta.ok) {
    throw new Error('Erro ao carregar dados do usuário. Status: ' + resposta.status);      
    } let teste = await resposta.json()
    window.localStorage.setItem("repositorios" , JSON.stringify(teste))} )

let repositorio =  window.localStorage.getItem('repositorios')
const repos = JSON.parse(repositorio)


export const Projects = () => {
    
  return(
    <ul className={styles.ListProject}>
      {repos.map(repo => (
        <li className={styles.ProjectCard} key={repo.id}>
        <div>
          <h3 className={styles.TitleProject} > {repo.name}</h3>
          <p className={styles.Description}>  {repo.description}</p>
          <a className={styles.ButtonProject} href = {repo.html_url} target="_blank">Saiba Mais</a>  
        </div>
              
        <img src={github} alt="" />
        </li>
      ))}
    </ul>
    ) 
  }