import React, { useState } from "react";

interface LoginProps {
  onFormSwitch: (form: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // pra page nao ser recarregada
    console.log(email, pass);
  };

  return (

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
          required
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          required
        />
        <button type="submit"> Log In </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Não tem uma conta? Cadastre-se aqui!</button>
    </div>
  );
};

export default Login;
