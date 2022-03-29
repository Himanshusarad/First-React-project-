import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Heading';
import "./index.css";
import Sdata from './Sdata';

ReactDOM.render( 
    <>
    <h1 className='heading_style'> List of Top Webseries </h1>
      
       { Sdata.map(val=>{
           return (
            <Card imgsrc={val.imgsrc}
            key={val.id}
            title ={val.title}
            sname={val.sname}
            link={val.link}/>
             
        )
       })};
       
    </>,
    document.getElementById('root'));

