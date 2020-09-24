import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

const casesTypeColors = {
    cases : {
        hex : '#CC1034',
        // rgb : 'rgb(204,16,52)',
        // half_op : 'rgba(204,16,52,0.5)',
        multiplier : 600
    },
    recovered : {
        hex : 'green',
        // rgb : 'rgb(125,215,29)',
        // half_op : 'rgba(125,215,29,0.5)',
        multiplier : 600
    },
    deaths : {
        hex : '#FB4443',
        // rgb : 'rgb(251,68,67)',
        // half_op : 'rgba(251,68,67,0.5)',
        multiplier : 600
    }
}
export const sortData = (data)=>{

    const sortedData = [...data];

    sortedData.sort((a,b)=>{
     
         return b.cases > a.cases ? 1 : -1;

    });

    return sortedData;

}

export const showDataOnMap = (data,casesType='cases')=>
    //console.log('hey i am sorted');
   // console.log(casesTypeColors[casesType].multiplier)
//    data.map(country=>{
//        console.log([country.countryInfo.lat,country.countryInfo.long]);
//        console.log('color ',casesTypeColors[casesType].hex)
//        console.log('fillColor ',casesTypeColors[casesType].hex);
//        console.log('radius ', Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier)
//    })
    data.map(country=>(

        
             <Circle center={[country.countryInfo.lat,country.countryInfo.long]} fillOpacity={0.4} color={casesTypeColors[casesType].hex} fillColor={casesTypeColors[casesType].hex}
             radius={
                 Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
             }>
             
             <Popup>
                 <div className="info__container">
                     <div className="info__flag"
                      style={{backgroundImage:`url(${country.countryInfo.flag})`}}
                     />
                     <div className="info__name">{country.country}</div>
                     <div className="info__confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                     <div className="info__recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                     <div className="info__deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                 </div>
             </Popup>

             </Circle>

          
    ));

    export const prettyPrintStat = (stat)=>{
        return stat ? `+${numeral(stat).format('0.0a')}` : `+0`
    }
