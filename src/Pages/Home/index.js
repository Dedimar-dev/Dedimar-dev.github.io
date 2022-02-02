import './style.css'
import Tabela from '../../components/Tabela';
import DivFood from '../../components/divfood';
import ModalProdutoCadastroEdicao from '../../components/ModalProdutoCadastroEdicao';
import Header from '../../components/Header';
import Manutencao from '../../components/Manutencao';


function Home() {
  let condicao = false
  return (
    <div className="Home">
      {!condicao && <Manutencao/>}
       { condicao && <div>
          <Header/>
          <DivFood />
          <Tabela />
          <ModalProdutoCadastroEdicao />
        </div>}
        
    </div>
  );
}

export default Home;