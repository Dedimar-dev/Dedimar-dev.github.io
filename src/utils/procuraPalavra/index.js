import  trataTexto  from '../trataTexto';

const procuraPalavra = (texto, palavra) => {
  texto = texto.split(' ')
  const existeMensagem = texto.filter(item => trataTexto(item) === trataTexto(palavra));

  if (existeMensagem.length > 0) {
    return true
  }
  return
}

export { procuraPalavra }