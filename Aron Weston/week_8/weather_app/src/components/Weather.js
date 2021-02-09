import React, { Component } from 'react'
import axios from 'axios'
import _ from 'underscore'
import GetWeather from './GetWeather'
import CurrentWeather from './CurrentWeather'
import SearchWeather from './SearchWeather'

export class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: [],
            weather: [],
            isLoaded: false
        }
        this.key = "da6cc8d124882796f1f64ad51e846e3c";
        this.exclude = 'current,minutely,hourly,alerts'
        this.getPosition = this.getPosition.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }
    
    getPosition () {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({ coords: pos })
                this.getWeather(this.state.coords)
            }, (err) => {
                console.error(`ERROR(${err.code}): ${err. message}`);
            });
        }
    }

    
    async getWeather(input) {
        
        if (input.coords) {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${input.coords.latitude}&lon=${input.coords.longitude}&appid=${this.key}&units=metric`)
                const weather = res.data;
                if (res.data) {
                    this.setState({
                        isLoaded: true,
                        weather: weather
                    })
                }
                console.log(this.state.weather);
            } catch (error) {  
               console.error(error)
            }
        } else {
            try {
                const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${this.key}&units=metric`)
                // const weather = res.data;
                // if (res.data) {
                //     this.setState({
                //         isLoaded: true,
                //         weather: weather
                //     })
                // }
            } catch (error) {
                console.error(error)
            }
        }
    }
    
    render() {
        return (
            <div>
                <h1>Super Fun</h1>
                <GetWeather onClick={this.getPosition} />
                <SearchWeather onSubmit={this.getWeather} />
                {this.state.isLoaded && 
                    <CurrentWeather weather={this.state.weather} />
                }
            </div>
        )
      
    }
}

export default Weather
