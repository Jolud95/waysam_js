import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preolader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <HashRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs"
                               render={() =>
                                   <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() =>
                                   <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() =>
                                   <UsersContainer/>}/>
                        <Route path="/login"
                               render={() =>
                                   <Login/>}/>
                    </div>
                </div>
            </HashRouter>);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
