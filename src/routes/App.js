import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductosCreados } from '../pages/ProductosCreados';
import { ProductoDetalle } from '../pages/ProductoDetalle';
import { Signup } from '../pages/Signup';



function App() {
  return (
    <BrowserRouter>
      <Navegacion /> 
      <Routes>
        <Route path='/' element={<ProductosCreados/>} />
        <Route path='/singup' element={<Signup/>}/>
        <Route path='/producto/:id' element={<ProductoDetalle/>} />
      </Routes>    
    </BrowserRouter>       
  );
}

export default App;
