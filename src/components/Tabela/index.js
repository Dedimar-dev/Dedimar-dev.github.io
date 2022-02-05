import { useEffect } from "react";
import './style.css';
import editar from '../../assets/icons8-editar2.svg';
import excluir from '../../assets/icons8-lixo4.svg';
import ModalConfirmar from "../ModalConfirmar";
import { listarProdutos} from '../../services/apiProdutos';
import trataTexto from "../../utils/trataTexto";
import useGlobal from "../../hooks/useGlobal";
import Variants from "../Variants";

function Tabela() {
    const {
        setId,
        condicao, 
        setCondicao,
        setModalEdicaoProduto,
        setModalCadastroProduto,
        setModalDetalheProduto,
        dadosTodosProdutos, 
        setDadosTodosProdutos,
        modalEdicaoProduto,
        modalCadastroProduto,
        token
      } = useGlobal();

    useEffect(() => {
        listarProdutos(setDadosTodosProdutos, token);
    }, [setDadosTodosProdutos, token]);

    useEffect(() => {
        listarProdutos(setDadosTodosProdutos, token);
    }, [condicao, modalCadastroProduto, modalEdicaoProduto, setDadosTodosProdutos, token]);

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
               { !dadosTodosProdutos && <Variants/>}
                {dadosTodosProdutos.length > 0 && dadosTodosProdutos.map(info => {
                    const nome = trataTexto(info.nome)
                    return (
                        <div key={info.id} 
                            className="table-line"
                            onClick={() => {
                                setModalDetalheProduto(true);
                                setId(Number(info.id));
                            }}
                        >
                            <div className="line-items">{nome}</div>
                            <div className="line-items items-descricao">{info.descricao}</div>
                            <div className="line-items">{(info.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                            <div className="line-items">{info.quantidade}</div>
                            <div className="line-items edit-delete-icon"
                                 onClick={(event) => {
                                    event.stopPropagation();
                            }}>
                                <img id={info.id}
                                    onClick={(event) => {
                                        setModalEdicaoProduto(true);
                                        setModalCadastroProduto(false);
                                        setId(Number(event.target.id));
                                    }}
                                    className="edit-icon"
                                    src={editar}
                                    alt="edit-icon"
                                />

                                <img id={info.id}
                                    className="delete-icon"
                                    onClick={(event) => {
                                        setId(Number(event.target.id));
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