const validaDadosInputProduto = (ParametrosParaValidacao) => {

 const {
  setErroDadosProduto,
  erroDadosProduto,
  dadosProduto
 } = ParametrosParaValidacao;

 const {
  nome,
  descricao,
  quantidade,
  valor
 } = dadosProduto;

 
 const erroInputs = [
   !nome? 'erroNome' : '',
   !descricao? 'erroDescricao' : '',
   !quantidade? 'erroQuantidade' : '',
   !valor? 'erroValor':''
 ];

 const condicaoParaSetErroInputs = erroInputs.find(campo => campo !== '');
 
 if (condicaoParaSetErroInputs) {
    erroInputs.map(erro => erroDadosProduto[erro] = true);
    setErroDadosProduto({...erroDadosProduto});
    return true
 }
 return
}

export {validaDadosInputProduto}