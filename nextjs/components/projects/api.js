import api from '../api'

api.projects = function () {
    return this.axios.get(`projects/`)
        .then(resp => {
            return resp.data;
        })
        .catch(error => {
            console.log(error);
        });
};

api.project = function (slug) {
    return this.axios.get(`projects/${slug}/`)
        .then(resp => {
            return resp.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export default api;
