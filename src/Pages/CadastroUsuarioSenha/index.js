import { useState } from 'react';
import useGlobal from '../../hooks/useGlobal';
import './style.css';
import { validaSenhaInputUsuario } from '../../utils/validaSenhaInputUsuario';
import { cadastrarUsuario } from '../../services/apiUsuario';
import trataTexto from '../../utils/trataTexto'
import { useNavigate } from 'react-router-dom';
import { procuraPalavra } from '../../utils/procuraPalavra';

function CadastroUsuarioSenha() {
  const navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const {
    dadosUsuario,
    setDadosUsuario,
    erroDadosUsuario,
    setErroDadosUsuario,
    mensagemDeErroSenha,
    setMensagemDeErroSenha,
    setMensagemApiCadastroUsuario
  } = useGlobal();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ParametrosParaValidacao = {
      erroDadosUsuario,
      setErroDadosUsuario,
      dadosUsuario,
      confirmarSenha,
      setMensagemDeErroSenha
    }
    const senhasInvalidas = validaSenhaInputUsuario(ParametrosParaValidacao);
    if (senhasInvalidas) return

    const ParametrosParaCadatroUsuario = {
      dadosUsuario,
      setMensagemDeErroSenha,
      setMensagemApiCadastroUsuario,
      setDadosUsuario,
      setConfirmarSenha,
      procuraPalavra,
      navigate
    }
    cadastrarUsuario(ParametrosParaCadatroUsuario);
  }

  return (
    <div className="container-cadastro_senha">
      <h1 className="container-cadastro_senha-titulo">
        Venda mais com seu restaurante no DSFood
      </h1>

      <div className="div-form-cadastro_senha">
        <form
          onSubmit={handleSubmit}
          className="form-cadastro_senha"
        >
          <div className="div-form-titulo">
            <h1>Cadastre sua loja</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
          </div>

          <div className="div-form-email">
            <label htmlFor="Senha">Senha*</label>
            <input
              className={`
                form-cadastro_senha_input 
                ${erroDadosUsuario.erroSenha ||
                  mensagemDeErroSenha ? 'erroInput' : ''}`
              }
              id="Senha"
              type="text"
              value={dadosUsuario.senha}
              placeholder="Digite sua senha"
              onChange={(event) => {
                setDadosUsuario({ ...dadosUsuario, senha: event.target.value });
                setErroDadosUsuario({ ...erroDadosUsuario, erroSenha: false })
                setMensagemDeErroSenha('');
              }}
            />
            <p
              className={erroDadosUsuario.erroSenha ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
          </div>

          <div className="div-form-email">
            <label htmlFor="confirme_senha">Confirme sua Senha*</label>
            <input
              className={`
                form-cadastro_senha_input 
                ${erroDadosUsuario.erroConfirmarSenha ||
                  mensagemDeErroSenha ? 'erroInput' : ''}`
              }
              id="confirme_senha"
              type="text"
              value={confirmarSenha}
              placeholder="Confirme sua senha"
              onChange={(event) => {
                setConfirmarSenha(event.target.value);
                setErroDadosUsuario({ ...erroDadosUsuario, erroConfirmarSenha: false })
                setMensagemDeErroSenha('');
              }}
            />
            <p
              className={erroDadosUsuario.erroConfirmarSenha ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
            <p
              className={mensagemDeErroSenha ? 'mensagemErroInput' : 'hidden'}
            >
              {trataTexto(mensagemDeErroSenha)}
            </p>
          </div>

          <button>
            Confirmar cadastro
          </button>

          <div className="navigate-login">
            <p>Já possui uma conta? Faça seu</p>
            <span onClick={() => navigate('/login')}>
              Login
            </span>
          </div>
        </form>
      </div>

    </div>
  );
}

export default CadastroUsuarioSenha;