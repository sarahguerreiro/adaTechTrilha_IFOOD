import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <button>Já tenho cadastro</button>
            <Link to="/login">
                <button>Sou novo aqui</button>
            </Link>
        </div>
    )
}

export default Home