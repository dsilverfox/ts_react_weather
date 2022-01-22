import React from 'react';
// import FetchWeather from './FetchWeather';

class FetchLocation extends React.Component {
    state={
        location: {}
    }

    getLocation() {
    navigator.geolocation.getCurrentPosition(position =>{
       const {latitude, longitude} = position.coords;
        this.setState({location: {latitude, longitude}})
        console.log(this.state.location)
       });
    }
    componentDidMount() {
        this.getLocation();
    }

    render () {
    return (
        <div>
         {/* <FetchWeather location={this.state.location}/> */}
        </div>
        )
    };
}

export default FetchLocation;