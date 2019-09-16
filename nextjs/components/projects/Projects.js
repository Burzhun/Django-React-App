import React from 'react';
import Project from "./Project";
import api from './api'


export default class Projects extends React.Component {

    state = {
        projects: [],
    };

    componentDidMount() {
        api.projects().then(data => {
            this.setState({
                projects: data
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.projects.map((project, i) => (
                    <Project key={`project-${i}`} {...project}/>
                ))}
            </div>
        )
    }
}

