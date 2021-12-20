import setaModal from '../../assets/Polygon4.svg';
import {deletarProduto} from '../../services/apiProdutos';
import useGlobal from '../../hooks/useGlobal';

export default function ModalConfirmar({idModal}) {
    const {
        id,
        condicao,
        setCondicao,
        setDadosTodosProdutos
    } = useGlobal();

  return(
      <div id={ idModal } className={ `container-confirm-delete ${ idModal === id && condicao? '':'none' }` }>
          <img className="seta" src={ setaModal } alt="seta" />
          <p>Apagar Produto?</p>
          <div className="div-buttons">
              <button 
                  onClick={() =>  deletarProduto(id, setCondicao, setDadosTodosProdutos) } 
                  className="btn-actions-confirm-delete sim">
                  Sim
              </button>
              <button 
                  onClick={ () => setCondicao(false) } 
                  className="btn-actions-confirm-delete nao">
                  Não
              </button>      
          </div>
      </div>
  )
}