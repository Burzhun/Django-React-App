import React from 'react';
import api from './api'


export default class IssueDetail extends React.Component {
    state = {
        issue: {}
    };

    componentDidMount() {
        api.issue(this.props.number).then(data => {
            this.setState({
                issue: data
            })
        });
    }

    render() {
        return (
            <div>
                <div className="inner__issue grey__wrapp">
                    {/*<a className="inner__issue_arrow" href=""></a>*/}
                    {/*<a className="inner__issue_arrow inner__issue_arrow-right" href=""></a>*/}
                    <div className="container">
                        <div className="inner__issue_image">
                            <img src={this.state.issue.cover}/>
                        </div>
                        {/*<div className="inner__issue_arrow_mobile">*/}
                        {/*    <a className="inner__issue_arrow" href=""></a>*/}
                        {/*    <a className="inner__issue_arrow inner__issue_arrow-right" href=""></a>*/}
                        {/*</div>*/}
                        <div className="inner__issue_content">
                            <h2>{this.state.issue.name}</h2>
                            <div className="inner__issue_date">
                                <div className="inner__issue_date_number">№{this.state.issue.number}</div>
                                <div
                                    className="inner__issue_date_mounth">({this.state.issue.month_named} {this.state.issue.year})
                                </div>
                                {/*<div className="inner__issue_date_info">В продаже с 27 марта</div>*/}
                            </div>
                            <div className="inner__issue_price"/>
                            {/*<div className="inner__issue_buy">*/}
                            {/*    <a className="btn btn-red" href="#">Купить номер</a>*/}
                            {/*    <button className="like">*/}
                            {/*        <svg width="27" height="24" viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path*/}
                            {/*                d="M19.1557 2.25C21.9165 2.25 24.888 4.14825 24.888 8.316C24.888 10.9462 18.5475 17.2358 13.56 21.327C8.5785 17.274 2.25 11.0093 2.25 8.316C2.25 4.158 5.21625 2.2635 7.97175 2.2635C9.76875 2.2635 11.382 3.06225 12.2872 4.401C12.5662 4.81275 13.0305 5.0595 13.5277 5.06025C13.5285 5.06025 13.5285 5.06025 13.5292 5.06025C14.0265 5.06025 14.4907 4.81425 14.7697 4.40325C15.6862 3.05475 17.3257 2.25 19.1557 2.25ZM19.1557 0.75C16.9822 0.75 14.7907 1.704 13.53 3.56025C12.2812 1.716 10.119 0.7635 7.97175 0.7635C4.38375 0.7635 0.75 3.3585 0.75 8.316C0.75 13.203 13.5637 23.25 13.5637 23.25C13.5637 23.25 26.388 13.1003 26.388 8.316C26.388 3.348 22.749 0.75 19.1557 0.75Z"></path>*/}
                            {/*        </svg>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <a className="btn" href={`/${this.props.project}/issues/`}>
                                Все выпуски
                            </a>
                            <div className="socials">
                                <a href="#"><img src="/static/img/icons/socials/fb.svg"/></a>
                                <a href="#"><img src="/static/img/icons/socials/vk.svg"/></a>
                                <a href="#"><img src="/static/img/icons/socials/twitter.svg"/></a>
                                <a href="#"><img src="/static/img/icons/socials/ok.svg"/></a>
                                <a href="#"><img src="/static/img/icons/socials/youtube.svg"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="inner__articles">
                        <div dangerouslySetInnerHTML={{__html: this.state.issue.description}}/>
                        {this.state.issue.details && this.state.issue.details.map((d, i) => (<div className="inner__article" key={i}>
                                    {d.image &&
                                    <div className="inner__article_img">
                                        <img src={d.image}/>
                                    </div>
                                    }
                                    <div className="inner__article_content">
                                        {/*<div className="inner__article_title">{props.item.title}</div>*/}
                                        <div className="inner__article_description">
                                            {d.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}