import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UseContext.jsx";
import useForm from "../../hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    if (username.validate() && password.validate()) {
      event.preventDefault();
      if (username.validate() && password.validate()) {
        userLogin(username.value, password.value);
      }
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
