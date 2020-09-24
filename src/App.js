 import React,{useState,useEffect} from 'react';
  import './App.css';
  import './index.css';
  import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent
  } from '@material-ui/core';
  import InfoBox from './InfoBox';
  import Map from './Map';
  import Table from './Table';
  import {prettyPrintStat, sortData} from './util';
  import LineGraph from './LineGraph';
  import 'leaflet/dist/leaflet.css';
  import Header from './Header';

  function App() {

 //  how to write variable in react 
  // https: disease.sh/v3/covid-19/countries ==> getting countries 

  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
  const [mapCenter,setMapCenter] = useState({
    lat : 34.80746,lng:-40.4796
  });
  const [mapZoom,setMapZoom] = useState(4);
  const [mapCountries,setMapCountries] = useState([]);
  const [casesType,setCasesType] = useState('cases');


 //  runs piece of code based on some condition

  // loading worldwide data
  useEffect(()=>{
     const getCountry = async ()=>{
       await fetch('https: disease.sh/v3/covid-19/all')
             .then(res=>res.json())
             .then(data=>{
              setCountry('worldwide');
              setCountryInfo(data);
             })
     }

     getCountry();
  },[]);


   //function run once it is load and not further
  useEffect(()=>{
       const getCountries = async ()=> {
         await fetch('https: disease.sh/v3/covid-19/countries')
               .then(res => res.json())
               .then((data)=>{
                 const countries = data.map((country)=>(
                   {
                     name : country.country, usa,india
                     value : country.countryInfo.iso2 UK,USA,FR
                   }
                 ));

                 const sorttabledata = sortData(data);

                 setTableData(sorttabledata);

                 setCountries(countries);

                 setMapCountries(data);

               })
       }

       getCountries();
  },[]);

  const onCountryChange = async (e)=>{
    const countryCode = e.target.value;



    const url = countryCode === 'worldwide' ? 'https: disease.sh/v3/covid-19/all' : `https: disease.sh/v3/covid-19/countries/${countryCode}`;

     console.log(url);

     https: disease.sh/v3/covid-19/countries/{country}

    await fetch(url)
          .then(res=>res.json())
          .then(data=>{
            setCountry(countryCode);
            setCountryInfo(data);

            if(countryCode === 'worldwide'){
                 console.log('hey i am worldwide');
               setMapCenter([34.80746,-40.4796]);
               setMapZoom(4);
            } else {

            setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
            setMapZoom(4);
            }
          });

  }

    return (
       bem naming convention
      <div>
      <Header/>
      <div className="app">




        <div className="app__left">
        <div className="app__header">
        <h1 style={{color : 'grey'}}>Covid-19 Tracker Worldwide</h1>

  <FormControl className="app__dropdown">
    <Select variant="outlined" value={country} onChange={onCountryChange}>
       <MenuItem value="worldwide">Worldwide</MenuItem>
      {
        countries.map(country => (
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ))
      }
    </Select>
  </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox isRed active={casesType==='cases'} onClick={e=>setCasesType('cases')} title="New cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>
          <InfoBox active={casesType==='recovered'} onClick={e=>setCasesType('recovered')} title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>
          <InfoBox isRed active={casesType==='deaths'} onClick={e=>setCasesType('deaths')} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
        </div>



        <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
        </div>
        <Card className="app__right">
          <CardContent>
            <h3 >Live Cases by Country</h3>
            <Table countries={tableData}/>
    <h3>Worldwide new {casesType}</h3>
          </CardContent>

        <LineGraph casesType={casesType} />
        </Card>


      </div>
      </div>
    )
  }

  export default App;


