import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Cadastro(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()
    let dadosUsuario = {}
    function cadastroUsuario(event){
        
        event.preventDefault()
        dadosUsuario = {
            
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }
        axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',dadosUsuario)
        .then(navigate('/'))
        .catch( error =>console.log(error.message))
        
    }

    
    
    return(
        <CadastroStyled>
            <Formulario>
                <form onSubmit={cadastroUsuario}>
                <label htmlFor="nome"></label>
                <input required type="text" value={name} name="nome" id="nome" placeholder='Nome' onChange={ e => setName(e.target.value)}/>
                <label htmlFor="cpf"></label>
                <input required type="text" value={cpf} name="cpf" id="cpf" placeholder='CPF' onChange={ e => setCpf(e.target.value)}/>
                <label htmlFor="email"></label>
                <input required type="email" value={email} name="email" id="email" placeholder='Email'onChange={ e => setEmail(e.target.value)}/>
                <label htmlFor="password"></label>
                <input required type="password" value={password} name="password" id="password" placeholder='Senha'onChange={ e => setPassWord(e.target.value)}/>
                <button type='submit'>Cadastrar</button>
                </form>
               
            </Formulario>
            <Link to="/">
                <p>Já possui uma conta? Entre</p>
            </Link>

        </CadastroStyled>
    )
}

const CadastroStyled = styled.div`
    width: 375px;
    height: 667px;
    background-color: #0E0E13;
    margin:20px auto;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;

    p{
        width: 70%;
        background-color: black;
        color: white;
        position: absolute;
        bottom: 150px;
        left:100px;
        text-decoration: underline;
    }
`;

const Formulario = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
   
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: black;
    }
    input{
        width: 100%;
        height: 50px;
        border-radius:10px;
        margin-top: 10px;
    }
    button{
        width: 103%;
        height: 50px;
        border-radius: 10px;
        margin-top: 10px;
        background-color: #FF4791;
        color: white;
        font-weight:700;
        font-size: 14px;
    }
    
`;