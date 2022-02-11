import React, { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { AuthContext } from "../../contexts/authContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Input, SubmitButton, Header } from '../../style/style';


function Income() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ isSending, setIsSending ] = useState(false);
  const navigate = useNavigate();

  function handleEntry({price, description}) {
    setIsSending(true);
    axios.post('https://mywallettracker.herokuapp.com/income', 
      { price, description, type: 'income'},
      { headers: {
        Authorization: `Bearer ${user.token}`
      }})
    .then(() => {
      setIsSending(false);
      navigate('/home');
    })
    .catch((err) => {
      setIsSending(false);
      console.log(err);
    });
  }

  return (
    <>
      <Header>Nova entrada</Header>
      <Form onSubmit={handleSubmit(handleEntry)}>
        <Input type='number' step='any'{
          ...register('price', { required: 'Este campo é obrigatório' })}
          placeholder='Valor'
          disabled={isSending}
        />
        {errors.price && <p>{errors.price.message}</p>}

        <Input type='text' {
          ...register('description', {
            required: 'Este campo é obrigatório',
            minLength: { value: 5, message: 'A descrição deve conter no mínimo 5 caracteres' }
          }
          )}
          placeholder='Descrição'
          disabled={isSending}
        />
        {errors.description && <p>{errors.description.message}</p>}


        <SubmitButton type='submit' disabled={isSending}>
          {isSending ? (<ThreeDots
            color='white'
            height={14}
            width={52}
          />) : 'Salvar entrada'}
        </SubmitButton>
      </Form>
    </>
  )
}

export default Income;