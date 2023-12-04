import { Header } from "../header/header"
import { Footer } from "../Footer/Footer"

export const PagesTemplate = ({ children }) =>{
return(
    <>
    <Header/>
    <main>
        { children } 
    </main>
    <Footer/>
    </>
)
    
}