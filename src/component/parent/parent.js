import React, { Component } from 'react';
import Header from '../header/header';
import Categories from '../catagories/catagories';
import Footer from '../footer/Footer';
import Container from 'muicss/lib/react/container';
import SearchBar from '../searchBar/searchBar';
import ShowAllAD from '../showAllAd/showAllAd';
import ShowSearchContent from '../searchBar/showSearchContent/showSearchContent'


export default class Parent extends Component {
  render() {
    return (
        <Container fluid={true}  className="App">
        <div>
      <div >
        {/* <ShowSearchContent /> */}

        <Header />
        <SearchBar />
        <Categories />
        <ShowAllAD />
        </div>
        <Footer />
      </div>
      </Container>
    )
  }
}
