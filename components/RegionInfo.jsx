// components/RegionInfo.js
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const selectedRegion = useSelector((state) => state.region.selectedRegion);

  return (
    <div className={` ${nightMode?'bg-white text-gray-800':'bg-gray-950 text-white'}  p-3 text-base rounded-md mt-4`}>
      {selectedRegion ? (
        <div>

          <p className='flex justify-between'>Currency Symbol: <span className='font-bold'>{selectedRegion.currencySymbol}</span></p>
          <p className='flex justify-between'>Speed Unit: <span className='font-bold'>{selectedRegion.speedUnit}</span></p>
          <p className='flex justify-between'>Distance Unit: <span className='font-bold'>{selectedRegion.distanceUnit}</span></p>
          <p className='flex justify-between'>Volume Unit: <span className='font-bold'>{selectedRegion.volumeUnit}</span></p>
          <p className='flex justify-between'>Timezones: <span className='font-bold'>{selectedRegion.timezones.join(', ')}</span></p>
        </div>
      ) : (
        <p className='italic'>~ Please select a country ~</p>
      )}
    </div>
  );
};

export default RegionInfo;
