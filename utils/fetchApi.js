import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'c2ce7e2bd2msh8ba0cba767cc757p1623b1jsnd1681883c449'
          }  
    })
    return data;
}
