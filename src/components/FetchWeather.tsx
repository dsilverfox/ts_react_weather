import React from 'react';
import FetchLocation from './FetchLocation';
import DisplayData from './DisplayData';

interface LocationProps {
    location: {latitude?:number, longitude?:number} 
}

interface WeatherState {
    weather: object[]
}

class FetchWeather extends React.Component<LocationProps , {}> {
    constructor(props: LocationProps) {
        super(props);
        this.state = {
            weather: [{}]
        }
    }
     baseURL = "http://api.openweathermap.org/data/2.5/weather?";
     key = '750ee8e3454df1bae3ec03c8ae23da35';
     units = "imperial";

     getWeather = async () => {
        const response = await fetch(`${this.baseURL}lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&units=${this.units}&appid=${this.key}`);
        const json = await response.json();
        this.setState({weather: response.json})
        console.log(json)
    }


    render(){
    return (
        <div> 
            <DisplayData weather={weather}/> 
            <FetchLocation />
            <button onClick={this.getWeather}>Get Local Weather</button>
        </div>
            )
    }

 }

export default FetchWeather;
