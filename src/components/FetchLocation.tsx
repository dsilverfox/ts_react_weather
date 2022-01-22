import React from 'react';

interface iState {
    location: { latitude: number | null, longitude: number },
    weather: {temp: number}
    
}

class FetchLocation extends React.Component<{}, iState> {

   constructor(props: {}) {
       super(props)
       this.state = {
           location: {latitude: null, longitude: 0},
           weather: {temp: 0}
       }
   }

    getLocation() {
    navigator.geolocation.getCurrentPosition(position =>{
       const {latitude, longitude} = position.coords;
        this.setState({location: {latitude, longitude}})
        console.log(this.state.location)
        this.weatherFetch();
       });
    }

    weatherFetch (){
        if(this.state.location !== null) {
            const getWeather = async () => {
            const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
            const key = '750ee8e3454df1bae3ec03c8ae23da35';
            const units = "imperial";
            const response = await fetch(`${baseURL}lat=${this.state.location.latitude}&lon=${this.state.location.longitude}&units=${units}&appid=${key}`);
            const json = await response.json();
            const temp = json.main.temp
            this.setState({weather:{temp}})
            console.log(temp);
             }
             getWeather();
    } else {
        <p>No Location Found</p>
    }
}


    componentDidMount() {
        this.getLocation();
            }

    render () {
    return (
        <div>
        <ul>
            <li>Your temperature is {this.state.weather.temp}</li>
            <li>Your latitude is {this.state.location.latitude}</li>
            <li>Your longitude is {this.state.location.longitude}</li>
        </ul>
        </div>
        )
    };
}

export default FetchLocation;