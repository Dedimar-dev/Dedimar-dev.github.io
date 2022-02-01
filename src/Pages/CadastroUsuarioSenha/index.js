import './style.css'

function CadastroUsuarioSenha() {
  return (
    <div className="container-cadastro_senha">
      <h1 className="container-cadastro_senha-titulo">
        Venda mais com seu restaurante no DSFood
      </h1>

      <div className="div-form-cadastro_senha">
        <form className="form-cadastro_senha">
          <div className="div-form-titulo">
            <h1>Cadastre sua loja</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
          </div>
        
          <div className="div-form-email">
            <label htmlFor="Senha">Senha*</label>
            <input 
              id="Senha" 
              type="text" 
            />
          </div>

          <div className="div-form-email">
            <label htmlFor="confirme_senha">Confirme sua Senha*</label>
            <input 
              id="confirme_senha" 
              type="text" 
            />
          </div>

          <button>Continuar</button>          
        </form>
      </div>
      
    </div>
  );
}

export default CadastroUsuarioSenha;