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
  const mapType = useSelector((state) => state.region.mapType);

  useEffect(() => {
    if (selectedRegion && selectedRegion.coordinates) {
      // Update the map center to the coordinates of the selected region
      // You may need to adjust the zoom level based on the region size
    }
  }, [selectedRegion]);

  return (<>
   <div className='w-full  h-screen'>
  {mapType=='2d'&&    <GoogleMapComponent selectedRegion={selectedRegion}/>}
  {mapType=='3d'&&    <GlobeComponent selectedRegion={selectedRegion} /> }
    </div>
  </>);
};

export default OSMMap;
