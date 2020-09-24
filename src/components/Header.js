import React from 'react'
import Title from './Title'

function header(props) {
    return (
        <header style={{backgroundColor:"grey",color : "white",width:"100%",height:"1cm"}}>
            <Title id={props.id}/>
        </header>
    )
}

export default header
