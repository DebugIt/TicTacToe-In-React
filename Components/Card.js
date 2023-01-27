import React from 'react'
import './CSS/card.css'

export const Card = ({ info }) => {
    const {
        temp, 
        humidity, 
        pressure, 
        temp_min, 
        temp_max,
        speed,
        country, 
        sunrise, 
        sunset,
        mood,
        name
    } = info;

    const currTime = new Date();
    const time = currTime.toLocaleString("en-US");

    
    let sec0 = sunrise;
    let date0 = new Date(sec0 * 1000);
    let timeStr0 = `${date0.getHours()}:${date0.getMinutes()}`;
    
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}` ;

  return (
    <>
    <div className="card">
        <div className="icon">
        <span class="material-symbols-outlined">cloud</span>
        </div>

        <div className="city-temp0">
          <ul id='contentlist'>
            <li id='temp0'><p>{temp}℃ </p></li>
            <li> {name} | {country}</li>
            <li> {time}</li>             
          </ul>
          
        </div>

        <div className="extras">

            <ul>

                <li>
                    <div className="humidity">
                        <span className="material-symbols-outlined">
                            humidity_percentage
                        </span>
                        {humidity}
                    </div>
                </li>

                <li>
                    <div className="pressure">
                        <span className="material-symbols-outlined">
                            compress
                        </span>
                        {pressure}
                    </div>
                </li>

                <li>
                    <div className="minTemp">
                        Min. Temp {temp_min}
                    </div>
                </li>

                <li>
                    <div className="maxTemp">
                        Max. Temp {temp_max}
                    </div>
                </li>

                <li>
                    <div className="speed">
                    <span className="material-symbols-outlined">
                        air
                    </span>
                    {speed}
                    </div>
                </li>

                <li>
                    <div className="sunrise">
                    <span className="material-symbols-outlined">
                        clear_day
                    </span>
                    {timeStr0}
                    </div>
                </li>

                <li>
                    <div className="sunset">
                    <span className="material-symbols-outlined">
                        nest_farsight_weather
                    </span>
                    {timeStr}
                    </div>
                </li>

            </ul>
        </div>

      </div>

    </>
  )
}
