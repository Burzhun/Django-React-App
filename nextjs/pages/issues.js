import React from 'react';
import Layout from '../components/Layout';
import ProjectStorage from "../components/projects/ProjectStorage";

function StoragePage() {
  return (
    <Layout>
        <div className="storages">
            <ProjectStorage project="nat-geo"/>
            <ProjectStorage project="nat-geo-traveler"/>
            <ProjectStorage project="mens-health"/>
            <ProjectStorage project="womens-health"/>
            <ProjectStorage project="agroinvestor"/>
            <ProjectStorage project="agrotechnika"/>
        </div>
    </Layout>
  );
}

export default StoragePage;
