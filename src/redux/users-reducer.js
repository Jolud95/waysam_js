const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        /*{
            id: 1,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
            followed: false,
            fullName: "Kate",
            status: "I'll a programmer",
            location: {city: "Volgograd", country: "Russia"}
        },
        {
            id: 2,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
            followed: true,
            fullName: "Max",
            status: "I'm a good man",
            location: {city: "Volgograd", country: "Russia"}
        },
        {
            id: 3,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
            followed: false,
            fullName: "Simon",
            status: "I'm a cat",
            location: {city: "Volgograd", country: "Russia"}
        },
        {
            id: 4,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
            followed: true,
            fullName: "Olivia",
            status: "I've a nice name",
            location: {city: "Volgograd", country: "Russia"}
        }*/
    ]
};

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return  {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;