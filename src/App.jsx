import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter'; // NOTE: this goes up one level

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
