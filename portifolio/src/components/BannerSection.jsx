import img from "../assets/banner-img.png"

export const BannerSection = () => {
    return (
        <div className="BannerSection">
            <div className="BannerSectionTexts">
                <p className="BannerTitle">Gustavo Honorato</p>
                <p className="Title">Bem vindo ao meu portfólio</p>
                <p className="Text">Uma frase interessante sobre mim</p>
                <button className="ButtonSectionBanner">Saiba Mais</button> 
            </div>
            <img src={img} alt="Imagem computador" />
        </div>
    )
}