import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'

const Navbar = ({file,setFile,setState}) => {



    const navigate = useNavigate()

  
 
    const uploadFile = async(event) => {

        console.log(event.target.files[0]);
        setFile({...file, file:event.target.files[0]});
        let data = new FormData();
        data.append("file",event.target.files[0])
        data.append("user",localStorage.getItem("userId"))

           
        instance.post("uploadfile",data,{
        headers: { 'Content-Type': 'multipart/form-data' }
              
         }).then(()=>{
            
        //    console.log("hello google");
            instance.get(`getfiles/${localStorage.getItem("userId")}`).then((response)=>{
                setState(response.data)
               })
         })
        
    

       
      
    }
 
  return (
    <div className='h-[4rem] w-full px-10 bg-purple-600 flex justify-end items-center'>
               <label htmlFor="fileUpload" className='bg-white rounded-md px-3 font-medium cursor-pointer'>upload</label>
        <button onClick={(e)=>{
             e.preventDefault();
             localStorage.clear();
             navigate('/login')
        }} className='bg-white rounded-md px-3 font-medium cursor-pointer  mx-2'>logout</button>
 
       <input type="file" className='hidden' id='fileUpload'  onChange={uploadFile}></input> 
    </div>
  )
}

export default Navbar