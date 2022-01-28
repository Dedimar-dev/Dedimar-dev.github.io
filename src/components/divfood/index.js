import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { useEffect } from 'react';
import { listarProdutos, listarProdutosPesquisado } from '../../services/apiProdutos';
import SearchIcon from '@mui/icons-material/Search';

export default function Divfood() {

  useEffect(() => {
    desenhaTexto()
  }, []);

  const {
    setModalCadastroProduto,
    setModalEdicaoProduto,
    dadosProduto,
    setDadosProduto,
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

  const desenhaTexto = () => {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.font = '130px Georgia';
    pincel.fillStyle = '#fff';
    pincel.fillText('DSFood', 250, 120);
  }

  return (
    <div className="div-food">
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
     
      <canvas width="1000" height="900"></canvas>
      <button
        className='btn-add-produto '
        onClick={() => {
          setModalCadastroProduto(true)
          setModalEdicaoProduto(false);
          setDadosProduto({
            ...dadosProduto,
            nome: '',
            descricao: '',
            quantidade: '',
            valor: '',

          })

        }}
      >
        Adicionar Produto
      </button>
    </div>
  );
}
