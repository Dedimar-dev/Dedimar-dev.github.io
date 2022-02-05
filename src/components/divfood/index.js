import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { useEffect } from 'react';

export default function DivFood() {

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

    pincel.font = '100px Georgia';
    pincel.fillStyle = '#e0d7d7';
    pincel.fillText('DSFood', 270, 120);
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
