import './style.css'
import Tabela from '../../components/Tabela';
import DivFood from '../../components/divfood';
import ModalProdutoCadastroEdicao from '../../components/ModalProdutoCadastroEdicao';
import Header from '../../components/Header';
import ModalDetalheProduto from '../../components/ModalDetalheProduto';

function Home() {

  return (
    <div className="Home">
      <Header/>
      <DivFood />
      <Tabela />
      <ModalProdutoCadastroEdicao /> 
      <ModalDetalheProduto/>       
    </div>
  );
}

export default Home;