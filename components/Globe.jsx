// import React, { useEffect, useRef } from 'react';
// import Globe from 'react-globe.gl';

// const GlobeComponent = ({ selectedRegion }) => {
//   const globeRef = useRef(null);

//   useEffect(() => {
//     // Rotate the globe when the selected region changes
//     // You can update the rotation based on the selected region's coordinates
//     if (selectedRegion && selectedRegion.coordinates) {
//       const { latitude, longitude } = selectedRegion.coordinates;
//       if (globeRef.current) {
//         globeRef.current.pointOfView({
//           lat: latitude,
//           lng: longitude,
//           altitude: 3, // Adjust the altitude of the camera position as needed
//         });
//       }
//     }
//   }, [selectedRegion]);

//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <Globe
//           globeImageUrl="/assets/earth.jpg" // Replace with the URL for the Earth texture image
//           globeImageUrlNight="/assets/earth.jpg" // Replace with the URL for the Earth texture image at night
//         backgroundColor="#f0f0f0"
//         ref={globeRef} // Assign the ref to the Globe component
//         width={window.innerWidth} // Set the width to fill the container
//         height={window.innerHeight} // Set the height to fill the container
//       />
//     </div>
//   );
// };

// export default GlobeComponent;


import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { useSelector } from 'react-redux';

const GlobeComponent = ({ selectedRegion }) => {
  const nightMode = useSelector((state) => state.nightMode);
  const globeRef = useRef(null);

  useEffect(() => {
    // Rotate the globe when the selected region changes
    // You can update the rotation based on the selected region's coordinates
    if (globeRef.current && selectedRegion && selectedRegion.coordinates) {
      const { latitude, longitude } = selectedRegion.coordinates;
      globeRef.current.pointOfView({ lat: latitude, lng: longitude, altitude: 2 });
    }
  }, [selectedRegion]);

  // Custom createPoints function to highlight selected country
//   const createPoints = (countriesData) => {
//     return countriesData.map((country) => {
//       const { isoAlpha3 } = country;
//       const isSelected = selectedRegion && isoAlpha3 === selectedRegion.isoAlpha3;
//       return {
//         ...country,
//         color: isSelected ? 'blue' : 'grey', // Custom color for selected country
//       };
//     });
//   };

  return (
    <div className='cursor-grabbing'>
      <Globe 
        globeImageUrl="/assets/earth.jpg" // Replace with the correct URL for the Earth texture image
        globeImageUrlNight="/assets/earth.jpg" // Replace with the correct URL for the Earth texture image at night
        backgroundColor={nightMode?'#000000':'#ccfbf1'}
        ref={globeRef} // Assign the ref to the Globe component
        width={window.innerWidth} // Set the width to fill the container
        height={window.innerHeight} // Set the height to fill the container
        animateIn={true}
        animateOut={true}
        pointOfView={selectedRegion?.coordinates || { lat: 0, lng: 0, altitude: 2 }} // Use the selected region's coordinates for rotation
        // createPoints={createPoints} // Use custom createPoints function to highlight selected country
      />
    </div>
  );
};

export default GlobeComponent;
