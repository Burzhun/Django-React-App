import React from 'react';
import Layout from '../../components/Layout';
import NewIssues from '../../components/issues/NewIssues';
import ProjectDetail from "../../components/projects/ProjectDatail";


function Project({slug}) {
    return (
        <Layout>
            <ProjectDetail slug={slug}/>
            <NewIssues project={slug}/>
        </Layout>
    )
}

Project.getInitialProps = async function ({query}) {
    return {
        slug: query.slug
    }
};

export default Project
