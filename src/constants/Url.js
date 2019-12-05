const baseUrl = 'https://dataservice.accuweather.com';

export const locationUrl = (apiKey, lat, lng) => baseUrl + `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${lng}`;
export const weatherUrl = (locationKey, apiKey) => baseUrl + `/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`;
// 'http://dataservice.accuweather.com/currentconditions/v1/27905?apikey=j8XExSWeovrGrWToLK6WUjjp6ZcGGIaj&details=true'
export const imageUrl = (iconNum) => `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNum}-s.png`;
