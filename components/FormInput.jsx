// components/FormInput.js
import { useState } from 'react';
import { Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '@/redux/regionSlice';
import RegionInfo from './RegionInfo';
import Image from 'next/image';
 // Make sure the import is correct

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();
  // const [selectedRegion, setSelectedRegion] = useState('');
  const selectedRegion = useSelector((state) => state.region.selectedRegion);
  const allRegions = useSelector((state) => state.region.allRegions);
  const nightMode = useSelector((state) => state.nightMode);

  // const handleRegionChange = (value) => {
  //   setSelectedRegion(value);
  // };

  // const handleLoadButtonClick = () => {
  //   // console.log(selectedRegion)
  //   // Dispatch the selected region to the Redux store
  //   dispatch(setRegion(selectedRegion));
  // };

  return (
    <div className={`absolute  top-32 right-0 z-20 p-4 ${nightMode?' bg-black/30 border-gray-600':' bg-white/50 text-gray-900 border-gray-200'} backdrop-blur-3xl border-2  rounded-l-xl`}>
      {/* <Select
        style={{ width: 200, marginBottom: 16 }}
        placeholder="Select a region"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        <Option value="United States">United States</Option>
        <Option value="India">India</Option>
        <Option value="United Kingdom">United Kingdom</Option>
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>
        Load
      </Button> */}


<div>
  {allRegions.map((region)=>(
    <div 
    className={`cursor-pointer px-3 py-2 rounded-md flex font-medium text-xl gap-x-3 hover:bg-white/10 ${region.name==selectedRegion?.name?(nightMode?'bg-white/30 backdrop-blur-3xl':'bg-white/50 backdrop-blur-3xl' ):''}`} 
    onClick={()=>{dispatch(setRegion(region))}}
     key={region.name}>
     <Image width={100} height={100} src={region.flag} className='w-8 h-8' alt="" /> {region.name}
    </div>
  ))}
</div>

<RegionInfo/>

    </div>
  );
};

export default FormInput;
