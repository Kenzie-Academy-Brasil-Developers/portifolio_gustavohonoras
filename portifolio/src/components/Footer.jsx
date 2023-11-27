import whatsapp from "../assets/whatsapp-icon.png"
import linkedin from "../assets/linkedin-icon.png"
import github from "../assets/github-icon.png"

export const Footer = () => {
    return (
        <div className="FooterController">
          <div className="Footer">
                <div className="TitleImgFooter">
                     <p className="Title"> Contato</p>
                     <div className="ImgsFooter"> 
                        <a href="https://wa.me/5588997856125"><img src={whatsapp} alt="" /> </a>
                        <a href="https://www.linkedin.com/in/gustavo-honorato-6338b2127/"> <img src={linkedin} alt="" /></a>
                        <a href="https://github.com/Gustavohonoras">  <img src={github} alt="" /> </a>
                    </div>
                </div>
            <p className="TextFooter">Todos os Direitos Reservados - Gustavo Honorato Cordeiro</p>
            
          </div>  
        </div>
        
    )
}