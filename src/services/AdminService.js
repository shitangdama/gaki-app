
import api from '../config/api'
import ApiService from '../services/ApiService'

class AdminService extends ApiService {

    async login(params) {
        const url = `${api.auth}/login`
        const res = await this.apiCall(url, 'POST', false, params);
        console.log(res)
        // const data = ErrorService.handleCommonError(res)
        // return data;
    }
}

export default new AdminService();