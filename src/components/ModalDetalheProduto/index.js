import "./styles.css"
import { useEffect } from "react";
import useGlobal from "../../hooks/useGlobal";
import trataTexto from "../../utils/trataTexto";

export default function ModalDetalheProduto() {
    const {
        id,
        modalDetalheProduto,
        setModalDetalheProduto,
        dadosProduto,
        setDadosProduto,
        dadosTodosProdutos,
    } = useGlobal();

    useEffect(() => {
        if (modalDetalheProduto) {
            const produtoClicado = dadosTodosProdutos.find((produto) => produto.id === id);
            setDadosProduto({
                nome: trataTexto(produtoClicado.nome),
                descricao: produtoClicado.descricao,
                quantidade: produtoClicado.quantidade,
                valor: produtoClicado.valor,
            });
        }
    }, [modalDetalheProduto, dadosTodosProdutos, id, setDadosProduto])

    return (
        <div className={`
            ${modalDetalheProduto? 'flex' : ''}
            backgorund_card_produto_modal 
        `}
        >
            <div className='card_detalhe_produto_modal'>
                <div className='titulo_produto'>
                    <h3>Detalhe do Produto</h3>
                    <button
                        className='close'
                        style={{ cursor: "pointer" }}
                        onClick={() => setModalDetalheProduto(false)}
                    >
                        X
                    </button>

                </div>
                <div className='container_produto_nome'>
                    Nome
                    <input
                        disabled
                        className="produto_nome"
                        value={dadosProduto.nome}
                    />
                </div>

                <div className='container_produto_descricao'>
                   Descrição
                    <textarea
                        disabled
                        className="produto_descricao"            
                        value={dadosProduto.descricao}
                    />
                </div>

                <div className='containers_produto_quantidade_valor'>
                    <div className='container_produto_quantidade'>
                        Quantidade
                        <input
                            disabled
                            className="produto_quantidade"
                            value={dadosProduto.quantidade}
                        />
                    </div>

                    <div className='container_produto_valor'>
                        Valor
                        <input
                            disabled
                            className="produto_valor"
                            value={dadosProduto.valor}
                        />
                        <p className="simbolo-dinheiro">R$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
