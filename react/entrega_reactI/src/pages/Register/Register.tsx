import React, { useState, ChangeEvent, FormEvent } from "react";

interface RegisterProps {
  onFormSwitch: (formName: string) => void;
}

export const Register: React.FC<RegisterProps>= (props) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [pais, setPais] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    console.log(pais);
  };

  return (
    <div className="auth-form-container">
      <h2>Cadastro</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome completo"
          id="name"
          name="name" required
        />

        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email" required
        />

        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
          required
        />
        
        <label htmlFor="date">Data de Nascimento</label>
        <input
          value={data}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setData(e.target.value.slice(0,10))}
          type="Date"
          placeholder="DD/MM/AAAA"
          id="data"
          name="data"
          required
        />
        
        <label htmlFor="text">Estado</label>
        <input
          value={estado}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEstado(e.target.value)}
          type="text"
          placeholder="Digite o Estado que vc nasceu"
          id="estado"
          name="estado"
          required
        />
        
        <label htmlFor="text">País</label>
        <input
          value={pais}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPais(e.target.value)}
          type="Enum"
          placeholder="Digite o país que vc nasceu"
          id="pais"
          name="pais"
          required
        />


        <button type="submit"> Cadastrar </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Já tem uma conta? Entre aqui</button>
    </div>
  );
};

export default Register;
