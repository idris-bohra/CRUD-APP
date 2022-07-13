import React from "react";
import Home from './component/Home'
import About from './component/About'
import Users from './component/Users'
import AddUser from './component/AddUser'
import Navbar from './component/Navbar'
import NOTfound from './component/NOTfound'
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Edit from "./component/Edit";

//idris
export default function App() {
  return (

     <Router>
      <Navbar/>
      <div>    

        <Switch>
          <Route exact path="/aboutus">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/edit/:id"> 
            <Edit />
          </Route>
          <Route>
            <NOTfound />
          </Route>
          

        </Switch>

      </div>

    </Router>
  );
}