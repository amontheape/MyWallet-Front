import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  line-height: 50px;

  color: #fff;

  margin-bottom: 24px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & >:last-child {
    margin-bottom: 36px;
  }

  & >p{
    margin: 4px 0 8px;
    color: lightcoral;
  }
`
const Input = styled.input`
  width: 326px;
  height: 58px;
  margin-bottom: 13px;
  border: none;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  ::placeholder{
    color: #000;
    text-align: left;
    padding: 17px 15px;
  }

  :disabled {
    background-color: #f2f2f2;
    opacity: 0.7;
    color: #afafaf;
  }
`
const SubmitButton = styled.button`
  width: 326px;
  height: 58px;
  background-color: #A328D6;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  :disabled {
    opacity: 0.7;
  }
`

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  text-decoration: none;
`

export {
  Title,
  Form,
  Input,
  SubmitButton,
  StyledLink 
}
