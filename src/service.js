import axios from 'axios';

class Service {
    constructor() {
        this.state = {
            'Autorization': ''
        }
    }

    validateRequest(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        });
    }

    setToken = (token) => {
        this.state.Autorization = token;
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
