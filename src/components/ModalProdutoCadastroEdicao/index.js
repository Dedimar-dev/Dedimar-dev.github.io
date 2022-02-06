import "./styles.css"
import { useEffect } from "react";
import useGlobal from "../../hooks/useGlobal";
import {
    cadastrarProduto,
    atualizarProduto,
} from '../../services/apiProdutos';
import trataTexto from "../../utils/trataTexto";
import { validaDadosInputProduto } from "../../utils/validaDadosInputProduto";

export default function ModalProdutoCadastroEdicao() {
    const {
        id,
        modalCadastroProduto,
        setModalCadastroProduto,
        modalEdicaoProduto,
        setModalEdicaoProduto,
        dadosProduto,
        setDadosProduto,
        erroDadosProduto,
        setErroDadosProduto,
        setDadosTodosProdutos,
        dadosTodosProdutos,
        token
    } = useGlobal();

    useEffect(() => {
        if (modalEdicaoProduto) {
            const produtoClicado = dadosTodosProdutos.find((produto) => produto.id === id);
            setDadosProduto({
                nome: trataTexto    (produtoClicado.nome),
                descricao: produtoClicado.descricao,
                quantidade: produtoClicado.quantidade,
                valor: produtoClicado.valor,
            });
        }
    }, [modalEdicaoProduto, dadosTodosProdutos, id, setDadosProduto])

    const limparInputs = () => {
        setDadosProduto({
            nome: '',
            descricao: '',
            quantidade: '',
            valor: '',
        });
    };

    const handleFecharModal = () => {
        limparInputs();
        setModalEdicaoProduto(false);
        setModalCadastroProduto(false);
        setErroDadosProduto({...erroDadosProduto,
            erroNome: false,
            erroValor: false,
            erroDescricao: false,
            erroQuantidade: false
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const ParametrosParaValidacao = {
            setErroDadosProduto,
            erroDadosProduto,
            dadosProduto
        }
    
        const dadosInvalidos = validaDadosInputProduto(ParametrosParaValidacao);
        if (dadosInvalidos) return
    
        if (modalCadastroProduto) {
            cadastrarProduto(
                dadosProduto,
                setDadosTodosProdutos,
                setModalCadastroProduto,
                setModalEdicaoProduto,
                limparInputs,
                token
            )
        }
    
        if (modalEdicaoProduto) {
            atualizarProduto(
                id,
                dadosProduto,
                setDadosTodosProdutos,
                setModalEdicaoProduto,
                setModalCadastroProduto,
                limparInputs,
                token
            )
        }
        return
    };

    return (
        <div
            className={`
              ${(modalCadastroProduto || modalEdicaoProduto) ? 'flex' : ''}
              backgorund_card_produto_modal`
            }
        >
            {(modalCadastroProduto || modalEdicaoProduto) &&
                <form 
                    onSubmit={handleSubmit}
                    className='card_produto_modal'
                >
                    <div className='titulo_produto'>
                        <h3>{modalCadastroProduto ? 'Cadastro de Produto' : 'Edição de Produto'}</h3>
                        <button
                            id='close'
                            style={{ cursor: "pointer" }}
                            onClick={handleFecharModal}
                        >
                            X
                        </button>

                    </div>
                    <div className='container_produto_input_nome'>
                        <label htmlFor='produto_input_nome_cadastro'>
                            Nome
                        </label>
                        <input
                            id="produto_input_nome_cadastro"
                            type="text"
                            className={` ${erroDadosProduto.erroNome ? 'border-red ' : ''}
                              produto_input_nome_cadastro`
                            }
                            placeholder='Nome'
                            value={dadosProduto.nome}
                            onChange={(event) => {
                                setDadosProduto({
                                    ...dadosProduto,
                                    nome: event.target.value
                                });
                                setErroDadosProduto({
                                    ...erroDadosProduto, erroNome: false
                                });
                            }}
                        />
                         {erroDadosProduto.erroNome &&
                            <p className="msg-input">Este campo deve ser preenchido</p>
                        }
                    </div>

                    <div className='container_produto_input_descricao'>
                        <label htmlFor='produto_input_descricao_cadastro'>Descrição*</label>
                        <input
                            id="produto_input_descricao_cadastro"
                            className={` 
                          ${erroDadosProduto.erroDescricao ? 'border-red ' : ''}
                          produto_input_descricao_cadastro`
                            }
                            placeholder='Digite a descrição'
                            value={dadosProduto.descricao}
                            onChange={(event) => {
                                setDadosProduto({
                                    ...dadosProduto, descricao: event.target.value
                                });
                                setErroDadosProduto({
                                    ...erroDadosProduto, erroDescricao: false
                                });
                            }}
                        />
                        {erroDadosProduto.erroDescricao &&
                            <p className="msg-input">Este campo deve ser preenchido</p>
                        }
                    </div>

                    <div className='containers_produto_vencimento_valor'>
                        <div className='container_produto_input_vencimento'>
                            <label
                                htmlFor='produto_input_vencimento_cadastro'>
                                Quantidade*</label>
                            <input
                                id="produto_input_vencimento_cadastro"
                                type="number"
                                className={` ${erroDadosProduto.erroQuantidade ? 'border-red ' : ''}
                              produto_input_vencimento_cadastro`
                                }
                                placeholder='50'
                                value={dadosProduto.quantidade}
                                onChange={(event) => {
                                    setDadosProduto({
                                        ...dadosProduto,
                                        quantidade: event.target.value
                                    });
                                    setErroDadosProduto({
                                        ...erroDadosProduto, erroQuantidade: false
                                    });
                                }}
                            />
                        </div>

                        <div className='container_produto_input_valor'>
                            <label
                                htmlFor='produto_input_valor_cadastro'>
                                Valor*</label>
                            <input
                                id="produto_input_valor_cadastro"
                                type="number"
                                className={` 
                              ${erroDadosProduto.erroValor ? 'border-red ' : ''}
                              produto_input_valor_cadastro`
                                }
                                placeholder='20'
                                value={dadosProduto.valor}
                                onChange={(event) => {
                                    setDadosProduto({
                                        ...dadosProduto, valor: event.target.value
                                    });
                                    setErroDadosProduto({
                                        ...erroDadosProduto, erroValor: false
                                    });
                                }}
                            />
                            <p className="simbolo-dinheiro">R$</p>
                        </div>
                    </div>

                    <div className="div-erro-quantidade-valor">
                        <div>
                            {erroDadosProduto.erroQuantidade &&
                                <p className="msg-input">Este campo deve ser preenchido</p>
                            }
                        </div>
                        <div>
                            {erroDadosProduto.erroValor &&
                                <p className="msg-input">Este campo deve ser preenchido</p>
                            }
                        </div>
                    </div>

                    <div className='container_produto_buttons_confirmar'>
                        <span 
                            className='produto_button_cancelar'  
                            onClick={handleFecharModal}
                        > 
                            Cancelar
                        </span>

                        <button 
                            className='produto_button_confirmar'
                        > 
                            Aplicar
                        </button>

                    </div>
                </form>}
        </div>
    );
};

