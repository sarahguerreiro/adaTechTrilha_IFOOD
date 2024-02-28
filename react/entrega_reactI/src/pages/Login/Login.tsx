import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // pra page nao ser recarregada
    console.log(email);
  };

  return (
/*O uso de <></> é conhecido como fragment syntax no React. Um fragment é uma maneira de agrupar vários elementos filhos sem adicionar nós extras ao DOM.  Assim, você pode usar <></> como um invólucro sem adicionar elementos extras ao DOM. Então, quando você precisa retornar múltiplos elementos adjacentes em um componente React sem criar um elemento extra no DOM, vale a pena envolve-los com <></>.
Aqui, o <></> está envolvendo o <form>, <label>, <input>, e <button>. Isso permite que todos esses elementos sejam retornados como uma única entidade no componente, sem adicionar um nó extra ao DOM:*/
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit"> Log In </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Não tem uma conta? Cadastre-se aqui!</button>
    </div>
  );
};

export default Login;
