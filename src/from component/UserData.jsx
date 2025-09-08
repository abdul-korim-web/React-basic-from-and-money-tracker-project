import React, { useState } from 'react';

const UserData = () => {
    const [fromDatra,setfromData] = useState({fristName:``,lastName:``,Email:``,password:``,gender:``,Divition:``})
    const [submitData,setsubmitData]= useState({})
    // user info saveing
    let handelchange = (proparty,value)=>{
        setfromData(preData=>({
            ...preData,
            [proparty]:value
        }))
    }
    let fromSubmit =(e)=>{
        e.preventDefault();
        setsubmitData(fromDatra)

    }
    return (

       
        <>
            
            
            <form action=""    className=' bg-white p-5 rounded-2xl flex flex-col space-y-2 md:p-20   '>
                <div className='fristName flex flex-col space-y-1 '>
                    <label htmlFor="fristName" className='font-semibold '>frist Name:</label>
                    <input onChange={(e)=>{handelchange("fristName",e.target.value)}} value={fromDatra.fristName} type="text" className='border border-gray-300 rounded-xl py-1 px-3' placeholder='Enter your fristName' />
                </div>
                <div className='lastName flex flex-col space-y-1'>
                    <label htmlFor="lastName" className='font-semibold '>last Name:</label>
                    <input onChange={(e)=>{handelchange("lastName",e.target.value)}} value={fromDatra.lastName} type="text" className='border border-gray-300 rounded-xl py-1 px-3' placeholder='Enter your lastName' />
                </div>
                <div className='Email flex flex-col space-y-1'>
                    <label htmlFor="Email" className='font-semibold '>Email:</label>
                    <input type="text" onChange={(e)=>{handelchange("Email",e.target.value)}} value={fromDatra.Email} className='border border-gray-300 rounded-xl py-1 px-3' placeholder='Enter your Email' />
                </div>
                <div className='password flex flex-col space-y-1'>
                    <label htmlFor="password" className='font-semibold '>password:</label>
                    <input type="password" onChange={(e)=>{handelchange("password",e.target.value)}} value={fromDatra.password} className='border border-gray-300 rounded-xl py-1 px-3' placeholder='Enter your password' />
                </div>
                <div className='gender flex flex-col space-y-1'>
                    <label htmlFor="gender" className='font-semibold '>Whis is your Gender:</label>
                    <div className='flex space-x-1'>
                        <input type="radio" onChange={(e)=>{handelchange("gender","Mail")}} value={fromDatra.gender} className='' name='gender' /> Mail
                        <input type="radio" name='gender' value={fromDatra.gender} onChange={(e)=>{handelchange("gender","Femail")}} /> Femail
                    </div>
                    
                </div>
                <div className='Divition flex flex-col space-y-1'>
                    <label htmlFor="gender" className='font-semibold '>Whis is your Divition:</label>
                    <select name="" id="" value={fromDatra.Divition} onChange={(e)=>{handelchange("Divition",e.target.value)}}>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Bogura">Bogura</option>
                        <option value="Pabna">Pabna</option>
                    </select>
                    
                </div>
                <div className='mt-3'>
                    <button onClick={fromSubmit} className='bg-blue-500 w-full p-2 text-white font-semibold *:'>Submit</button>
                </div>
                <div className='text-gray-500 font-semibold'>
                    <h3>Email : {submitData.Email}</h3>
                    <h3>UserName : {submitData.fristName +` ` + submitData.lastName}</h3>
                    <h3>gender : {submitData.gender}</h3>
                    <h3>Divition : {submitData.Divition}</h3>

                </div>

            </form>
        </>
    );
}

export default UserData;
