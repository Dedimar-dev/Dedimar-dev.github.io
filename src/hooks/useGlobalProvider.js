import { useState } from "react";

export default function useGlobalProvider() {
  const [modalCadastroProduto, setModalCadastroProduto] = useState(false);
  const [modalEdicaoProduto, setModalEdicaoProduto] = useState(false);
  const [condicao, setCondicao] = useState(false);
  const [id, setId] = useState(0);
  const [dadosTodosProdutos, setDadosTodosProdutos] = useState([])
  const [dadosProduto, setDadosProduto] = useState({
    nome: '',
    descricao: '',
    quantidade: '',
    valor: ''
  });

  const [erroDadosProduto, setErroDadosProduto] = useState({
      erroDescricao: false,
      erroQuantidade: false,
      erroValor: false,
      erroNome: false
  });

  return {
    modalCadastroProduto, 
    setModalCadastroProduto,

    modalEdicaoProduto, 
    setModalEdicaoProduto,

    condicao, 
    setCondicao,

    id, 
    setId,
    
    dadosTodosProdutos, 
    setDadosTodosProdutos,

    dadosProduto, 
    setDadosProduto,

    erroDadosProduto, 
    setErroDadosProduto
  }
}