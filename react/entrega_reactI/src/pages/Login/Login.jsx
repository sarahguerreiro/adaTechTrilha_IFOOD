import { useState } from "react";


const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')

  const handleSumbit = (e) => {
     e.preventDefault();// pra page nao ser recarregada
    console.log(email)
  }

  return (

    <form onSubmit={handleSumbit}>
      <label htmlFor='email'>email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

      <label htmlFor='password'>Password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>

      <button type="submit" >Log In</button>

    </form>
  );
};

export default Login;
