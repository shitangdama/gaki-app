import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'
import api from '../config/index'


class Admin extends ApiService {


    @observable auth_token = ""

    @observable user = {}

    @observable isLoginStaus = false
    @observable socketStatus = false


    @action 
    login = async (params) => {
        const url = `${api.auht}`
        const res = await this.apiCall(url, 'GET', token, null, params);
        // const data = ErrorService.handleCommonError(res)
        // return data;

        console.log(data)
    }
}

export default new Admin();