import React from 'react'
import moment from 'moment'
import instance from '../AxiosInstance/instance'

const Cards = ({info,setState}) => {
  let deleteHandler = (fileId) => {
   
   instance.delete(`deletefile/${fileId}`).then(()=>{
    instance.get(`getfiles/${localStorage.getItem("userId")}`).then((response)=>{
        setState(response.data)
       })
   })
  }

  let ext = info.fileName.split(".")[1]
  return (
    <div className='flex p-2 shadow-md '>
    <div className='bg-purple-700 h-16 w-16 rounded-md text-white flex justify-center items-center '>
        <h1>{ext}</h1>
     </div>
   
     <div className=' pl-5 flex justify-between  items-center text-sm'>
       <h2 className='px-4 text-center'>Created At<h4 className='text-purple-700'>{moment(info.metadata.birthtime).format("MMM Do YY") }</h4></h2>
       <h2 className='px-4 text-center'>Updated At<h4 className='text-purple-700'>{moment(info.updatedAt).format("MMM Do YY") }</h4></h2>
     </div>
    
        <div className='flex items-center'>
        <button className='bg-purple-700 text-white rounded px-1 hover:bg-red-600' onClick={()=>{
            deleteHandler(info._id)
        }}>delete</button>
        </div>
     
    </div>
  )
}

export default Cards