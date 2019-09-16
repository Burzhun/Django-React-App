import React from 'react';
import Layout from '../../../../components/Layout';
import IssueDetail from "../../../../components/issues/IssueDetail";
import NewIssues from "../../../../components/issues/NewIssues";

function IssuePage({slug, year, number}) {
    return (
        <Layout>
            <IssueDetail number={number} project={slug}/>
            <NewIssues project={slug}/>
        </Layout>
    );
}

IssuePage.getInitialProps = async function ({query}) {
    return {
        slug: query.slug,
        year: query.year,
        number: query.number,
    }
};

export default IssuePage;
