import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome completo"
          id="name"
          name="name"
        />

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
      <button>Já tem uma conta? Entre aqui</button>
    </>
  );
};

export default Register;
