import React from 'react';
import api from "./api";
import IssuesArchive from "../issues/IssuesArchive";


export default class ProjectArchive extends React.Component {
    state = {
        project: {}
    };

    componentDidMount() {
        api.project(this.props.project).then(data => {
            this.setState({
                project: data
            })
        });
    }

    render() {
        return (
            <div className="archive container">
                <h2>архив {this.state.project.name}</h2>
                <IssuesArchive project={this.props.project} year={this.props.year}/>
            </div>
        )
    }
};
