import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css'

function Charts({ data: { confirmed , recovered, deaths }, country }) {
    const [ daily, setDaily ] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDaily()
            setDaily(dailyData);
            //console.log(dailyData)
        }
       
        fetchAPI();

    }, []);

    const lineChart = (
        daily[0] ? //if data is available line chart will be shown 
        (   
            <Line
                data={{
                    labels: daily.map(x => x.date),
                    datasets: [
                        {
                            data            : daily.map(x => x.confirmed),
                            label           : "Infected",
                            borderColor     : "blue",
                            fill            : true
                        },
                        {
                            data            : daily.map(x => x.deaths),
                            label           : "Deaths",
                            borderColor     : "red",
                            backgroundColor : 'rgba(255, 0, 0, 0.5)',
                            fill            : true   
                        }
                    ]
                }}
            />
        ) : null // data is not fetch yet
    )

    const barChart = (
        confirmed ?    //if data exist se andaza laga liya k pata lag jaye k data agya
        (
            <Bar
                data={{
                        labels   : [ "infected", "recovered", "Deaths" ],
                        datasets : [
                            {
                                label : "people",
                                backgroundColor : [  //array because for each one of labels
                                    "rgba(0, 0, 255, 0.5)",
                                    "rgba(0, 255, 0, 0.5)",
                                    "rgba(255, 0, 0, 0.5)"
                                ],
                                data : [ confirmed.value, recovered.value, deaths.value ]
                            },
                        ],
                    }
                }
                options={{
                        legend : { display: false },
                        title  : { display: true, text: `current state in ${country}` }
                    }
                }
            />
        ) : null
    )
    
    return (
        <div className={styles.container} >
            {
                country ? barChart : lineChart
            }
        </div>
    )
}

export default Charts;