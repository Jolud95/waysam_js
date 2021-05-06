import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileInfo/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() =>
                               <DialogsContainer />}/>
                    <Route path="/profile"
                           render={() =>
                               <ProfileContainer />}/>
                    <Route path="/users"
                           render={() =>
                               <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App;
