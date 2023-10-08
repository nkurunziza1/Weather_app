import React from 'react'
import { getCurrentDate } from '../utils/currentDate';





const Current = ({data}) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current ? data.current.condition.icon: null;
  return (
    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 width-1/2'>
     <div className='flex items-center'>
        <div>
            <h1 className='text-3xl text-white'>Today</h1>
            <p className='text-white'>{currentDate}</p>
        </div>
     </div>
    </div>
  )
}

export default Current
