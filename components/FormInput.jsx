// components/FormInput.js
import { useState } from 'react';
import { Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from '@/redux/regionSlice';
import RegionInfo from './RegionInfo';
 // Make sure the import is correct

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();
  // const [selectedRegion, setSelectedRegion] = useState('');
  const selectedRegion = useSelector((state) => state.region.selectedRegion);
  const allRegions = useSelector((state) => state.region.allRegions);

  // const handleRegionChange = (value) => {
  //   setSelectedRegion(value);
  // };

  // const handleLoadButtonClick = () => {
  //   // console.log(selectedRegion)
  //   // Dispatch the selected region to the Redux store
  //   dispatch(setRegion(selectedRegion));
  // };

  return (
    <div className='absolute top-32 right-0 z-20 p-4 bg-black/30 backdrop-blur-xl border-2 border-gray-600 rounded-l-xl'>
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
    className={`cursor-pointer px-3 py-2 rounded-md flex font-medium text-xl gap-x-3 hover:bg-black/10 ${region.name==selectedRegion?.name?'bg-black/10 backdrop-blur-3xl':''}`} 
    onClick={()=>{dispatch(setRegion(region))}}
     key={region.name}>
     <img src={region.flag} className='w-8 h-8' alt="" /> {region.name}
    </div>
  ))}
</div>

<RegionInfo/>

    </div>
  );
};

export default FormInput;