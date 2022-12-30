import React from "react"


function MainContent(props) {
    return(
        <div className="main-content">
            <div className="flex">
                <section className="box-1">
                    <img src={props.img} className="travel-img" alt="Mount Fuji"/>
                </section>
                <section className="box-2">
                    <div>
                        <div className="location">
                            <img src="./images/location.png" className="location-img"/>
                            <span className="countries">{props.location}</span>
                            <a href={props.googleMapsUrl}><span>View on Google Maps</span></a>
                        </div>
                        <h1 className="fw-bold">{props.title}</h1>
                        <div className="trip-duration">
                            <h6>{props.startDate} - </h6>
                            <h6> {props.endDate}</h6>
                        </div>
                        <p>{props.description}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MainContent