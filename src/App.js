import Tabela from './components/Tabela/tabela';
import Divfood from './components/divfood';
import ModalProdutoCadastroEdicao from './components/ModalProdutoCadastroEdicao';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Divfood />
        <Tabela />
        <ModalProdutoCadastroEdicao />
      </div>
    </GlobalProvider>

  );
}

export default App;
