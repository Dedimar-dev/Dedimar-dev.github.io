import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { listarProdutos, listarProdutosPesquisado } from '../../services/apiProdutos';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo_DS.png'

function Header() {

  const {
    setDadosTodosProdutos
  } = useGlobal();

  const pesquisarProduto = (event) => {
    let valorInput = event.target.value.trim();

    if (valorInput.length > 0) {
        listarProdutosPesquisado(setDadosTodosProdutos, valorInput);
    } else {
        listarProdutos(setDadosTodosProdutos); 
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
    
  </header>
 )
}

export default Header;