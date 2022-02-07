import React, { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Title, Form, Input, SubmitButton, StyledLink } from '../../style/style';

function Register() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const navigate = useNavigate();

  function handleSignUp({ name, email, password }) {
    setIsSignUpLoading(true);

    axios.post('http://localhost:5000/register', { name, email, password })
      .then(() => {
        navigate('/login');
        setIsSignUpLoading(false);
      })
      .catch((err) => {
        setIsSignUpLoading(false);
        console.log(err); 
      });
  }

  return (
    <>
      <Title>MyWallet</Title>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Input type='name' {
          ...register('name', { required: 'Este campo é obrigatório' })}
          placeholder='Nome'
          disabled={isSignUpLoading}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <Input type='email' {
          ...register('email', { required: 'Este campo é obrigatório' })}
          placeholder='E-mail'
          disabled={isSignUpLoading}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input type='password' {
          ...register('password', {
            required: 'Este campo é obrigatório',
            minLength: { value: 6, message: 'Senha deve conter no mínimo 6 caracteres' }
          })}
          placeholder='Senha'
          disabled={isSignUpLoading}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Input type='password' {
          ...register('pwcheck', {
            required: 'Este campo é obrigatório',
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'As senhas devem ser iguais';
              }
            }
          })}
          placeholder='Confirme a senha'
          disabled={isSignUpLoading}
        />
        {errors.pwcheck && <p>{errors.pwcheck.message}</p>}


        <SubmitButton type='submit' disabled={isSignUpLoading}> 
          {isSignUpLoading ? (<ThreeDots
            color='white'
            height={14}
            width={52}
          />) : 'Cadastrar'}
        </SubmitButton>
      </Form>

      <StyledLink to='/login'>
        Já tem uma conta? Entre agora!
      </StyledLink>
    </>
  )
}

export default Register;