import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignIn/SignUp';
import Home from './components/Home/Home'
import Splash from './components/Splash/Splash';
import MyBooks from './components/MyBooks/MyBooks';
import Explore from './components/Explore/Explore';
import Books from './components/Books/Books';
import SinglePage from './components/DisplayPDF/SinglePage';
import Profile from './components/profile/profile';
import EmbedPDF from './components/DisplayPDF/EmbedPDF';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
            <Router>
            <Switch>
              <Route exact path =  '/' component = {Splash}/>
              <Route path =  '/myBooks' component = {MyBooks}/>
              <Route path = "/signUp" component = {SignUp}/>
              <Route path = "/signIn" component = {SignIn}/>
              <Route path = "/home" component = {Home}/>
              <Route path = "/books/:id" component = {Books} />
              <Route path = "/displayBook/:id" component = {EmbedPDF}/>
              <Route path = "/profile" component = {Profile}/>
              <Route path = "/display" component = {SinglePage}/>
              <Route path = "/explore" component = {Explore}/>
              
            </Switch>
            </Router>
        </div>
    
   
  );
}

export default App;
