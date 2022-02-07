import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import  Entrie  from '../../components/Entrie';
import { Wrapper, Header, History, Balance, Container, EntryButton, Warning } from '../../style/style';


function Home() {
  const { user, setUser } = useContext(AuthContext);
  const [ history, setHistory ] = useState([]);
  const [ balance, setBalance ] = useState(0);
  const [ hasBalance, setHasBalance ] = useState(false); 
  const navigate = useNavigate();

  function getUserHistory() {
    axios.get('http://localhost:5000/history', {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    })
    .then( ({data}) => {
      setHistory(data);
    })
    .catch( (err) => console.log(err) );
  }

  function calcBalance() {
    if (history) {
     let sum = 0;
     history.forEach( entrie => sum+= parseFloat(entrie.value) );
     setHasBalance(true);
     setBalance(sum); 
    }  
  }

  function handleLogOut() {
    setUser(null);
    navigate('/login');
  }

  useEffect(() => {
    getUserHistory();
    calcBalance();
  },[])

  return (
    <>
      <Wrapper>
        <Header>{`Olá, ${user.name}`}</Header>
        <ion-icon name="exit-outline" onClick={handleLogOut}></ion-icon>
      </Wrapper>
      <History>
        {
          history 
            ? history.map( (entrie) => ( <Entrie {...entrie} /> )) 
            : <Warning>Não há registros de entrada ou saída</Warning>
        }
        <Balance hasBalance={hasBalance} value={balance}>
          <p>SALDO</p>
          <span>{balance}</span>
        </Balance>
      </History>
      <Container>
        <EntryButton onClick={navigate('/entrada')}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h2>Nova<br/>entrada</h2>
        </EntryButton>
        <EntryButton onClick={navigate('/saida')}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova<br/>saída</h2>
        </EntryButton>
      </Container>
    </>
  )
}

export default Home;