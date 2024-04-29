import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
});


const PetshopService = {

    async bestPetshops(formData) {
        try {
            const response = await axiosInstance.post('/petshops', formData);
            return response.data;   
        } catch (error) {
            console.error(error);
        }
    }
}


export default PetshopService;