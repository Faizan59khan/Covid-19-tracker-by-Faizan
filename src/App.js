import React, { Component } from 'react';
import { Cards, Charts, CountryPicker, Navbar } from './components';
import { fetchData } from './api';
import pic from './image.png';
import { StylesProvider } from '@material-ui/core';
import styles from './App.module.css'

class App extends Component {

    state = {
        data      : {},
        country   : "",
        isLoading : true
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data      : fetchedData,
            isLoading : false
        })
    }

    handleCountry = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data    : fetchedData,
            country : country
        })
    }

    render() {
        const { isLoading, data, country } = this.state;

        if(isLoading) {
            return (
                <div>
                    <h1> Loading... </h1>
                </div>
            )
        }
        
        return (

            <div className={styles.container}>
               
                <img
                    src={pic}
                    alt="covid19"
                    className={styles.image}
                />
                <Cards
                    data={data}
                />
                <CountryPicker
                    handleCountry={this.handleCountry}
                />
                <Charts
                    data={data}
                    country={country}
                />
             </div>
        )    
    }
}

export default App;