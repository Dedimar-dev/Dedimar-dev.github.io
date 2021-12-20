import './style.css';
import useGlobal from '../../hooks/useGlobal';

export default function DivIfood() {
  const {
    setModalCadastroProduto,
    setModalEdicaoProduto,
    dadosProduto,
    setDadosProduto,
  } = useGlobal();
  return (
    <div className="div-ifood">
      <p>iFood</p>
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
