import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'cb57f57b6fmsh157903ef788fb27p12156djsndd3e7c069ac7'
          },        
    });
      
    return data;
}