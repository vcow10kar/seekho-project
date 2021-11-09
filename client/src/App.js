import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignIn/SignUp';
import Home from './components/Home/Home'
import Splash from './components/Splash/Splash';
import MyBooks from './components/MyBooks/MyBooks';
import Explore from './components/Explore/Explore';
import Books from './components/Books/Books';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
            
            <Switch>
              <Route path =  '/myBooks' component = {MyBooks}/>
              <Route path = "/signUp" component = {SignUp}/>
              <Route path = "/signIn" component = {SignIn}/>
              <Route path = "/home" component = {Home}/>
              <Route path = "/books/:id">
                <Books/>
              </Route>
              <Route path = "/explore" component = {Explore}/>
              <Route path =  '/' component = {Splash}/>
            </Switch>
            
        </div>
    </Router>
   
  );
}

export default App;
