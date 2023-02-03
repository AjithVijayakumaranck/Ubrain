import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'

const Signup = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem("logged")){
       navigate('/')
    }else{
      navigate('/signup')
    }
  

  }, [])
  const [form,setForm] = useState({
    email:"",
    password:""
   })

    let submitHandler = (e) => {
        e.preventDefault()
        instance.post('signup',form).then(()=>{
            navigate('/login')
        }).catch(()=>{
            navigate('/login')
        })
    }
  return (
    <div className='flex justify-evenly items-center h-screen'>
       <div>
       <h1 className='font-bold text-[5rem] text-purple-700'>signUp</h1>
        <h5>already have account?<Link to='/login'><span className='text-purple-700' >Login</span></Link></h5>
       </div>
       
      <div className='h-[30rem]  w-[40rem] flex justify-center items-center'>
      <form onSubmit={submitHandler}> 
       <label htmlFor="" className='text-purple-800 font-semibold px-3' >Email</label>
       <div className='py-4'>
       <input type="text" placeholder='emailId' value={form.email} onChange={(e)=>{
       setForm({...form,email:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100'/>
       </div>
       <label htmlFor="" className='text-purple-800 font-semibold px-3'>Password</label>
       <div>
       <input type="password" placeholder='emailId' value={form.password} onChange={(e)=>{
       setForm({...form,password:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100'/>
       </div>
       <button className='bg-purple-700 rounded px-2 py-1 text-white mt-4'>signup</button>
     </form>


      </div>

    </div>
  )
}

export default Signup