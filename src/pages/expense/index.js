import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Input, SubmitButton, Header } from '../../style/style';


function Expense() {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isSending, setIsSending } = useState(false);
  const navigate = useNavigate();

  function handleEntry({ price, description }) {
    setIsSending(true);
    axios.post('http://localhost:5000/expense',
      { price, description },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
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
      <Header>Nova saída</Header>
      <Form onSubmit={handleSubmit(handleEntry)}>
        <Input type='number' {
          ...register('price', { required: 'Este campo é obrigatório' })}
          placeholder='Valor'
          disabled={isSending}
        />
        {errors.price && <p>{errors.price.message}</p>}

        <Input type='text' step='any' {
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
          {/* {isLoginLoading ? (<ThreeDots
            color='white'
            height={14}
            width={52}
          />) : 'Salvar entrada'} */}
          Salvar saída
        </SubmitButton>
      </Form>
    </>
  )
}

export default Expense;