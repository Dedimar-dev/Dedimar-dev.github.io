import './style.css';
import useGlobal from '../../hooks/useGlobal';

export default function DivIfood() {
  const {setModalCadastroProduto} = useGlobal();
  return (
    <div className="div-ifood">
      <p>iFood</p> 
      <button 
        className='btn-add-produto '
        onClick={() => setModalCadastroProduto(true)}
      >
        Adicionar Produto
      </button>
    </div>
  );
}
