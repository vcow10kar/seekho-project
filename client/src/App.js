import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Home from "./components/Home/Home";
import Splash from "./components/Splash/Splash";
import MyBooks from "./components/MyBooks/MyBooks";
import Explore from "./components/Explore/Explore";
import Books from "./components/Books/Books";
import SinglePage from "./components/DisplayPDF/SinglePage";
import Profile from "./components/Profile/Profile";
import EmbedPDF from "./components/DisplayPDF/EmbedPDF";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SeekhoLogo from "./components/InitialPages/SeekhoLogo";
import ListPages from "./components/ListPages/ListPages";
import { SearchCard } from "./components/Home/SearchCard";
import MainProfilePage from "./components/Profile/MainProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SeekhoLogo} />
          <Route path = "/splash" component = {Splash}/>
          <Route path="/myBooks" component={MyBooks} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/books/:id" component={Books} />
          <Route path="/displayBook/:id" component={EmbedPDF} />
          <Route path="/profile" component={Profile} />
          <Route path="/display" component={SinglePage} />
          <Route path="/explore" component={Explore} />
          <Route path = "/listPages" component = {ListPages}/>
          <Route path = "/search" component = {SearchCard}/>
          <Route path = "/user" component = {MainProfilePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
