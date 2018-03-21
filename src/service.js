import axios from 'axios';

class Service {
    constructor() {
        this.state = {
            'token': ''
        }

        const currentPath = window.location.pathname;
        let token = localStorage.getItem('token')

        if(!token && currentPath === "/") {
            window.location.assign('/login')
        } else if( !this.isSpecificPage(currentPath) && !token) {
            window.location.assign('/login')
        }
    }

    isSpecificPage(route) {
        const routes = ['/login', '/registrar/revendedor']
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
        return axios.get(url, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    post = (url, data) => {
        return axios.post(url, data, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }

    put = (url, data) => {
        return axios.put(url, data, { headers: this.state })
            .then((response) => {
                return this.validateRequest(response);
            })
            .catch((error) => {
                console.log('error ' + error);
            });
    }
  
}

export default Service;
