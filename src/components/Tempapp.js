import React, { useState, useEffect } from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dca64f7da4d1e76661844b426b9cf1f4`;
            
            const response = await fetchApi(url);
            const resJson = await response.json();
            
            setCity(resJson.main);
        }
        fetchApi();
    },[search] )

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    className="inputField" 
                    onChange={ (event) => { setSearch(event.target.value) } }  />
                </div>

        {!city ? (
            <p> No Data Found </p>
        ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
            </h2>
            <h1 className="temp">
                {city.temp}° C
            </h1>
            <h3 className="dev-info">Designed by Ramesh Choudhary</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        )}


            </div>
        </>
    )
}
export default Tempapp
