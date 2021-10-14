
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import PNF from './pages/PNF/PNF';
import Vegetable from './pages/Vegetable/Vegetable';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/vegetable">
            <Vegetable></Vegetable>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/sign_up">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <PNF></PNF>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
