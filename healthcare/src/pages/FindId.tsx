import useSWR from 'swr'
import React, { useState, useCallback } from 'react';
import axios from 'axios'
import fetcher from '../utils/fetcher';
import { useCookies } from "react-cookie";

export default function FindId(){
    
    const [auth,setAuth] = useState<boolean>(false);

    const ButtonChange = ()=>{
        setAuth(true);
    }

    const VeriButton = () => {
        if (auth === true){
            return '재전송'
        }

        else {
            return '인증번호 받기'
        }

    }

    const Block = () => {
        if(auth){
            return (
                <div className="mt-2 flex">
             <input
               id="password"
               name="password"
               required
               className=" flex-auto block w-64  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-6"
             />
             <button  className= "ml-2 flex-auto w-32  justify-center  rounded-md   px-3 py-1.5 text-sm  font-semibold leading-6 text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-2 hover:ring-inset hover:ring-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      
                >
                인증번호 확인
             </button>
           </div>
            )
        }

        else return (<></>)

    }







    return (

        <>
        <h1>
         <a href = '/login'>
         <img
            className="fixed float-left mx-8 my-8 h-10 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150"
            src="/src/assets/backicon.svg"
            
            
          />
          </a>
          </h1>
        <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
       
     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
     
       
        <h2 className="mt-15 mb-9 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            연락처 인증
       </h2>
     </div>

     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
       <form className="space-y-6" action="#" method="POST">
         <div>
           <label className="block text-l font-semibold leading-6 text-gray-900">
             이름
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
             <label className="block text-l font-medium leading-6 text-gray-900">
               연락처
             </label>
           </div>
           <div className="mt-2 flex">
             <input
               id="password"
               name="password"
               required
               className=" flex-auto block w-64  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-6"
             >
                
                </input>
             <button  className= "ml-2 flex-auto w-32  justify-center  rounded-md   px-3 py-1.5 text-sm  font-semibold leading-6 text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-2 hover:ring-inset hover:ring-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      onClick = {ButtonChange}  
                >
                {VeriButton()}
             </button>
           </div>
            {Block()}

         </div>

         <div>
           <button
             type="submit"
             className="mt-64 pt-5 flex w-full h-16 justify-center  rounded-md bg-blue-600 px-3 py-1.5 text-xl  font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"

           >
             확인
           </button>
         </div>
       </form>
     </div>
   </div>
 </>

    )
}