const validaDadosInputLoginUsuario = (ParametrosParaValidacao) => {

  const {
    erroDadosUsuarioLogin,
    setErroDadosUsuarioLogin,
    email, 
    senha 
  } = ParametrosParaValidacao;

  const erroInputs = [
    !senha ? 'erroSenha' : '',
    !email ? 'erroEmail' : '',
  ];

  const condicaoParaSetErroInputs = erroInputs.find(campo => campo !== '');

  if (condicaoParaSetErroInputs) {
    erroInputs.map(erro => erroDadosUsuarioLogin[erro] = true);
    setErroDadosUsuarioLogin({ ...erroDadosUsuarioLogin });
    return true
  }

  return
}

export { validaDadosInputLoginUsuario }