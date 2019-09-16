import React from 'react';
import api from "./api";
import Link from "next/link";


export default class IssuesArchive extends React.Component {
    state = {
        issues: []
    };

    componentDidMount() {
        api.issues({project: this.props.project, year: this.props.year}).then(data => {
            this.setState({
                issues: data
            })
        });
    }

    render() {
        return (
            <div className="archive__content">
                <div className="archive__date">
                    {['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',].map(y => (
                        <a href={`/${this.props.project}/issues/${y}/`} className={y == this.props.year ? 'archive__date-active' : ''} key={y}>
                            {y}
                        </a>
                    ))}
                    {/*<a  href="#">2019</a>*/}
                </div>

                <div className="archive__journals">
                    {this.state.issues.map(issue => (
                        <div className="archive__journal" key={issue.id}>
                            <div className="archive__journal_img">
                                <img src={issue.cover}/>
                            </div>
                            <div className="archive__journal_content">
                                <div className="archive__journal_data">
                                    {issue.number && <span>№{issue.number}</span>}
                                    {issue.month}.{issue.year.substr(issue.year.length - 2)}
                                </div>
                                <Link href={`/${this.props.project}/issues/${issue.year}/${issue.id}/`}>
                                    <button className="btn btn_more">
                                        Подробнее
                                    </button>
                                </Link>
                                {/*<a className="btn btn-download" href="#">Скачать номер</a>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};
