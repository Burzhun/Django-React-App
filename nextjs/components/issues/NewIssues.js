import React from 'react';
import Container from '../Container'
import api from "./api";

export default class NewIssues extends React.Component {
    state = {
        issues: []
    };

    componentDidMount() {
        api.issues({project: this.props.project || '', limit: 3}).then(data => {
            this.setState({
                issues: data.results
            })
        });
    }

    render() {
        return (
            <Container>
                <div className="grey__wrapp grey__wrapp-new_issue">
                    <div className="wrapper">
                        <div className="sub__anchor">Новые выпуски</div>
                        <div className="new__issues container">
                            {this.state.issues && this.state.issues.map((issue, i) => (
                                <div className="new__issue" key={i}>
                                    <div className="new__issue_img">
                                        <img src={issue.cover} />
                                    </div>
                                    <div className="new__issue_content">
                                        <div className="new__issue_data">
                                            {issue.number && <span>№{issue.number}</span>}
                                            {issue.month}.{issue.year.substr(issue.year.length - 2)}
                                        </div>
                                        <a className="btn new__issue_btn" href={`/${this.props.project}/issues/${issue.year}/${issue.id}/`}>
                                            Подробнее
                                        </a>
                                        {/*<div className="btn btn-red">Купить номер</div>*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
