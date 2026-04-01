"use client"

// 1. Swapped Circle for CircleMarker
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const myLocations = [
  {
    id: 1,
    city: "Misawa, Japan",
    position: [40.6844, 141.3533] as [number, number],
    details: "The place I most want to return to!"
  },
  {
    id: 2,
    city: "Edwards, California",
    position: [34.9240, -117.9351] as [number, number],
    details: "Where I developed a love for bike-riding and bagels."
  },
  {
    id: 3,
    city: "Osan, South Korea",
    position: [37.1498, 127.0770] as [number, number],
    details: "Where I learned to frolic in the outdoors and appreciate a good breakfast."
  },
  {
    id: 4,
    city: "Monterey, California",
    position: [36.6002, -121.8947] as [number, number],
    details: "Fond memories of visiting the aquarium and having that classic cul-de-sac childhood experience."
  },
  {
    id: 5,
    city: "Hamburg, Germany",
    position: [53.5511, 9.9937] as [number, number],
    details: "The birthplace of the hamburger, it was like meeting a celebrity"
  },
  {
    id: 6,
    city: "Ramstein, Germany",
    position: [49.4447, 7.5256] as [number, number],
    details: "No cool food namesake, but a place I really developed my values and experienced complete imersion in German culture."
  },
  {
    id: 7,
    city: "Vienna, VA",
    position: [38.9012, -77.2653] as [number, number],
    details: "A huge change from my other environments that tested my adaptability."
  },
  {
    id: 8,
    city: "Rome, Italy",
    position: [41.9028, 12.4964] as [number, number],
    details: "Another imersive cultural experience and the only language I am able to recall (ciao!)."
  },
  {
    id: 9,
    city: "Yorktown, VA",
    position: [37.2388, -76.5097] as [number, number],
    details: "Another departure from what I am used to, but living in the birthplace of America is a cool thing to put on the resume."
  }
];

export default function PlacesMap() {
  return (
    // 1. Updated filters here: pure grayscale, slightly bumped contrast and brightness to remove the cream!
    <div className="h-96 w-full rounded-xl overflow-hidden border-2 border-blue-100 shadow-md mb-12 [&_.leaflet-tile-pane]:filter [&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:contrast-[1.1] [&_.leaflet-tile-pane]:brightness-[1.05]">
      <MapContainer 
        center={[30.0, 0.0]} 
        zoom={2} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {myLocations.map((loc) => (
          <CircleMarker 
            key={loc.id} 
            center={loc.position} 
            radius={10} 
            pathOptions={{ 
              color: '#2563eb', 
              fillColor: '#3b82f6', 
              fillOpacity: 0.7, 
              weight: 2 
            }}
          >
            <Popup>
              <strong className="text-blue-600 text-sm">{loc.city}</strong>
              <div className="mt-1 text-gray-600 leading-snug">
                {loc.details}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}