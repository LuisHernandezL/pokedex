
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInput from './components/UserInput';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          //Login Route
          <Route path='/' element={<UserInput/>}></Route>

          //ProtectedRoutes
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
