import React from "react";
import { Container } from "@material-ui/core";
import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));//traemos los datos del usuario del local storage para ver si el ususario loguedo y a si no mostrar el formulario signin signup
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
