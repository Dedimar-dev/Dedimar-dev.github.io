import Tabela from './components/Tabela';
import DivFood from './components/DivFood/index';
import ModalProdutoCadastroEdicao from './components/ModalProdutoCadastroEdicao';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <DivFood />
        <Tabela />
        <ModalProdutoCadastroEdicao />
      </div>
    </GlobalProvider>

  );
}

export default App;
