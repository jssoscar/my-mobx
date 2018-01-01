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

    @observable avatar = "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1175020977,2376655099&fm=27&gp=0.jpg";

    @action login = () => {
        this.logged = true;
    }

    @action logout = () => {
        this.logged = false;
    }
}

export default new UserInfo();