import React from 'react'
import '../css/Card.css'

function Card() {
    return (
        <div className='card--container'>
            <div className='card--imageContainer'>
                <img src='https://source.unsplash.com/WLxQvbMyfas'/>
            </div>

            <div className='card--infoContainer'>
                <div className='card--locationContainer'>
                    <h3 className='card--location'><i className='fa-solid fa-location-dot'></i>Japan</h3>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
                </div>

                <div className='card--title'>
                    <h2>Mount Fuji</h2>
                </div>

                <div className='card--descContainer'>
                    <div className="card--dateContainer">
                        <p className="card--dateStart">12 Jan, 2021</p>
                        <p className="card--dateEnd">24 Jan, 2021</p>
                    </div>

                    <div className="card-descWrapper">
                        <p>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Card;