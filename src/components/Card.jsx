import React from 'react'
import '../css/Card.css'

function Card(props) {
    console.log(props.data.title);
    return (
        <div className='card--container'>
            <div className='card--imageContainer'>
                <img src={props.data.imageUrl}/>
            </div>

            <div className='card--infoContainer'>
                <div className='card--locationContainer'>
                    <h3 className='card--location'><i className='fa-solid fa-location-dot'></i>{props.data.location}</h3>
                    <a href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>

                <div className='card--title'>
                    <h2>{props.data.title}</h2>
                </div>

                <div className='card--descContainer'>
                    <div className="card--dateContainer">
                        <p className="card--dateStart">{props.data.startDate}</p>
                        <p className="card--dateEnd">{props.data.endDate}</p>
                    </div>

                    <div className="card-descWrapper">
                        <p>
                        {props.data.description}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Card;