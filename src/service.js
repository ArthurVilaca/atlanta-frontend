import axios from 'axios';

class Service {
    constructor() {
        this.state = {
            'token': ''
        }

        const currentPath = window.location.pathname + window.location.hash;
        let token = localStorage.getItem('token')
        
        let loginInfo = localStorage.getItem('login-info')
        if(!loginInfo && !this.isSpecificPage(currentPath)) {
            window.location.assign('/#/login')
            return window.location.reload();
        }

        if(!this.isSpecificPage(currentPath)) {
            loginInfo = JSON.parse(loginInfo);
            if(new Date(loginInfo.expiration_date) < new Date()) {
                window.location.assign('/#/login')
                return window.location.reload();
            }
        }

        if(!token && ( currentPath === "/" || currentPath === "/#" || currentPath === "#/")) {
            return window.location.assign('/#/login')
        } else if( !this.isSpecificPage(currentPath) && !token) {
            return window.location.assign('/#/login')
        }
    }

    isSpecificPage(route) {
        let reset = '/#/resetarminhasenha';
        if(route.indexOf(reset) > -1) {
            return true;
        }
        const routes = ['/#/login', '/#/registrar/revendedor', '/#/esqueciminhasenha', '/#/resetarminhasenha']
        return routes.indexOf(route) > -1;
    }

    validateRequest(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        });
    }

    setToken = (token) => {
        this.state.token = token;
    }

    get = (url) => {
        return axios.get('index.php/api' + url, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    post = (url, data) => {
        return axios.post('index.php/api' + url, data, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    put = (url, data) => {
        return axios.put('index.php/api' + url, data, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    delete = (url) => {
        return axios.delete('index.php/api' + url, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
  
}

export default Service;
