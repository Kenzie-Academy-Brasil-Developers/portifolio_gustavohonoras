import styles from "./styles.module.css"
import Logo from "../../assets/portfolio.png"

export const Header = () => {
    
    return (
            <div className={styles.Header} >
            <img src={Logo} alt="" />
            <div  className={styles.HeaderList}> 
                <p>Sobre</p>
                <p >Stack</p>
                <p>Projetos</p> 
            </div>
           <a href="https://wa.me/5588997856125"><button className={styles.HeaderButton}>Contato</button></a> 
        </div>
    )
}