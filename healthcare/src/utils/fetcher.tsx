import axios from 'axios';


const fetcher = (url: string) =>
  axios
    .get(url, {
        withCredentials: true,

        headers :  {
                'Authorization' : 'Bearer'+' '+ localStorage.getItem('accesstoken')

        }
        
    })
    .then((res) => {res.data});

export default fetcher;