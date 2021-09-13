import { Container, FormContainer } from './style';
import Input from '../../components/Input';
import { useState } from 'react';
import { api } from '../../services/api';
import { signIn } from "../../services/security";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

function Login (){

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        senha: ""
    })

    //INPUT GENÉRICO
    const hendleInput = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.value]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", {
                email: formLogin.email,
                password: formLogin.senha
            });

            signIn(response.data);

            history.push("/home");

            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return(
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <h1> Bem vindo ao </h1>
                <h1>SENAI-overflow</h1>
                {formLogin.email}
                <Input label="E-mail" type="email" id="email" handler={hendleInput} required/>
                <Input label="Senha" type="password" id="senha" handler={hendleInput} required/>
                <button>Entrar</button>
                <Link to="/register">Cadastre-se</Link>
            </FormContainer>
        </Container>
    );
}

export default Login;