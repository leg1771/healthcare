import useSWR from 'swr'
import React, { useState} from 'react';
import fetcher from '../utils/fetcher';
import '../assets/logo.svg'


export default function Main(){

    const server : string = 'http://223.130.161.221';
    const authToken : any = localStorage.getItem('accesstoken')
    
    const { data, error, isLoading } = useSWR(`${server}/api/v1/me`, (url) =>
    fetcher(url, authToken)
  );
      if (error) return "An error has occurred.";
      if (isLoading) return "Loading...";
     
     
     
    

      
    return(
        <div>
            {data.loginId}
        </div>
    )
}