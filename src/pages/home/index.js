import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import  Entry  from '../../components/Entry';
import { Wrapper, Header, History, Balance, Container, EntryButton, Wallet, Warning } from '../../style/style';


function Home() {
  const { user, setUser } = useContext(AuthContext);
  const [ history, setHistory ] = useState([]);
  const [ balance, setBalance ] = useState();
  const navigate = useNavigate();

  function getUserHistory() {
    axios.get('http://localhost:5000/history', {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    })
    .then( ({data}) => {
      setHistory(data.history);
      setBalance(data.balance);
    })
    .catch( (err) => console.log(err) );
  }

  function handleLogOut() {
    setUser(null);
    navigate('/login');
  }

  useEffect(() => {
    getUserHistory();
  },[])

  return (
    <>
      <Wrapper>
        <Header>{`Olá, ${user?.name}`}</Header>
        <ion-icon name="exit-outline" onClick={() => handleLogOut()}></ion-icon>
      </Wrapper>
      <Wallet>
        <History center={history.length === 0}>
          {
            history.length === 0  
              ? <Warning>Não há registros de entrada ou saída</Warning>
              : history?.map( entry => ( <Entry {...entry} /> )) 
          }
        </History>
        <Balance balance={balance} hidden={history.length === 0}>
          <p>SALDO</p>
          <span>{balance}</span>
        </Balance>
      </Wallet>
      <Container>
        <EntryButton onClick={() => navigate('/entrada')}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h2>Nova<br/>entrada</h2>
        </EntryButton>
        <EntryButton onClick={() => navigate('/saida')}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova<br/>saída</h2>
        </EntryButton>
      </Container>
    </>
  )
}

export default Home;