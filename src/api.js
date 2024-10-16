import axios from 'axios';

const searchImages = async () => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
      Authorization: 'Client-ID 0ddyvwve7xgGODOWH2-NUHBMTk8I5jD4DLB4lOZZH_I'
		},

		params: {
      query: 'cars'
		}
	});
  console.log(response);
  return response
};

export default searchImages;