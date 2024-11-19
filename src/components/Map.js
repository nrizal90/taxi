import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ trips }) => {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={12}
      style={{ height: '400px', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {trips.map((trip, index) => (
        trip.pickup_latitude &&
        trip.pickup_longitude &&
        trip.dropoff_latitude &&
        trip.dropoff_longitude && (
          <Marker
            key={index}
            position={[trip.pickup_latitude, trip.pickup_longitude]}
          >
            <Popup>
              <div>
                <p><strong>Fare:</strong> ${trip.fare_amount}</p>
                <p><strong>Distance:</strong> {trip.trip_distance} miles</p>
                <p><strong>Payment:</strong> {trip.payment_type}</p>
              </div>
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};

export default MapComponent;
