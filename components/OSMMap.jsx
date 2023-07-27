// components/OSMMap.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import dynamic from 'next/dynamic';



const GlobeComponent = dynamic(() => import('./Globe'), {
    ssr: false,
  });
const GoogleMapComponent = dynamic(() => import('./GoogleMapComponent'), {
    ssr: false,
  });
const OSMMap = () => {
  const selectedRegion = useSelector((state) => state.region.selectedRegion);

  useEffect(() => {
    if (selectedRegion && selectedRegion.coordinates) {
      // Update the map center to the coordinates of the selected region
      // You may need to adjust the zoom level based on the region size
    }
  }, [selectedRegion]);

  return (<>
   <div className='w-full  h-screen'>
      <GoogleMapComponent selectedRegion={selectedRegion}/>
      {/* <GlobeComponent selectedRegion={selectedRegion} />  */}
    </div>
  </>);
};

export default OSMMap;
