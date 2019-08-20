import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'
import StorageService from '../services/StorageService'
import history from '../routers/history'


class Admin {

    @observable auth_token = ""

    @observable user = {}

    @observable isLoginStaus = false
    @observable socketStatus = false

    @action 
    login = async (values) => {
        const params = new URLSearchParams();
        params.append('username', values.username);
        params.append('password', values.password);

        const data = await ApiService.login(params)

        if(!_.isNull(data)) {
            const token = data.access_token
            const user = data.user

            StorageService.setToken(token)
            StorageService.setUser(user)

            runInAction(()=>{
                this.isLoginStaus = true
                this.auth_token = token
                this.user = user
            })

            console.log(data)
            history.push("/dashboard/")
        }
    }

    logout() {
        StorageService.removeAll()
        runInAction(() => {
            this.isLogin = false
            this.auth_token = ""
            this.user = {}
        })
        history.push('/login')
    }
}

export default new Admin();