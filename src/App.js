import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Expense, Home, Income, Login, Register } from "./pages";
import GlobalStyle from "./style/globalstyle";
import AuthProvider from "./contexts/authContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/entrada' element={<Income />} />
            <Route path='/saida' element={<Expense />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App;