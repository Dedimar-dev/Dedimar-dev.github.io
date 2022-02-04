import { useState } from "react";
import { useLocalStorage } from 'react-use';

export default function useGlobalProvider() {
  const [modalCadastroProduto, setModalCadastroProduto] = useState(false);
  const [modalEdicaoProduto, setModalEdicaoProduto] = useState(false);
  const [condicao, setCondicao] = useState(false);
  const [id, setId] = useState(0);
  const [dadosTodosProdutos, setDadosTodosProdutos] = useState([]);
  const [mensagemDeErroSenha, setMensagemDeErroSenha] = useState('');
  const [mensagemApiCadastroUsuario, setMensagemApiCadastroUsuario] = useState('');
  const [token, setToken] = useLocalStorage('token', '');
  const [expirationToken, setExpirationToken] = useState('');
  const [atualUsuario, setAtualUsuario] = useLocalStorage('atual_usuario', '');
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

  const [dadosUsuario, setDadosUsuario] = useState({
    nome: '',
    email: '',
    senha: '',
    nome_loja: ''
  });

  const [erroDadosUsuario, setErroDadosUsuario] = useState({
    erroNome: false,
    erroEmail: false,
    erroSenha: false,
    erroNovaSenha: false,
    erroConfirmarSenha: false,
    erroNome_loja: false,
    nomeInvalido: false,
  });

  const [erroDadosUsuarioLogin, setErroDadosUsuarioLogin] = useState({
    erroEmail: false,
    erroSenha: false,
  });

  const [mensagemErroLogin, setMensagemErroLogin] = useState({
    emailInvalido: '',
    senhaInvalida: '',
    notEmailSenha:''
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
    setErroDadosProduto,

    dadosUsuario,
    setDadosUsuario,

    erroDadosUsuario,
    setErroDadosUsuario,

    mensagemDeErroSenha,
    setMensagemDeErroSenha,

    mensagemApiCadastroUsuario,
    setMensagemApiCadastroUsuario,

    token,
    setToken,

    expirationToken, 
    setExpirationToken,

    erroDadosUsuarioLogin, 
    setErroDadosUsuarioLogin,

    mensagemErroLogin, 
    setMensagemErroLogin,

    atualUsuario, 
    setAtualUsuario
  }
}