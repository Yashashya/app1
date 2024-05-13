import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Main } from './components/Main';
import { Dashboard } from './modules/dashboard/Dashboard';
import { CreateUser } from './modules/users/CreateUser';
import { Login } from './modules/login/Login';


function App() {
  
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Main />} >

      <Route path='/dashboard/admin' element={<Dashboard userType={'ADMIN'} />} />
      <Route path='/dashboard/user' element={<Dashboard userType={'USER'} />} />
      <Route path='/user' element={<CreateUser />} />
      

    </Route>
    
    </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
