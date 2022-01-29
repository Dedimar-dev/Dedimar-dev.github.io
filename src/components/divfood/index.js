import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { useEffect } from 'react';

function Divfood() {

  useEffect(() => {
    desenhaTexto()
  }, []);

  const {
    setModalCadastroProduto,
    setModalEdicaoProduto,
    dadosProduto,
    setDadosProduto
  } = useGlobal();

  const desenhaTexto = () => {
    const tela = document.querySelector('canvas');
    const pincel = tela.getContext('2d');

    pincel.font = '130px Georgia';
    pincel.fillStyle = '#fff';
    pincel.fillText('DSFood', 250, 120);
  }

  return (
    <div className="div-food">
     
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
export default Divfood;