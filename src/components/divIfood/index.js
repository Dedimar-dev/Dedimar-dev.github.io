import './style.css';
import useGlobal from '../../hooks/useGlobal';
import logo_ifood from '../../assets/logo_ifood.svg';

export default function DivIfood() {
  const {
    setModalCadastroProduto,
    setModalEdicaoProduto,
    dadosProduto,
    setDadosProduto,
  } = useGlobal();
  return (
    <div className="div-ifood">
      <img src={logo_ifood} alt="" />
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
