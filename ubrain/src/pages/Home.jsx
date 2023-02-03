import React, { useEffect, useState } from 'react'
import instance from '../AxiosInstance/instance'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'

const Home = () => {
    const [file,setFile]= useState({
        file:""
    })
  


    const [files,setFiles]=useState([])

    

    useEffect(() => {
       instance.get(`getfiles/${localStorage.getItem("userId")}`).then((response)=>{
       setFiles(response.data)
      })
    }, [])
    
  return (
    <div>
    <Navbar file={file} setFile={setFile} setState={setFiles}/>
    <div className='grid grid-cols-4 px-4 py-5'>
    {files.length === 0 ? <h1>no files yet </h1> :
        files.map((eachFiles,index)=>{
            return(
                <Cards key={index} info={eachFiles} setState={setFiles}/>
            )
        })
    }
    </div>
    </div>
  )
}

export default Home