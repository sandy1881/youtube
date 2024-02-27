import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':"6d6982321fmsh63d13d2328ff1f0p10678cjsn57a2097025fa",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataFromApi =async(url)=>{
  const {data} =await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}