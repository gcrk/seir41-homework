import React from 'react';

const Forecast = (props) => {

    const data = props.data.forecast.daily;
    const date = time.getDate(day.dt);
    const weekDay = time.getDay(day.dt);
  
    return (
        <table>
            <thead>
                <tr>
                    <th>{weekDay} - { date }</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {data.forEach(day => {
                        <td>
                            <span>{day}</span>
                            <span>{condition}</span>
                            <span>{Math.floor(day.temp.min)}{"&#8451;"} / {Math.floor(day.temp.max)} {"&#8451;"}</span>
                        </td>
                    })}
                </tr>
            </tbody>
        </table>
    );
}

export default Forecast;
