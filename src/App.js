import Tabela from './components/Tabela';
import Divfood from './components/DivFood';
import ModalProdutoCadastroEdicao from './components/ModalProdutoCadastroEdicao';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header/>
        <Divfood />
        <Tabela />
        <ModalProdutoCadastroEdicao />
      </div>
    </GlobalProvider>

  );
}

export default App;
