export const Login = () => {
  return (
    <form>
      <label for='email'>email</label>
      <input type="email" placeholder="youremail@gmail.com" id="email" name="email"/>

      <label for='password'>Password</label>
      <input type="password" placeholder="******" id="password" name="password"/>
    </form>
  );
};

export default Login;
