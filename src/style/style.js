import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*---Common---*/

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

/*---Home---*/

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & >ion-icon {
    font-size: 24px;
  }
`

const Header = styled.header`
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: left;
  color: #fff;
`

const History = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: none;

  margin: 0 25px 13px;
  padding: 12px;
`
const Balance = styled.div`
  display: ${({balance}) => balance ? 'flex' : 'none'};
  justify-content: space-between;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: left;

  & >span {
    font-weight: 400;
    text-align: right;
    color: ${ ({value}) => value >= 0 ? '#03AC00' : '#C70000'};
  }
`

const EntrieTile = styled.div`
  display: flex;
  justify-content: flex-start;

  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;

  margin-bottom: 15px;

  & >span {
    text-align: left;
    color: #c6c6c6;
  }
  
  .inner {
    display: flex;
    justify-content: space-between;
  }
  
  .inner >p {
    text-align: left;
    color: #000;
  }

  .inner >:last-child {
    text-align: right;
    color: ${ ({value}) => parseFloat(value) >= 0 ? '#03AC00' : '#C70000'};
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
`

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  line-height: 24px;
  color: #868686;
`

const EntryButton = styled.button`
  display: flex;
  flex-direction: column;
  height: 115px;
  padding: 10px;

  font-weight: 700;
  font-style: normal;
  font-size: 17px;
  line-height: 20px;

  & >ion-icon{
    font-size: 25px;
  }
`

export {
  Title,
  Form,
  Input,
  SubmitButton,
  StyledLink,
  Wrapper,
  Header,
  History,
  Balance,
  EntrieTile,
  Container,
  Warning,
  EntryButton 
}
