import React from "react";
import './styles/weatherHeader.css';

export default function WeatherHeader(props){

    return (
        <div className="WeatherHeader">
            <h1 style={{ fontSize: props.fontSize +'px' }}>{props.name ? props.name : ''}</h1>
        </div>
    )
}