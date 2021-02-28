import React from 'react';

const CurrentWeather = (props) => {

  if (props?.weather ?) {
    return (
    <div className='output'>
      {props?.weather?.name}
      {props?.weather?.main.humidity}
      {props?.weather?.main.feels_like}
      {props?.weather?.main.temp_max}
      {props?.weather?.main.temp_min}
      {props?.weather?.sys.sunrise}
      {props?.weather?.sys.sunset}
    </div>
  );
  }
  
};

export default CurrentWeather;
