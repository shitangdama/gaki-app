import axios from 'axios'

import ErrorService from './ErrorService'

import api from '../config/api'

class ApiService {

    async apiCall(url, method = 'GET', token = false, params = null, query = null) {
        let payload = {
            url : url,
            method,
            query,
            headers: this.buildHeaders(token),
        }

        if (query) {
            payload.params = query;
        }

        if (params) {
            payload.data = params;
        }

        const res = await axios.request(payload).catch((error)=>{
            return error.response
        })

        return res;
    }

    buildHeaders(token = false) {
        let headers = {};
        headers['Content-type'] = 'application/json'
        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }
        return headers;
    }

    async login(params) {
        const url = `${api.auth}/login`
        const res = await axios.post(`${api.auth}/login`, params);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async getUsers(token) {
        const url = `${api.user}`
        const res = await this.apiCall(url, 'GET', token, null);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async getUser(token, id) {
        const url = `${api.user}/${id}`
        const res = await this.apiCall(url, 'GET', token, null);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async createUser(token, params) {
        const url = `${api.user}/`
        const res = await this.apiCall(url, 'post', token, params);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async updateUser(token, key, params) {
        const url = `${api.user}/${key}`
        const res = await this.apiCall(url, 'put', token, params);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async updateUserSetting(token, params) {
        const url = `${api.user}/update_setting`
        const res = await this.apiCall(url, 'put', token, params);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

    async destroyUser(token, key) {
        const url = `${api.user}/${key}`
        const res = await this.apiCall(url, 'delete', token);
        const data = ErrorService.handleCommonError(res)
        return data;
    }

}

export default new ApiService();