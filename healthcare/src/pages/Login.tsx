import useSWR from 'swr'
import React, { useState, useCallback } from 'react';
import axios from 'axios'
import fetcher from '../utils/fetcher';
import { useCookies } from "react-cookie";
import '../assets/logo.svg'


export default function Login(){

   
    
    const [tokenCookie, setTokenCookie] = useCookies(["accessToken"]);

    
   
        // 로그인 후 가져온 데이터를 전역으로 관리하기 위한 swr 코드 
    const { data, error, mutate } = useSWR('http://223.130.161.221/api/v1/admins/login', fetcher);
    const [loginError, setLoginError] = useState(false);


    const loginSubmitHandler = (e) => {
        
       

        axios.post('http://223.130.161.221/api/v1/admins/login',null,{
            headers :  {
                'Authorization' : 'dGVhbTIxOnRlYW0yMSEh'
            }
        })
        .then(res => { // headers: {…} 로 들어감.
          console.log('send Ok', res.data)  
          const jwtToken = res.data.accessToken;
          console.log(jwtToken)
          setTokenCookie("accessToken", jwtToken, {
            maxAge: 60 * 30000,
          });
          mutate();
        })

        

     

}



    
    return (
        <>
           <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150"
            src="/src/assets/logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
           
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="bg-white">
                <nav className="flex flex-col sm:flex-row">
                    <button className="text-gray-600 py-4 px-6 block hover:text-blue-600 focus:outline-none text-blue-600 hover:border-b-2 font-medium hover:border-blue-600">
                        관리자 로그인
                    </button><button className="text-gray-600 py-4 px-6 block hover:text-blue-600 hover:border-b-2 hover:border-blue-600   focus:outline-none">
                        직원 로그인
                    </button>
                </nav>
            </div>
            <div>
              <label className="block text-l font-medium leading-6 text-gray-900">
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-6 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-l font-medium leading-6 text-gray-900">
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-6"
                />
              </div>
              
              <div className="text-sm mt-4">
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    아이디 찾기
                  </a>
                  &nbsp;
                  <a className="font-semibold text-blue-600 hover:text-blue-500">
                    /
                  </a>
                  &nbsp;
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                    비밀번호 찾기
                  </a>
                </div>
            </div>

            <div>
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-20 pt-5 flex w-full h-16 justify-center  rounded-md bg-blue-600 px-3 py-1.5 text-xl  font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick = {loginSubmitHandler}
              >
                로그인
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600">
            포인티 계정이 없으세요? |
            
            <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500 ml-1">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </>
    
    )





}


