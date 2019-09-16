import React from 'react';
import Container from '../Container'
import api from "./api";
import Layout from "../Layout";

export default class NewIssuesAll extends React.Component {
    state = {
        issues: []
    };

    componentDidMount() {
        api.issues({limit: 2}).then(data => {
            this.setState({
                issues: data.results
            })
        });
    }

    render() {
        return (
            <div className="grey__wrapp grey__wrapp-issue" id="new">
                <div className="wrapper">
                    <div className="sub__anchor">Новые выпуски</div>
                    <div className="slider__issue">
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a*/}
                        {/*    className="issue__title" href="#">Агроинвестор</a>*/}
                        {/*    <div className="issue__date">04.19</div>*/}
                        {/*</div>*/}
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a>*/}
                        {/*    <div className="issue__title">Агротехника и технологии</div>*/}
                        {/*    <div className="issue__date">04.19</div>*/}
                        {/*</div>*/}
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a*/}
                        {/*    className="issue__title" href="#">Агроинвестор</a>*/}
                        {/*    <div className="issue__date">04.19</div>*/}
                        {/*</div>*/}
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a*/}
                        {/*    className="issue__title" href="#">National Geographic Россия</a>*/}
                        {/*    <div className="issue__date">03-04.19</div>*/}
                        {/*</div>*/}
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a*/}
                        {/*    className="issue__title" href="#">Агроинвестор</a>*/}
                        {/*    <div className="issue__date">04.19</div>*/}
                        {/*</div>*/}
                        {/*<div className="issue">*/}
                        {/*    <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a*/}
                        {/*    className="issue__title" href="#">Агроинвестор</a>*/}
                        {/*    <div className="issue__date">04.19</div>*/}
                        {/*</div>*/}

                        {this.state.issues && this.state.issues.map((issue, i) => (
                            <div className="issue" key={i}>
                                <a className="issue__img" href="#"><img src="/static/img/journ6.png"/></a><a
                                className="issue__title" href="#">Агроинвестор</a>
                                <div className="issue__date">04.19</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        );
    }
}
