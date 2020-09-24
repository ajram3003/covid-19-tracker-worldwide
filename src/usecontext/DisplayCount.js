import React, {useContext} from 'react';
import {CountContext} from '../App';

function DisplayCount() {

  const count = useContext(CountContext);

  return (
    <h2>{count} , displayed</h2>
  );
}



export default DisplayCount;
