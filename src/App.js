import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Home, Login, ProductDetails, Purchases,UserInfo} from './pages';
import Navbar from './componentes/Navbar'
import ProtectedRoutes from './componentes/ProtectedRoutes';
 


function App() {
  
  return (
    <HashRouter>
      <Navbar />
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/user' element={<UserInfo/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
