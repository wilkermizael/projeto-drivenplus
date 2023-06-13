import styled from 'styled-components';
import logohome from '../../assets/image/logo-home.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('')
    const navigate = useNavigate()
    
    function serverResponse(resposta){
         const respostaSerializado =JSON.stringify(resposta)
         localStorage.setItem("listaDados",respostaSerializado)
         console.log(respostaSerializado)
        
         if(resposta.membership === null){
            navigate('/subscriptions')
            console.log(resposta.membership, 'esse')
        }else{
            navigate('/home')
        }
        

    }
    function loginUsuario(event){
        event.preventDefault()
        const dadosLogin ={
            email:email,
            password: password
        }

        axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', dadosLogin)
        .then( response => serverResponse(response.data))
        .catch(error => console.log(error))
    }

    return(
        <LoginStyled>
           <img src={logohome} alt="" />
            <Formulario>
                <form onSubmit={loginUsuario}>
                <label htmlFor="email"></label>
                <input required value={email} type="email" name="email" id="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="password"></label>
                <input required value={password} type="password" name="password" id="password" placeholder='Senha'onChange={e => setPassWord(e.target.value)}/>
                <button type='submit'>Entrar</button>
                </form>
               
            </Formulario>
            <Link to="/sign-up">
                <p>Não possui uma conta? Cadastre-se</p>
            </Link>
        </LoginStyled> 
    )
}

const LoginStyled = styled.div`
    width: 375px;
    height: 667px;
    background-color: #0E0E13;
    margin:20px auto;

    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 80%;
        height: 48px;
        background-color: black;
    
    }
    p{
        width: 70%;
        background-color: black;
        color: white;
        position: absolute;
        bottom: 180px;
        left:80px;
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
        height: 200px;
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