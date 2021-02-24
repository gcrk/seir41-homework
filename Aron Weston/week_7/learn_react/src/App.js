import { BrowserRouter, Route, Switch } from "react-router-dom"
import WordClass from './components/WordClass'
import WordFunc from './components/WordFunc'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Main from './tic_tac_toe/Main'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route component={ Home } path='/' exact />    
        <Route component={ WordClass} path='/word-class' />    
        <Route component={ WordFunc } path='/word-function' />    
        <Route component={ Main } path='/tic-tac-toe' />    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
