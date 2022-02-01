import Home from './Pages/Home';
import Login from './Pages/Login';
import CadastroUsuario from './Pages/CadastroUsuario';
import CadastroUsuarioSenha from './Pages/CadastroUsuarioSenha';
import { GlobalProvider } from './context/GlobalContext';
import useGlobal from './hooks/useGlobal';


import { 
  BrowserRouter as Roteador,
  Route,
  Routes,
  Navigate,
  useLocation
} from 'react-router-dom';

function RotasProtegidas({children}) {
  const {pathname} = useLocation();

  let cond = true;

  if(!cond) {
    return <Navigate to="/login"/>
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
