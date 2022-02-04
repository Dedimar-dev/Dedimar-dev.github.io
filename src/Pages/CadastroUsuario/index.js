import './style.css';
import useGlobal from '../../hooks/useGlobal';
import { useNavigate } from 'react-router-dom';
import { validaDadosInputUsuario } from '../../utils/validaDadosInputUsuario'
import { buscarDadosUsuario } from '../../services/apiUsuario';
import { useState } from 'react';

function CadastroUsuario() {
  const navigate = useNavigate();
  const [mensagemErroEmail , setMensagemErroEmail] = useState('');
  const emailRegex = /^[a-zA-Z0-9.]+@[a-z0-9]+\.[a-z]+/;

  const {
    dadosUsuario,
    setDadosUsuario,
    erroDadosUsuario,
    setErroDadosUsuario
  } = useGlobal();


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const ParâmetrosParaValidacao = {
      erroDadosUsuario,
      setErroDadosUsuario,
      dadosUsuario
    }

    const dadosInvalidos = validaDadosInputUsuario(ParâmetrosParaValidacao);
    if (dadosInvalidos) return
    
    const emailValido = emailRegex.test(dadosUsuario.email);
    if (!emailValido) {
      setMensagemErroEmail('E-mail inválido');
      return
    }

    const emailExistente = await buscarDadosUsuario(dadosUsuario);
    if (emailExistente) {
      setMensagemErroEmail('E-mail já está sendo usado por outro usuário.');
      return
    }
    
    return navigate('/cadastrosenha')
  }

  return (
    <div className="container-cadastro">
      <h1 className="container-cadastro-titulo">Venda mais com seu restaurante no DSFood</h1>

      <div className="div-form-cadastro">
        <form
          onSubmit={handleSubmit}
          className="form-cadastro"
        >
          <div className="div-form-titulo">
            <h1>Cadastre sua loja</h1>
            <h3>Gerencie sua loja de forma fácil e rápida</h3>
          </div>

          <div className="div-form-email">
            <label htmlFor="nome">Nome completo*</label>
            <input
              className={`
                form-cadastro_input 
                ${erroDadosUsuario.erroNome ? 'erroInput' : ''}`
              }
              id="nome"
              type="text"
              value={dadosUsuario.nome}
              placeholder="Digite seu nome"
              onChange={(event) => {
                setDadosUsuario({ ...dadosUsuario, nome: event.target.value });
                setErroDadosUsuario({ ...erroDadosUsuario, 
                    erroNome: false, nomeInvalido: false 
                });

              }}
            />
            <p
              className={erroDadosUsuario.erroNome ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
            <p
              className={erroDadosUsuario.nomeInvalido ? 'mensagemErroInput' : 'hidden'}
            >
             O Sobrenome é obrigatório .
            </p>
          </div>

          <div className="div-form-email">
            <label htmlFor="email">E-mail*</label>
            <input
              className={`
              form-cadastro_input 
              ${erroDadosUsuario.erroEmail || mensagemErroEmail? 'erroInput' : ''}`
              }
              id="email"
              type="text"
              value={dadosUsuario.email}
              placeholder="Digite seu e-mail"
              onChange={(event) => {
                setDadosUsuario({ ...dadosUsuario, email: event.target.value.toLowerCase() });
                setErroDadosUsuario({ ...erroDadosUsuario, erroEmail: false });
                setMensagemErroEmail('');

              }}
            />
            <p
              className={erroDadosUsuario.erroEmail ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
            <p
              className={mensagemErroEmail? 'mensagemErroInput' : 'hidden'}
            >
             {mensagemErroEmail}
            </p>
          </div>

          <div className="div-form-nome_loja">
            <label htmlFor="nome_loja">Nome da loja*</label>
            <input
              className={`
              form-cadastro_input 
              ${erroDadosUsuario.erroNome_loja ? 'erroInput' : ''}`
              }
              id="nome_loja"
              type="text"
              value={dadosUsuario.nome_loja}
              placeholder="Digite o nome de sua loja "
              onChange={(event) => {
                setDadosUsuario({ ...dadosUsuario, nome_loja: event.target.value });
                setErroDadosUsuario({ ...erroDadosUsuario, erroNome_loja: false });
              }}
            />
            <p
              className={erroDadosUsuario.erroNome_loja ? 'mensagemErroInput' : 'hidden'}
            >
              Este campo deve ser preenchido.
            </p>
          </div>

          <button>Continuar</button>

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

export default CadastroUsuario;