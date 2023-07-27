// import { useEffect, useRef } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const DynamicMap = ({ selectedRegion }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Access the map instance and update its center when selectedRegion changes
//     if (mapRef.current && selectedRegion && selectedRegion.coordinates) {
//       const zoomLevel = determineZoomLevel(selectedRegion); // Function to determine the appropriate zoom level
//       mapRef.current.setView(
//         [selectedRegion.coordinates.latitude, selectedRegion.coordinates.longitude],
//         zoomLevel
//       );
//     }
//   }, [selectedRegion]);

//   const determineZoomLevel = (region) => {
//     // Determine the default zoom level that shows the entire country
//     const defaultZoomLevel = 5;
//     return defaultZoomLevel;
//   };

//   return (
//     <MapContainer
//       center={selectedRegion ? [selectedRegion.coordinates.latitude, selectedRegion.coordinates.longitude] : [0, 0]}
//       zoom={13}
//       style={{ height: '100%', width: '100%' }}
//       ref={mapRef}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {selectedRegion && selectedRegion.coordinates && (
//         <Marker position={[selectedRegion.coordinates.latitude, selectedRegion.coordinates.longitude]}>
//           <Popup>{selectedRegion.name}</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default DynamicMap;





import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const GoogleMapComponent = ({selectedRegion}) => {
  // const selectedRegion = useSelector((state) => state.region);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && selectedRegion && selectedRegion.coordinates) {
      // Update the map center to the coordinates of the selected region
      mapRef.current.panTo({
        lat: selectedRegion.coordinates.latitude,
        lng: selectedRegion.coordinates.longitude,
      });
    }
  }, [selectedRegion]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB-Q17WimeJEYSMaL8lsVMmBmw-j8udzIo', // Replace with your API key
  });

  const mapOptions = {
    zoom: 4, // Set initial zoom level to show the entire countryds
    center: { lat: 0, lng: 0 }, // Set initial center to the equator and prime meridian
    mapTypeId:'satellite'
    
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  

  return isLoaded ? (
    <GoogleMap   mapContainerStyle={containerStyle} options={mapOptions}  ref={mapRef}>
      {/* Add animations here when location changes */}
      {/* For example, you can animate the marker or map when the selectedRegion changes */}
    
    </GoogleMap>
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default GoogleMapComponent;

