import Tabela from './components/Tabela/tabela';
import DivIfood from './components/divIfood';
import ModalProdutoCadastroEdicao from './components/ModalProdutoCadastroEdicao';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <DivIfood/>
        <Tabela/>  
        <ModalProdutoCadastroEdicao/> 
    </div>
    </GlobalProvider>
    
  );
}

export default App;
