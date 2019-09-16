import React from 'react';
import Layout from '../../../components/Layout';
import ProjectArchive from "../../../components/projects/ProjectArchive";

function IssuesArchive({slug, year}) {
    return (
        <Layout>
            <ProjectArchive project={slug} year={year}/>
        </Layout>
    );
}

IssuesArchive.getInitialProps = async function ({query}) {
    return {
        slug: query.slug,
        year: query.year || '2019',
    }
};

export default IssuesArchive;
