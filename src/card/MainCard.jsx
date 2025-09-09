import React from 'react';
import MultiActionAreaCard from './CardTamplate';

const MainCard = () => {
    return (
        <>
           <div className='flex flex-col space-y-5 space-x-0 mt-20 md:flex-row justify-center items-center  space-x-10 md:mt-0'>
                <MultiActionAreaCard Tilel="form project" Des="This is a form project in React" Image="./image/fromlogo.png" ImageAlt="Form Logo" Link="/fromdata"/>
                <MultiActionAreaCard Tilel="Balance Tracker project" Des="This is a Balance Tracker in React" Image="./image/BalanceTrackerLogo.png" ImageAlt="Balance Tracker Logo" Link="/BanalceTracker"/>
                

           </div>
        </>
    );
}

export default MainCard;
