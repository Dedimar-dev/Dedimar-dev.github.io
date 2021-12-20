import "./styles.css"
import { useEffect} from "react";
import useGlobal from "../../hooks/useGlobal";
import { 
    cadastrarProduto, 
    atualizarProduto, 
} from '../../services/apiProdutos';

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
      dadosTodosProdutos
    } = useGlobal();

    useEffect(() => {
        const produtoClicado = dadosTodosProdutos.find((produto) => produto.id === id );
            if (modalEdicaoProduto) {
                setDadosProduto({
                    ...dadosProduto,
                    nome: produtoClicado.nome,
                    descricao: produtoClicado.descricao,
                    quantidade:  produtoClicado.quantidade,
                    valor: produtoClicado.valor,
                });
            }
    },[modalEdicaoProduto, dadosProduto, dadosTodosProdutos, id, setDadosProduto])



  function limparInputs() {
      setDadosProduto({
          ...dadosProduto,
          nome: '',
          descricao: '',
          quantidade:  '',
          valor: '',
      });
  };

  async function handleSubmit() {
    if (modalCadastroProduto) {
      cadastrarProduto(
          dadosProduto, 
          setDadosTodosProdutos,
          setModalCadastroProduto,
          setModalEdicaoProduto,
          limparInputs
        )
    }

    if (modalEdicaoProduto) {
     atualizarProduto(
        id, 
        dadosProduto, 
        setDadosTodosProdutos,
        setModalEdicaoProduto,
        setModalCadastroProduto,
        limparInputs
    )
       
    }

  };


  return (
      <div 
          className={`
              ${(modalCadastroProduto || modalEdicaoProduto) ?'flex':''}
              backgorund_card_cobranca_modal`
          }
      >
         { (modalCadastroProduto || modalEdicaoProduto) && 
         <div className='card_cobranca_modal'>
              <div className='titulo_cobranca'>
                  <h3>{modalCadastroProduto ? 'Cadastro de Cobrança' : 'Edição de cobrança'}</h3>
                  <button 
                      className='close'
                      style={{cursor: "pointer"}} 
                      onClick={() => {
                          limparInputs();
                          setModalEdicaoProduto(false);
                          setModalCadastroProduto(false)
                      }}
                  >
                      X
                  </button>
              
              </div>
              <div className='container_cobranca_input_nome'>
                  <label htmlFor='cobranca_input_nome_cadastro'>
                      Nome*
                  </label>
                      <input
                          id="cobranca_input_nome_cadastro"
                          type="text"
                          className={` ${erroDadosProduto.erroNome ? 'border-red ' : ''}
                              cobranca_input_nome_cadastro`
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
              </div>

              <div className='container_cobranca_input_descricao'>
                  <label htmlFor='cobranca_input_descricao_cadastro'>Descrição*</label>
                  <input
                      id="cobranca_input_descricao_cadastro"
                      className={` 
                          ${erroDadosProduto.erroDescricao ? 'border-red ' : ''}
                          cobranca_input_descricao_cadastro`
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

              <div className='containers_cobranca_vencimento_valor'>
                  <div className='container_cobranca_input_vencimento'>
                      <label
                          htmlFor='cobranca_input_vencimento_cadastro'>
                          Quantidade*</label>
                      <input
                          id="cobranca_input_vencimento_cadastro"
                          type="number"
                          className={` ${erroDadosProduto.erroQuantidade ? 'border-red ' : ''}
                              cobranca_input_vencimento_cadastro`
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

                  <div className='container_cobranca_input_valor'>
                      <label
                          htmlFor='cobranca_input_valor_cadastro'>
                          Valor*</label>
                      <input
                          id="cobranca_input_valor_cadastro"
                          type="number"
                          className={` 
                              ${erroDadosProduto.erroValor ? 'border-red ' : ''}
                              cobranca_input_valor_cadastro`
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

              <div className="div-erro-vencimento-valor">
                  <div>
                      {erroDadosProduto.erroVencimento &&
                          <p className="msg-input">Este campo deve ser preenchido</p>
                      }
                  </div>
                  <div>
                      {erroDadosProduto.erroValor &&
                          <p className="msg-input">Este campo deve ser preenchido</p>
                      }
                  </div>
              </div>

              <div className='container_cobranca_buttons_confirmar'>
                  <div
                      className='cobranca_button_cancelar'
                      onClick={() => {
                          limparInputs();
                          setModalEdicaoProduto(false);
                          setModalCadastroProduto(false);
                      }}>
                      <span> Cancelar</span>
                  </div>

                  <div
                      className='cobranca_button_confirmar'
                      onClick={() => {
                          handleSubmit();
                      }}>
                      <span> Aplicar</span>
                  </div>
              </div>
          </div>}
      </div>
  );
};

