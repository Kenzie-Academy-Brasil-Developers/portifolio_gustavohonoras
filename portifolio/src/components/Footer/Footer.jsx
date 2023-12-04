import styles from "./styles.module.css"
import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <div className={styles.FooterController}>
          <div className={styles.Footer}>
                <div className={styles.TitleImgFooter}>
                     <p className={styles.Title}> Contato</p>
                     <div className={styles.ImgsFooter}> 
                        <a href="https://wa.me/5588997856125"><img src={whatsapp} alt="logo whatsapp" /> </a>
                        <a href="https://www.linkedin.com/in/gustavo-honorato-6338b2127/"> <img src={linkedin} alt="logo linkedin" /></a>
                        <a href="https://github.com/Gustavohonoras">  <img src={github} alt="logo github" /> </a>
                    </div>
                </div>
            <p className={styles.TextFooter}>Todos os Direitos Reservados - Gustavo Honorato Cordeiro</p>
            
          </div>  
        </div>
        
    )
}