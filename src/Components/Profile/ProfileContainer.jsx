import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        {
            let userId = this.props.match.params.userId
            if (!userId) {
                userId = this.props.authUserId;
                if (!userId) {
                    this.props.history.push("/login")
                }
            }
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus = {this.props.updateStatus}/>
            </div>
        )
    }
};


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)