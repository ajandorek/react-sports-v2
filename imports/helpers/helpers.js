import keys from '../../config/keys';
import axios from 'axios';

export const geocodeAddress = async (address) => {
  const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.googleAPIKey}`);
  
  return res.data.results[0].geometry.location;
    
  // return Promise.resolve(json.results[0].geometry.location);
};