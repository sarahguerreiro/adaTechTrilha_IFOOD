import "./Manchete.scss"

type MancheteProps = {
    titulo: string;
    subtitulo: string;
    imagem: string;
}

export const Manchete = (props: MancheteProps) => {
    return (
    <section className="Manchete">

        <div className="Manchete__descricao">
            <h2 className="Manchete__titulo">Estudantes da Ada encontram emprego em 2024</h2>
            <span className="Manchete__sub">Todos os alunos da turma 1097 foram contratados!</span>
        </div>
        <img src="https://picsum.photos/200/300" alt="blah" className="Manchete__img"/>

    </section>)
} 

export default Manchete;