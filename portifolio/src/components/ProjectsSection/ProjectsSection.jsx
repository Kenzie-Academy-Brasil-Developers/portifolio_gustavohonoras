import styles from "./styles.module.css"

export const ProjectsSections =({ children }) =>{
    return(
        <div className={styles.ProjectSectionsController}>
            <div className={styles.ProjectSections}>
                <p className={styles.Title}> Projetos</p>
                <div> {children} </div>
            </div>   
        </div>
       
    )
}