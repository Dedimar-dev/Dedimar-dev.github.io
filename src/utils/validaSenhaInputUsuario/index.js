const validaSenhaInputUsuario = (ParâmetrosParaValidacao) => {

  const {
    erroDadosUsuario,
    setErroDadosUsuario,
    dadosUsuario,
    confirmarSenha,
    setMensagemDeErroSenha
  } = ParâmetrosParaValidacao;

  const { senha } = dadosUsuario;

  const erroInputs = [
    !senha ? 'erroSenha' : '',
    !confirmarSenha ? 'erroConfirmarSenha' : '',
  ];

  const condicaoParaSetErroInputs = erroInputs.find(campo => campo !== '');

  if (condicaoParaSetErroInputs) {
    erroInputs.map(erro => erroDadosUsuario[erro] = true);
    setErroDadosUsuario({ ...erroDadosUsuario });
    return true
  }

  if (senha !== confirmarSenha) {
    setMensagemDeErroSenha('As senhas digitadas não coincidem.')
    return true
  }

  return
}

export { validaSenhaInputUsuario }