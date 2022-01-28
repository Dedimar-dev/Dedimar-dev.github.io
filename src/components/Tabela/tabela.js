import { useEffect } from "react";
import './tabela.css';
import editar from '../../assets/icons8-editar2.svg';
import excluir from '../../assets/icons8-lixo4.svg';
import ModalConfirmar from "../ModalConfirmar";
import { listarProdutos} from '../../services/apiProdutos';
import trataNomeProduto from "../../utils/trataNomeProduto";
import useGlobal from "../../hooks/useGlobal";
import Variants from "../Variants";

function Tabela() {
    const {
        setId,
        condicao, 
        setCondicao,
        setModalEdicaoProduto,
        setModalCadastroProduto,
        dadosTodosProdutos, 
        setDadosTodosProdutos,
        modalEdicaoProduto,
        modalCadastroProduto
      } = useGlobal();

    useEffect(() => {
        listarProdutos(setDadosTodosProdutos);
    }, [setDadosTodosProdutos]);

    useEffect(() => {
        listarProdutos(setDadosTodosProdutos);
    }, [condicao, modalCadastroProduto, modalEdicaoProduto, setDadosTodosProdutos]);

    return (
          <div className="table">
            <div className="table-head">
                <div className="column-title">
                    Nome
                </div>
                <div className="column-title">
                    Descrição
                </div>
                <div className="column-title">
                    Valor
                </div>
                <div className="column-title">
                    Quantidade
                </div>
            </div>
            <div className="table-body">
               { dadosTodosProdutos.length === 0 && <Variants/>}
                {dadosTodosProdutos && dadosTodosProdutos.map(info => {
                    const nome = trataNomeProduto(info.nome)
                    return (
                        <div key={info.id} className="table-line">
                            <div className="line-items">{nome}</div>
                            <div className="line-items">{info.descricao}</div>
                            <div className="line-items">{(info.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                            <div className="line-items">{info.quantidade}</div>
                            <div className="line-items">
                                <img id={info.id}
                                    style={{ cursor: 'pointer' }}
                                    onClick={(e) => {
                                        setModalEdicaoProduto(true);
                                        setModalCadastroProduto(false);
                                        setId(Number(e.target.id));
                                    }}
                                    className="edit-icon"
                                    src={editar}
                                    alt="edit-icon"
                                />

                                <img id={info.id}
                                    style={{ cursor: 'pointer' }}
                                    className="delete-icon"
                                    onClick={(e) => {
                                        setId(Number(e.target.id));
                                        setCondicao(true);
                                    }}
                                    src={excluir} alt="delete-icon"
                                />
                            </div>

                            <div className="div-confirm-delete">
                                <ModalConfirmar
                                    idModal={info.id}
                                />
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    
    )
}

export default Tabela;