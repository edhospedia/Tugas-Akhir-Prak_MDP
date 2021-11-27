import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import { UserContext } from "./UserContext";
import Web from "./Web";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import Profile from "./Profile";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <UserContext.Provider value="dikembangkan oleh Edho Satrio Pambudi">
    <BrowserRouter>
      <div className="App">
        <br/>
        <h2>Rekomendasi Daftar Berita Entertainment Jepang</h2>        
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/web">
            <Web setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/profile">
            <Profile setLogoutUser={setLogoutUser} />
          </Route>       
        </Switch>
      </div>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
