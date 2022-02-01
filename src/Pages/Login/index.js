import './style.css'

function Login() {
  return (
    <div className="container-login">
      <div className="div-img"></div>
      <div className="div-form-login">
        <form className="form-login">
          <div className="div-form-titulo">
            <h1>Faça seu login!</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
          </div>
        
          <div className="div-form-email">
            <label htmlFor="email">E-mail*</label>
            <input 
              id="email" 
              type="text" 
            />
          </div>

          <div className="div-form-senha">
            <label htmlFor="senha">Senha*</label>
            <input 
              id="senha" 
              type="text" 
            />
          </div>

          <button>Entrar</button>
          
          <div className="div-form-cadastre_se">
            <span>Ainda não possui uma conta?</span>
            <span>Cadastre-se</span>
          </div>
          
        </form>
      </div>
      
    </div>
  );
}

export default Login;