import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Food from "./components/Food";
import Reviews from "./components/Reviews";
import Restaurants from "./components/Restaurants";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import FoodMenu from "./components/FoodMenu";

function App() {
  return (
  <div>
  <Router>
  <Main/>
  <Switch>
    <Route path='/home' exact component={Home} />
    <Route path='/reviews' component={Reviews} />
    <Route path='/restaurant' component={Restaurants} />
    <Route path='/signup' component={Register} />
    <Route path="/menu"  component={Food} />
    <Route path='/aboutus' component={AboutUs} />
    
  </Switch>
  </Router> 
    </div>
  );
}

export default App;
