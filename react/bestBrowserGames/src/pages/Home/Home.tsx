import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to='/cadastro'>
                <button>Sou novo aqui</button>
            </Link>
            <Link to="/login">
                <button>Já tenho cadastro</button>
            </Link>
        </div>
    )
}

export default Home