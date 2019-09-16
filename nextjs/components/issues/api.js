import api from '../api'

api.issues = function (props) {
    const year = props.year || '';
    const project = props.project || '';
    const limit = props.limit || '';
    return this.axios.get(`issues/?project__slug=${project}&date__year=${year}&limit=${limit}`)
        .then(resp => {
            return resp.data;
        })
        .catch(error => {
            console.log(error);
        });
};

api.issue = function (number) {
    return this.axios.get(`issues/${number}/`)
        .then(resp => {
            return resp.data;
        })
        .catch(error => {
            console.log(error);
        });
};

export default api;
