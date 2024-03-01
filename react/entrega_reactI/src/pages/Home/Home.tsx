import React, { useEffect, useState } from "react";

const HomePage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            setIsLoggedIn(true);
        } else {
            window.location.href = "/src/pages/Login"
        }
    }, [])

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Bem-viado a Pagina inicial</h1>
                    {/*conteudo do dashboard*/}
                </div>
            ) : (
                <p>redirecionando p login</p>
            )}
        </div>
    )
}

export default HomePage;