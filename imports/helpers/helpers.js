import keys from '../../config/keys';

export const geocodeAddress = async (address) => {
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.googleAPIKey}`);
  const json = await res.json();

  return json;
};