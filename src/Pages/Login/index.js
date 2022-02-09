import './style.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loguinUsuario } from '../../services/apiUsuario';
import useGlobal from '../../hooks/useGlobal';
import { validaDadosInputLoginUsuario } from '../../utils/validaDadosInputLoginUsuario';
import { procuraPalavra } from '../../utils/procuraPalavra';
import trataTexto  from '../../utils/trataTexto';
import CircularIndeterminate from '../../components/CircularIndeterminate';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9.]+@[a-z0-9]+\.[a-z]+/;

  const {
    setToken,
    erroDadosUsuarioLogin,
    setErroDadosUsuarioLogin,
    mensagemErroLogin, 
    setMensagemErroLogin,
    setExpirationToken
  } = useGlobal();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ParametrosParaValidacao = {
      setErroDadosUsuarioLogin,
      erroDadosUsuarioLogin,
      email,
      senha
    }

    const dadosInvalidos = validaDadosInputLoginUsuario(ParametrosParaValidacao);
    if (dadosInvalidos) return

    const emailInvalido = emailRegex.test(email);

    if (!emailInvalido) {
      setMensagemErroLogin({...mensagemErroLogin, 
        emailInvalido: 'E-mail inválido'
      });
      return
    }

    setCarregando(true);

    const ParametrosParaLogin = {
      setExpirationToken,
      setMensagemErroLogin,
      mensagemErroLogin, 
      procuraPalavra,
      trataTexto,
      setToken,
      email, 
      senha 
    }

   const condicao = await loguinUsuario(ParametrosParaLogin);

   if (condicao) {
      navigate('/home');
      setEmail('')
      setSenha('')
   }
 
    setCarregando(false);
  }

  return (
    <div className="container-login">
      <div className="div-img"></div>
      <div className="div-form-login">
        <form
          onSubmit={handleSubmit}
          className="form-login"
        >
          <div className="div-form-titulo">
            <h1>Faça seu login!</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
            <p
              className={mensagemErroLogin.notEmailSenha ? 'mensagemErroInput' : 'hidden'}
            >
              {mensagemErroLogin.notEmailSenha}
            </p>
          </div>

          <div className="div-form-email">
            <label htmlFor="email">E-mail*</label>
            <input
               className={`
               form-login_input
               ${erroDadosUsuarioLogin.erroEmail ||
                mensagemErroLogin.emailInvalido ? 'erroInput' : ''}`
             }
              id="email"
              type="text"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setErroDadosUsuarioLogin({...erroDadosUsuarioLogin,
                  erroEmail: false
                });
                setMensagemErroLogin({...mensagemErroLogin,
                  emailInvalido: '',
                  notEmailSenha: ''
                })
              }}
            />
            <p
              className={erroDadosUsuarioLogin.erroEmail? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
            <p
              className={mensagemErroLogin.emailInvalido ? 'mensagemErroInput' : 'hidden'}
            >
              {mensagemErroLogin.emailInvalido}
            </p>
          </div>

          <div className="div-form-senha">
            <label htmlFor="senha">Senha*</label>
            <input
              className={`
              form-login_input
              ${erroDadosUsuarioLogin.erroSenha ||
               mensagemErroLogin.senhaInvalida ? 'erroInput' : ''}`
            }
              id="senha"
              type="text"
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
                setErroDadosUsuarioLogin({...erroDadosUsuarioLogin,
                  erroSenha: false
                });
                setMensagemErroLogin({...mensagemErroLogin,
                  senhaInvalida: '',
                  notEmailSenha: ''
                })
              }}
            />
            <p
              className={erroDadosUsuarioLogin.erroSenha ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
            <p
              className={mensagemErroLogin.senhaInvalida ? 'mensagemErroInput' : 'hidden'}
            >
              {mensagemErroLogin.senhaInvalida}
            </p>
          </div>

          <button>
            {!carregando && <span>Entrar</span>}
            {carregando && <CircularIndeterminate/>}
          </button>

          <div className="div-form-cadastre_se">
            <p>Ainda não possui uma conta?</p>
            <span onClick={() => navigate('/cadastrodados')}>
              Cadastre-se
            </span>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Login;