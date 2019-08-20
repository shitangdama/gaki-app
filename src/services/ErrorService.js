
import _ from 'lodash'
import { 
    message 
} from "antd";

import admin from '../store/admin'
import "antd/lib/message/style";

class ErrorService {
    handleCommonError = (response) => {
        console.log(response)
        if(_.isUndefined(response) || (response && response.status === 403) ) {
            admin.logout()
            return null;
        }

        // if (response.status !== 200 && response.status !== 201 && response.status !== 202  && response.status !== 204) {
        //     message.error(response.data["message"], 2);
        //     return null;
        // }
        
        // if (response.status == 200 || response.status == 201 || response.status == 202  || response.status == 204) {
        //     if (!_.isEmpty(response.data["message"])) {
        //         message.success(response.data["message"], 2);
        //     }
        // }

        return response.data
    }
}

export default new ErrorService()