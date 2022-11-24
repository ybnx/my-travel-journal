import {FaMapMarkerAlt} from "react-icons/fa";

export default function Card(props) {
    const item = props.item;
    return (
        <div className="card--item">
            <img src={item.imageUrl} alt="" />
            <div className="card--subtitle">
                <span><FaMapMarkerAlt className="card--icon" /></span>
                <span className="card--location">{item.location}</span>
                <span><a href={item.googleMapsUrl} className="map--info">View on Google Maps</a></span>
            </div>
            <h2 className="card--title">{item.title}</h2>
            <strong>{item.startDate} - {item.endDate}</strong>
            <p className="mount--description">{item.description}</p>
        </div>
    )
}



