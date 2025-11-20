export default function Entry(props) {  

    return (
          <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.image} 
                />
            </div>
            <div className="info-container">
              
                <span className="state">{props.state}</span>
                <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
            
        </article>
    )
}

