import React from 'react';
import FetchLocation from './FetchLocation';
// import DisplayData from './DisplayData';

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
    
    getWeather = async () => {
    const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
    const key = '750ee8e3454df1bae3ec03c8ae23da35';
    const units = "imperial";
    const response = await fetch(`${baseURL}lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&units=${units}&appid=${key}`);
        const json = await response.json();
        this.setState({weather: response.json})
        console.log(json)
    }


    render(){
    return (
        <div> 
            {/* <DisplayData weather={weather}/>  */}
            <FetchLocation />
            <button onClick={this.getWeather}>Get Local Weather</button>
        </div>
            )
    }

 }

export default FetchWeather;
