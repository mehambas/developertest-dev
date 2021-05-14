import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-dom';
import Layout from '../components/Layout';
import List from '../components/List/List';

const searchClient = algoliasearch('testingWYUM3QGL0M', '298a84786d04a76fc9edccfbd203bb8e');
const SearchPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <InstantSearch
            searchClient={searchClient}
            indexName="Stage-ComputerUniverse"
        >
            <List />
        </InstantSearch>
    </Layout>
);

export default SearchPage;
