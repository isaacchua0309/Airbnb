import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filter from './Filter';
import ScrollableResults from './ScrollableResults';
import { locations } from './mockLocations';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <Filter></Filter>
            <ScrollableResults locations={locations}></ScrollableResults>
            <Footer></Footer>
        </div>
    )
};

export default Home;