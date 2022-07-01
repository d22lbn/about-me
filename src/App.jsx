import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Posts from "./components/pages/posts/Posts";
import Nav from "./components/pages/nav-mobile/Nav";
import Education from "./components/pages/education/Education";
import Work from "./components/pages/work/Work";
import Sport from "./components/pages/sport/Sport";
import New from "./components/pages/new/New";

const App = (props) => {
  return (
    <div className="App">
      <Header state={props.state.headerPage}/>

      <div className="body__main">
        <Routes>
          <Route path={"/nav-mobile"} element={<Nav state={props.state.headerPage}/>}/>

          <Route path={"/"} element={<Posts state={props.state.postsPage}/>}/>
          <Route path={"/education"} element={<Education/>}/>
          <Route path={"/work"} element={<Work/>}/>
          <Route path={"/sport"} element={<Sport/>}/>
          <Route path={"/new"} element={<New/>}/>
        </Routes>
      </div>

      <Footer/>


    </div>
  );
}

export default App;
