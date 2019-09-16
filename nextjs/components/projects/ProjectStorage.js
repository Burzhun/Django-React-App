import React from 'react';
import api from "./api";
import IssuesStorage from "../issues/IssuesStorage";


export default class ProjectStorage extends React.Component {
    state = {
        project: []
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
            <div className="storage">
                <div className="container">
                    <div className="storage__header">
                        <div className="storage__title">{this.state.project.name}</div>
                        <a className="btn btn-red" href={`/${this.props.project}/issues/`}>
                            Все выпуски
                        </a>
                    </div>
                    <div className="storage__content">
                        <a className="storage__logo" href="#">
                            <img src={this.state.project.logo}/>
                        </a>

                        <IssuesStorage project={this.props.project}/>
                    </div>
                    {/*<div className="storage__mobile_btn">*/}
                    {/*    <div className="btn btn-red">Читать онлайн</div>*/}
                    {/*</div>*/}
                </div>
            </div>

        )
    }
};
