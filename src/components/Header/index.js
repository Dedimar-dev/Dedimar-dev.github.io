import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { listarProdutos, listarProdutosPesquisado } from '../../services/apiProdutos';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo_DS.png'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  const navigate = useNavigate();
  const {
    setDadosTodosProdutos,
    setExpirationToken,
    atualUsuario,
    setToken,
    token
  } = useGlobal();

  let iniciais = ''
  let usuario = ''

  if (atualUsuario) {
      iniciais = atualUsuario.nome.substr(0, 2).toUpperCase()
      usuario = atualUsuario.nome.substr(0, atualUsuario.nome.indexOf(' '))
  }

  const pesquisarProduto = (event) => {
    let valorInput = event.target.value.trim();

    if (valorInput.length > 0) {
        listarProdutosPesquisado(setDadosTodosProdutos, valorInput, token);
    } else {
        listarProdutos(setDadosTodosProdutos, token); 
    }
   
  }

 return (
  <header>
    <img src={logo} alt="Logo" />
     <div className="div-pesquisa">
        <SearchIcon fontSize="large" className="lupa"/>
        <label htmlFor="pesquisa">Pesquisar Produto</label>
        <input 
          id="pesquisa" 
          type="text" 
          onChange={pesquisarProduto} 
          placeholder="Sanduíche"
        />
      </div>
      <div className="div-nome_usuario">
          <h2>{iniciais}</h2>
          <h1>{usuario}</h1>
          <LogoutIcon 
            cursor="pointer"
            fontSize='large'
            onClick={() => {
            setToken('');
            navigate('/login');
            setExpirationToken('')
          }}
          >
            Sair
          </LogoutIcon>
      </div>
    
  </header>
 )
}

export default Header;