import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Booking() {
  const { id } = useParams();  // Get the trip ID from the URL
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/trips/${id}`)
      .then(response => setTrip(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleBooking = () => {
    // Handle booking logic here, you may want to call the API to create a booking
    console.log('Trip booked:', trip);
  };

  return (
    <div>
      {trip && (
        <div>
          <h1>{trip.tripName}</h1>
          <p>{trip.description}</p>
          <p>{trip.price} USD</p>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      )}
    </div>
  );
}

export default Booking;
