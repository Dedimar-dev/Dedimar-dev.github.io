import Home from './Pages/Home';
import Login from './Pages/Login';
import CadastroUsuario from './Pages/CadastroUsuario';
import CadastroUsuarioSenha from './Pages/CadastroUsuarioSenha';
import CadastroUsuarioSucesso from './Pages/CadastroUsuarioSucesso';
import { GlobalProvider } from './context/GlobalContext';
import {validar_token} from './services/apiUsuario';

import { 
  BrowserRouter as Roteador,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import useGlobal from './hooks/useGlobal';
import { useEffect } from 'react';

function RotasProtegidas({children}) {
  const navigate = useNavigate()

  const {
    token,
    expirationToken,
    setExpirationToken,
    setAtualUsuario
  } = useGlobal();

  useEffect(() => {
    validar_token(token, setExpirationToken, setAtualUsuario);
  },[token, setExpirationToken, setAtualUsuario])

  if (expirationToken === 'jwt malformed' || 
      expirationToken === 'Não autorizado' || 
      expirationToken === 'invalid signature' ||
      expirationToken === 'jwt expired' ||
      !token) {
    navigate('/login')
  }
  return children
}

function AppRoutes() {
  return (
    <GlobalProvider>
        <Roteador>
          <Routes>
            <Route path="/cadastrodados" exact element={<CadastroUsuario/>}></Route>
            <Route path="/cadastrosenha" exact element={<CadastroUsuarioSenha/>}></Route>
            <Route path="/cadastrosucesso" exact element={<CadastroUsuarioSucesso/>}></Route>
            <Route path="/login" exact element={<Login/>}/>
            <Route exact path="/" element={
              <RotasProtegidas>
                <Home/>
              </RotasProtegidas>
            }/>
          </Routes>
        </Roteador>
    </GlobalProvider>

  );
}

export default AppRoutes;
