import useSWR from 'swr'
import React, { useState, useCallback } from 'react';
import axios from 'axios'
import fetcher from '../utils/fetcher';
import { useCookies } from "react-cookie";

export default function Login(){

    //로그인 기능 코드
    
   
        // 로그인 후 가져온 데이터를 전역으로 관리하기 위한 swr 코드 
    const { data, error, mutate } = useSWR(‘/api/users’, fetcher);
    const [loginError, setLoginError] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = useCallback( // 
      (e) => {
        e.preventDefault();
        setLoginError(false);
        axios
          .post(
            'http://223.130.161.221/api/v1/admins/login',
            { id, password },   
            {
              withCredentials: true,
            },
          )
          .then(() => {
            mutate()
          })
          .catch((error) => {
            setLoginError(error.response?.data?.statusCode === 401);
          });
      },
      [id, password],
    );
    
   

    const onChangeEmail = (e)=>{
        setId(e.target.value)
        
    }

    const onChangePassword = (e)=>{
        setPassword(e.target.value)
       
    }

    const loginSubmitHandler = (e) => {
        

        axios.post('http://223.130.161.221/api/v1/admins/login',null,{
            headers :  {
                'Authorization' : 'dGVhbTIxOnRlYW0yMSEh'
            }
        })
        .then(res => { // headers: {…} 로 들어감.
          console.log('send ok', res.data)
          mutate()
        })

        
     

}



    
    return (
        <>
            <div>
                id : <input type = 'id' onChange = {onChangeEmail} ></input>
                pw : <input type = 'password' onChange = {onChangePassword}></input>
                <button onClick = {loginSubmitHandler} >로그인</button>
            </div>
        </>
    )





}


