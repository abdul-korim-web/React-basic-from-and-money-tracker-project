
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
const BalanceTracker = () => {
    const [MainBalance,setMainBalance] = useState(0)
    const [Income,setIncome] = useState(0)
    const [History,setHistory] = ([])
    let Time = new Date()
    

    // input filed
    let TransactionAmount = useRef()
    let TransactionDetails = useRef()

    let addBtn =()=>{
        setMainBalance(MainBalance + Number(TransactionAmount.current.value))
        setIncome(Income + Number(TransactionAmount.current.value))
        setHistory([...History,{type:`income`,TransactioTime:Time.toLocaleString(),TransactionAmount:Number(TransactionAmount.current.value)}])


    }
   
    return (
        <>
            <section className="balanceTrack bg-white py-4 md:pt-8 md:px-10 px-6 rounded-2xl  ">
                <h1 className='font-semibold text-2xl text-green-400 text-center md:text-3xl '>Balance Tracker</h1>   
                <div className="mainBalance flex flex-col items-center md:mt-3 ">
                    <h2 className='text-xl font-semibold md:text-2xl '>Your balance</h2>
                    <h3 className='font-semibold md:text-2xl '>${MainBalance}</h3>
                </div>
                <div className="moneycalculate flex justify-around items-center md:mt-3 md:text-2
                  ">
                    <div className='income flex flex-col items-center justify-center md:text-xl'>
                        <h3>Income</h3>
                        <h3>${Income}</h3>
                    </div>
                    <div className="Expenses flex flex-col items-center justify-center md:text-xl">
                        <h3>Expenses</h3>
                        <h3>$</h3>
                    </div>
                </div>
                <form action="" className='mt-4 flex flex-col justify-center p-3 md:mt-6 ' onSubmit={(e)=>{e.preventDefault()}}>
                    <input type="text" className='border border-gray-300 py-1 px-3 rounded-xl ' ref={TransactionDetails} placeholder='Please add transaction Details' />
                    <input type="number" className='border border-gray-300 py-1 px-3 rounded-xl mt-2 ' ref={TransactionAmount}  placeholder='Amount' />
                    <div className='addorsum flex  space-x-2 mt-4 '>
                        <Button onClick={addBtn}  variant="contained" >Add Income</Button>
                        <Button  variant="contained" className=''>Add Expenses</Button>

                    </div>
                </form>
                <ul>
                  
                    {/* <li className='flex justify-around bg-green-600 rounded-xl p-2 text-white font-bold *:'>
                        <p>Income</p>
                        <p className='border'></p>
                        <p>520</p>
                    </li> */}
                </ul>
                
            </section>  
        </>
    );
}

export default BalanceTracker;
