import axios from 'axios';
import { useCookies } from "react-cookie";


const fetcher = (url: string) =>
  axios
    .post(url, null, {
        headers :  {
                'Authorization' : 'dGVhbTIxOnRlYW0yMSEh'

        }
    })
    .then((response) => {response.data;
        console.log(response.data);
        });

export default fetcher;