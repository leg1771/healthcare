import useSWR from 'swr'
import React, { useState} from 'react';
import fetcher from '../utils/fetcher';
import '../assets/logo.svg'


export default function Main(){
    
    const { data, error, isLoading } = useSWR(
        "http:/223.130.161.221/api/v1/me/",
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (isLoading) return "Loading...";
     

     
    

      
    return(
        <div>
            {data.loginId}
        </div>
    )
}