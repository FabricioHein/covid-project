import '../src/App.css'
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes';
import AuthContext from './contexts/auth'

function App() {
  return (
    <AuthContext.Provider value={{signed: false}} >
    <BrowserRouter>
    <div className='app'>
      <Routes />
      
    </div>
    </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
