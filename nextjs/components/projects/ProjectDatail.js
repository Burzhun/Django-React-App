import React from 'react';
import api from './api'
import Link from "next/link";


export default class ProjectDetail extends React.Component {
    state = {
        project: {},
    };

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        console.log('componentDidMount props: ', this.props);
        console.log('componentDidMount state: ', this.state);
        if (this.props.slug) {
            api.project(this.props.slug).then(data => {
                this.setState({
                    project: data
                })
            });
        }
    }

    componentWillMount() {
        console.log('componentWillMount props: ', this.props);
        console.log('componentWillMount state: ', this.state);
    }

    render() {

        console.log('Render props: ', this.props.slug);
        console.log('Render state: ', this.state.project);

        if (this.state.project === {}) {
            this.setState({
                slug: this.props.slug,
            })
        }

        return (
            <div>
                <div className="about__header grey__wrapp">
                    <div className="container">
                        <h1>{this.state.project.name}</h1>
                        <div className="about__header_information">
                            <div className="about__header_picture">
                                <img src={this.state.project.cover} alt={this.state.project.name}/>

                                <div className="monik__absolute_single">
                                    <div className="monik__obloj_project">
                                        <img src={this.state.project.screenshot} alt={this.state.project.name}/>
                                    </div>
                                    <img src="/static/img/monik_main.png"/>
                                </div>
                            </div>
                            <div className="about__header_details">
                                <div className="info__counts-wrapper">
                                    {[1, 2, 3].map((i) => (this.state.project[`counter_${i}_value`] &&
                                        <div className="info__count" key={i}>
                                            <div className="info__count_title">
                                                {this.state.project[`counter_${i}_value`]}
                                            </div>
                                            <div>
                                                {this.state.project[`counter_${i}_title`]}
                                            </div>
                                        </div>))}
                                </div>
                                <div className="socials">
                                    {['fb',
                                        'vk',
                                        'instagram',
                                        'twitter',
                                        'ok',
                                        'youtube',
                                        'rss',].map((k) => (this.state.project[k] &&
                                        <a href={k} key={k}><img src={`/static/img/icons/socials/${k}.svg`}/></a>
                                    ))}
                                </div>
                                <Link href={`/${this.props.slug}/issues/`}>
                                    <div className="btn btn-red">
                                        Смотреть выпуски
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <section className="about__text">
                        <div className="row">
                            <div dangerouslySetInnerHTML={{__html: this.state.project.description_full}}/>
                            <div className="download__files">
                                {this.state.project.documents && this.state.project.documents.map(doc => (
                                    <a className={`file file-${doc['type']}`} href={doc['file']} key={doc['title']}>
                                        <div className="file__name">{doc['title']}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="row" dangerouslySetInnerHTML={{__html: this.state.project.info}}/>
                    </section>
                </div>
            </div>
        )
    }
}