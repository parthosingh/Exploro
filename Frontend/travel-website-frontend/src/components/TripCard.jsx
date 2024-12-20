import { Link } from 'react-router-dom';

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <h3>{trip.tripName}</h3>
      <p>{trip.description}</p>
      <p>{trip.price} USD</p>
      <Link to={`/trips/${trip._id}`}>View Details</Link>
    </div>
  );
}

export default TripCard;
