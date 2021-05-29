import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b98ff143-f3cc-4631-896c-6546eef7309a"
    }
});

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },
    getProfile(userId) {
        console.warn("It's old way. Change your API")
        return profileAPI.getUserProfile(userId);
    }
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getUserStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
