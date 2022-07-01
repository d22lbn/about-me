import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Posts from "./components/pages/posts/Posts";
import Nav from "./components/pages/nav/Nav";

const App = (props) => {
  return (
    <div className="App">
      <Header state={props.state.headerPage}/>

      <div className="body__main">
        <Routes>
          <Route path={"/"} element={<Posts state={props.state.postsPage}/>}/>
          <Route path={"/nav"} element={<Nav navLinks={props.state.headerPage.headerLinks}/>}/>
        </Routes>
      </div>


    </div>
  );
}

export default App;
