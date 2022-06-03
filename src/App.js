import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Home, Login, ProductDetails, Purchases } from './pages';
 


function App() {
  
  return (
    <HashRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
