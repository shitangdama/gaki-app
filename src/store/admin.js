import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import AdminService from '../services/AdminService'
import api from '../config/api'


class Admin {


    @observable auth_token = ""

    @observable user = {}

    @observable isLoginStaus = false
    @observable socketStatus = false


    @action 
    login = async (params) => {
        const data = await AdminService.login(params)
        // return data;

        console.log(data)
    }
}

export default new Admin();