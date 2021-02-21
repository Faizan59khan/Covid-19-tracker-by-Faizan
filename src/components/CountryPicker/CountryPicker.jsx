import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css'

function CountryPicker({ handleCountry }) {

    const [ fetchedCountries, setFetchedCountries ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={ (e) => handleCountry(e.target.value) }>
                <option value=""> Global </option>
                {
                    fetchedCountries.map((x, index) => <option key={index} value={x}> {x} </option>)
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;