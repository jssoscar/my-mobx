/*
 * @Author			jssoscar
 * @Date			2017-12-22 19:50:21 
 * @Version			1.0 
 * @Description	
 */

import {observable, action} from 'mobx'

class UserInfo {
    @observable name = '';

    @observable email = '';

    @observable username = '';

    @observable logged = true;

    @action login = () => {
        this.logged = true;
    }

    @action logout = () => {
        this.logged = false;
    }
}

export default new UserInfo();