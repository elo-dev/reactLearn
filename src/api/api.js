import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b151f5ea-fa2d-44c9-b575-b3ae4e551faa"
    }
})

export const usersAPI = {
    getUser(currentPage, pageSize){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data)
    },

    unfollow(id){
        return instance.delete(`follow/${id}`, {
        }).then(response => response.data)
    },

    follow(id){
        return instance.post(`follow/${id}`, {
        }).then(response => response.data)
    },

    getProfile(userId){
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`, {
        }).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`, {
        }).then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {})
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logOut(){
        return instance.delete(`auth/login`, {
        }).then(response => response.data)
    }
}