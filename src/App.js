import './App.css';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom';
import Inicio from './Componentes/Inicio/Inicio';
import PaginaUno from './Componentes/PaginaUno/PaginaUno';
import PaginaDos from './Componentes/PaginaDos/PaginaDos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/inicio'
            render={(routeProps) => <Inicio/>}/>
        
        <Route path='/:var' 
        render={(routeProps) => <PaginaUno {...routeProps} />}/>
        
        <Route path='/:var/:color1/:color2'
        render={(routeProps) => <PaginaDos {...routeProps} />}/>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
