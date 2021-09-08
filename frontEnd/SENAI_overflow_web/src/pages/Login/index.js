import { Container, FormContainer } from './style';
import Input from '../../components/Input';
import { useState } from 'react';
import { api } from '../../services/api';

function Login (){
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
            </FormContainer>
        </Container>
    );
}

export default Login;