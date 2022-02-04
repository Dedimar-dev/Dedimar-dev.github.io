 const trataTexto = (nome) => {
  if (nome) {
    nome = nome.trim();
    nome = nome[0].toUpperCase() + nome.substr(1)

  return nome;
  }
  return ''
}

export default trataTexto    
