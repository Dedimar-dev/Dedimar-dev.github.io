import './style.css'

function CadastroUsuario() {
  return (
    <div className="container-cadastro">
      <h1 className="container-cadastro-titulo">Venda mais com seu restaurante no DSFood</h1>

      <div className="div-form-cadastro">
        <form className="form-cadastro">
          <div className="div-form-titulo">
            <h1>Cadastre sua loja</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
          </div>
        
          <div className="div-form-email">
            <label htmlFor="nome">Nome completo*</label>
            <input 
              id="nome" 
              type="text" 
            />
          </div>

          <div className="div-form-email">
            <label htmlFor="email">E-mail*</label>
            <input 
              id="email" 
              type="text" 
            />
          </div>

          <div className="div-form-nome_loja">
            <label htmlFor="nome_loja">Nome da loja*</label>
            <input 
              id="nome_loja" 
              type="text" 
            />
          </div>

          <button>Continuar</button>          
        </form>
      </div>
      
    </div>
  );
}

export default CadastroUsuario;