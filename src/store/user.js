import _ from 'lodash'
import { observable, action, runInAction } from 'mobx'

import ApiService from '../services/ApiService'
import StorageService from '../services/StorageService'
import history from '../routers/history'


class User {
    @observable users = []

    @action 
    getUsers = async () => {
        const data = await ApiService.getUsers(StorageService.getToken())

        if(!_.isNull(data)) {
            runInAction(()=>{
                this.users = data
            })
        }
    }

    getUser = async (userId) => {
        const data = await ApiService.getUser(StorageService.getToken(), userId)
        return data || {}
    }

    @action
    createUser = async (params) => {
        const data = await ApiService.createUser(StorageService.getToken(), params)
        if(!_.isNull(data)) {
            runInAction(()=>{
                this.users.push(data)
            })
        }
    }

    @action
    destroyUser = async (key) => {
        await ApiService.destroyUser(StorageService.getToken(), key)
        const index = _.findIndex(this.users, {id: key})
        if(index > -1) {
            runInAction(()=>{
                this.users.splice(index,1)
            })
        }
    }

    @action
    updateUser = async (key, params) => {
        const data = await ApiService.updateUser(StorageService.getToken(), key, params)
        if(!_.isNull(data)) {
            const index = _.findIndex(this.users, {id: data.id})
            if(index > -1) {
                runInAction(()=>{
                    this.users.splice(index, 1, data)
                })
            }
        }
    }
}

export default new User();