    import html from "../assets/html-icon.png"
    import css from "../assets/css-icon.png"
    import javascript from "../assets/js-icon.png"
    import react from "../assets/react-icon.png"
    
    export const TechSection = () =>{
        return (
            <div className="TechSectionControler">
                <div className="TechSection">
                    <p className="Title">Tecnologias</p>
                    <div className="TechList">
                        <div className="TechCard">
                            <p className="TechText">HTML</p>
                            <img src={html} alt="" />
                        </div>
                        <div className="TechCard">
                            <p className="TechText">CSS</p>
                            <img src={css} alt="" />
                        </div>
                        <div className="TechCard">
                            <p className="TechText">JavaScript</p>
                            <img src={javascript} alt="" />
                        </div>
                        <div className="TechCard">
                            <p className="TechText">React</p>
                            <img src={react} alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }