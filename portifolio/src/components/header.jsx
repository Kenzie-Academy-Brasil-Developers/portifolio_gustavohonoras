
import Logo from "../assets/portfolio.png"

export const Header = () => {
    
    return (
            <div className="Header" >
            <img src={Logo} alt="" />
            <div  className="HeaderList"> 
                <p>Sobre</p>
                <p >Stack</p>
                <p>Projetos</p> 
            </div>
            <button className="HeaderButton">Contato</button>
        </div>
    )
}