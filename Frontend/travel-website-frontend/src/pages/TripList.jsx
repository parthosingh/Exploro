import { useState, useEffect } from 'react';
import axios from 'axios';
import TripCard from '../components/TripCard';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/trips')  // Replace with your backend URL
      .then(response => setTrips(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Upcoming Trips</h1>
      <div>
        {trips.map(trip => (
          <TripCard key={trip._id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default TripList;
