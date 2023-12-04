
import { technologies }  from "../../data/technologies"
import styles from "./styles.module.css"


    export const TechSection = () =>{
        return (
            <div className={styles.TechSectionControler}>
                <div className={styles.TechSection}>
                    <p className={styles.Title}>Tecnologias</p>
                    <div className={styles.TechList}>
                        {technologies.map(tech => (
                            <div className={styles.TechCard}>
                                <p className={styles.TechText}>{tech.name}</p>
                                <img src={tech.img} alt="" />
                            </div>
                
                        ))}
                    </div>
                    
                </div>

            </div>
        )
    }
    