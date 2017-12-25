/*
 * @Author			jssoscar
 * @Date			2017-12-22 19:50:21 
 * @Version			1.0 
 * @Description	
 */

import {observable} from 'mobx'

class UserInfo {
    @observable name = '';

    @observable email = '';

    @observable username = '';
}

export default new UserInfo();