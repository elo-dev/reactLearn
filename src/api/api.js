import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "0e5c0981-d3a9-4812-a1cb-d8d1f4461a03"
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
    setAuthUser(){
        return instance.get(`auth/me`, {
        }).then(response => response.data)
    }
}