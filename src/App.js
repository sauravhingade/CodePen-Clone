

//components
import Home from './components/base';
import DataProvider from './context/DataProvider';

function App() {
  return (
     <DataProvider>    
      <Home/>
     </DataProvider>
  );
}

export default App;