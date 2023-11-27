import github from "../assets/git-icon.png"

fetch('https://api.github.com/users/gustavohonoras/repos' )
.then( async resposta => {
    if (!resposta.ok) {
    throw new Error('Erro ao carregar dados do usuário. Status: ' + resposta.status);      
    } let teste = await resposta.json()
    window.localStorage.setItem("repositorios" , JSON.stringify(teste))} )

let repositorio =  window.localStorage.getItem('repositorios')
const repos = JSON.parse(repositorio)
console.log(repos)

export const Projects = () => {
    
    return(
      <ul className="ListProject">
    {repos.map(repo => (
            <li className='ProjectCard' key={repo.id}>
                <div>
                  <h3 className="TitleProject" > {repo.name}</h3>
             <p className="Description">  {repo.description}</p>
             <a className="ButtonProject" href = {repo.html_url} target="_blank">Saiba Mais</a>  
                </div>
              
             <img src={github} alt="" />
           </li>
         ))}
      </ul>
    ) 
  }