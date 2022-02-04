const validaDadosInputUsuario = (ParâmetrosParaValidacao) => {

 const {
  erroDadosUsuario,
  setErroDadosUsuario,
  dadosUsuario
 } = ParâmetrosParaValidacao;

 const {
  nome,
  email,
  nome_loja
 } = dadosUsuario;
 
 const nomeInvalido = nome.includes(' ')

 const erroInputs = [
   !nome? 'erroNome' : '',
   !email? 'erroEmail' : '',
   !nome_loja? 'erroNome_loja' : '',
   !nomeInvalido? 'nomeInvalido':''
 ];

 const condicaoParaSetErroInputs = erroInputs.find(campo => campo !== '');
 
 if (condicaoParaSetErroInputs) {
    erroInputs.map(erro => erroDadosUsuario[erro] = true);
    setErroDadosUsuario({...erroDadosUsuario});
    return true
 }
 return
}

export {validaDadosInputUsuario}