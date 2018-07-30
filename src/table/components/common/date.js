import React, { PureComponent } from 'react';
export default function Dates(){
    return   <div style = {{backgroundColor:'#f90'}}type = 'text' className="date">{new Date().getTime()}</div>

}