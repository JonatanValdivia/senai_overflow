import { Container, FormContainer } from './style';
import Input from '../../components/Input';

function Login (){
    return(
        <Container>
            <FormContainer>
                <h1> Bem vindo ao </h1>
                <h1>SENAI-overflow</h1>
                <Input label="E-mail" id="email"/>
                <Input label="Senha" id="senha"/>
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}

export default Login;