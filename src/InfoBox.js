import React from 'react';
import './InfoBox.css';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

function InfoBox({title, cases, total, isRed, active, ...props}) {
    return (
       
       <Card 
       onClick={props.onClick}
       className={`infoBox ${active && "infoBox--selected"} ${isRed && 'info--red'}`}>
           <CardContent>
               <Typography className="infoBox__title" color="textSecondary">
                   {title}
               </Typography>

               <h5 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h5>

               <Typography className="infoBox__total" color="textSecondary">
                   {total} Total
               </Typography>
    
           </CardContent>
       </Card>
    )
}

export default InfoBox
