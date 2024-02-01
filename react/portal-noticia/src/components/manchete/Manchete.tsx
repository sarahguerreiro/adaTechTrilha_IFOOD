import "./Manchete.css"
const Manchete = () => {
    return (<section className="Manchete">
        <div className="Manchete__descricao">
            <h1 className="Manchete__titulo">Manchete da Reportagem</h1>
            <h3 className="Manchete__sub">Subtitulo da reportagem</h3>
        </div>
        <img src="https://picsum.photos/200/300" alt="blah" className="Manchete__img"/>
    </section>)
} 

export default Manchete