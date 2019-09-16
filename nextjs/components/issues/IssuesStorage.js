import React from 'react';
import api from "./api";


export default class IssuesStorage extends React.Component {
    state = {
        issues: []
    };

    componentDidMount() {
        api.issues({project: this.props.project, limit: 5}).then(data => {
            this.setState({
                issues: data.results
            })
        });
    }

    render() {
        return (
            <div className="storage__journals">
                {this.state.issues && this.state.issues.map((issue, i) => (
                    <a href={`/${this.props.project}/issues/${issue.year}/${issue.id}/`} key={i}>
                        <img src={issue.cover} />
                    </a>
                ))}
            </div>
        )
    }
};
