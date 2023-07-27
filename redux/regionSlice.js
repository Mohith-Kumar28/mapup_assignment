// redux/regionSlice.js
import { createSlice } from '@reduxjs/toolkit';
import * as turf from '@turf/turf';

const regions = [
    {
      name: 'United States',
      flag:'/assets/flags/usa.png',
      currencySymbol: '$',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezones: ['GMT-4', 'GMT-5'],
      coordinates: { latitude: 37.0902, longitude: -95.7129 }, // Add location center coordinates
    },
    {
      name: 'India',
      flag:'/assets/flags/india.png',
      currencySymbol: '₹',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezones: ['GMT+5:30'],
      coordinates: { latitude: 20.5937, longitude: 78.9629 }, // Add location center coordinates
    },
    {
      name: 'United Kingdom',
      flag:'/assets/flags/uk.png',
      currencySymbol: '£',
      speedUnit: 'mph',
      distanceUnit: 'miles',
      volumeUnit: 'gallons',
      timezones: ['GMT+1'],
      coordinates: { latitude: 55.3781, longitude: -3.4360 }, // Add location center coordinates
    },
  ];

const regionSlice = createSlice({
  name: 'region',
  initialState: {allRegions:regions,mapType:'3d'},
  reducers: {
    setRegion: (state, action) => {
        state.selectedRegion= action.payload;
        // state.selectedRegion= regions.find((region) => region.name === action.payload) || null;
      },
    setMapType: (state, action) => {
        state.mapType= action.payload;
       
      },
  },
});

export const { setRegion,setMapType } = regionSlice.actions;
export default regionSlice.reducer;
