import React from "react";
import './styles/weatherHeader.css';

export default function WeatherHeader(props){
    return (
        <div className="WeatherHeader">
            <h1>{props.name ? props.name : ''} Weather</h1>
        </div>
    )
}