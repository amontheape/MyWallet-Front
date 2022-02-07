import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Title, Form, Input, SubmitButton, StyledLink } from '../../style/style';
import { AuthContext } from '../../contexts/authContext';

function Login() {  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  function handleLogin({ email, password }) {
    setIsLoginLoading(true);

    axios.post('http://localhost:5000/login', { email, password })
      .then( ({data}) => {
        setUser(data);
        setIsLoginLoading(false);
        navigate('/home');
      } )
      .catch( (err) => console.log(err) );
  }

  return (
    <>
      <Title>MyWallet</Title>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input type='email' {
          ...register('email', { required: 'Este campo é obrigatório' })}
          placeholder='E-mail'
          disabled={isLoginLoading}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type='password' {
          ...register('password', {
              required: 'Este campo é obrigatório',
              minLength: {value: 6, message: 'Senha deve conter no mínimo 6 caracteres'}
            }
          )}
          placeholder='Senha'
          disabled={isLoginLoading}
        />
        {errors.password && <p>{errors.password.message}</p>}


        <SubmitButton type='submit'>
          {/* {isLoginLoading ? (<ThreeDots
            color='white'
            height={14}
            width={52}
          />) : 'Entrar'} */}
          Entrar
        </SubmitButton>
      </Form>

      <StyledLink to='/cadastro'>
        Primeira vez? Cadastre-se!
      </StyledLink>
    </>
  )
}

export default Login;