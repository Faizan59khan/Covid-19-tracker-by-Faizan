import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

/* export const fetchData = async ()=>{ //its a function returning the response from the api
 try{
  const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url) //destructured 

  const modifiedData = {  // In this we fetch parts of object
    confirmed,
    recovered,
    deaths,
    lastUpdate
  }

  return modifiedData
 
 }
 catch(error){

 }
}

export const fetchDailyData = async ()=>{ //its a function returning the response from the api
  try{
   const {data: {}} = await axios.get(`${url}/daily`) //destructured 
 
   console.log(data)
 
  
  
  }
  catch(error){
 
  }
 }
 */

 export const fetchData = async (country) => { //its a function returning the response from the api
  let changeableUrl = url;
  
  if(country) {
      changeableUrl = `${url}/countries/${country}`;
  }

  const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl); //destructured 

  const modifiedData = { // In this we fetch parts of object
      confirmed,
      recovered,
      deaths,
      lastUpdate 
  }

  return modifiedData;
}

export const fetchDaily = async () => {
  const { data } = await axios.get(`${url}/daily`);

  const modifiedData = data.map(x => (
      { 
          confirmed : x.confirmed.total,
          deaths    : x.deaths.total,
          date      : x.reportDate
      }
  ))

  return modifiedData;
}

export const fetchCountries = async () => {
  const { data: { countries } } = await axios.get(`${url}/countries`);

  const modifiedData = countries.map(x => x.name);

  return modifiedData;
}