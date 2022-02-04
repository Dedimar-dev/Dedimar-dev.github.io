const url_Base = `https://mini-delivery.herokuapp.com`;

const cadastrarUsuario = async (ParametrosParaCadatroUsuario) => {

  const {
    dadosUsuario,
    setMensagemDeErroSenha,
    setDadosUsuario,
    setConfirmarSenha,
    procuraPalavra,
    navigate,
  } = ParametrosParaCadatroUsuario;

  try {
    const pedido = await fetch(`${url_Base}/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(dadosUsuario)
    });
    const { message } = await pedido.json();
    const { status } = pedido;

    if (status === 200) {
      setDadosUsuario({
        nome: '',
        email: '',
        senha: '',
        nome_loja: ''
      });
      setConfirmarSenha('');
      navigate('/cadastrosucesso')

    } else {

      console.log(message)
      const existeMensagemSenha = procuraPalavra(message, 'senha');
      if (existeMensagemSenha) {
        setMensagemDeErroSenha(message);
      }
    }

  } catch ({ message }) {
    console.log(message)
  }

}

const buscarDadosUsuario = async (dadosUsuario) => {
  try {
    const pedido = await fetch(`${url_Base}/usuarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const resposta = await pedido.json()

    const verificaEmailExistente = resposta.find(item => item.email === dadosUsuario.email);

    if (verificaEmailExistente) {
      return true;
    }

    return
  } catch ({ message }) {
    console.log(message)
  }
}

const atualizarUsuario = async (id, dados, token) => {

  try {
    const pedido = await fetch(`${url_Base}/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(dados)
    });

    const { status } = pedido;
    if (status === 200) {

    }

  } catch ({ message }) {
    console.log(message)
  }

}

const loguinUsuario = async (ParametrosParaLogin) => {

  const {
    setMensagemErroLogin,
    mensagemErroLogin,
    procuraPalavra,
    trataTexto,
    navigate,
    setToken,
    email, 
    senha 
  } = ParametrosParaLogin;

  try {

    const pedido = await fetch(`${url_Base}/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({email, senha})
    });

    const {status} = pedido;
    const {token, message} = await pedido.json();

    if (status === 200) {
      setToken(token);
      navigate('/');
      return
    }

    const senhaInvalida = procuraPalavra(message, 'senha');
    const emailInvalido = procuraPalavra(message, 'email');

    if (emailInvalido && senhaInvalida) {
      setMensagemErroLogin({...mensagemErroLogin, 
        notEmailSenha: message
      });

      return
    }

    if (senhaInvalida) {
      setMensagemErroLogin({...mensagemErroLogin, 
        senhaInvalida: trataTexto(message)
      });
      return
    }

    setMensagemErroLogin({...mensagemErroLogin, 
      notEmailSenha: message
    });
  } catch ({ message }) {
    console.log(message)
  }
}

const validar_token = async (token, setExpirationToken, setAtualUsuario) => {

  try {
    const pedido = await fetch(`${url_Base}/usuario`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      }
    });

    const {status} = pedido;
    const resposta = await pedido.json();
    setExpirationToken(resposta.message);

    if (status === 200) {
      setAtualUsuario(resposta);
      return
    }
   
  } catch ({ message }) {
    console.log(message)
  }
}

export {
  cadastrarUsuario,
  atualizarUsuario,
  buscarDadosUsuario,
  loguinUsuario,
  validar_token
}
