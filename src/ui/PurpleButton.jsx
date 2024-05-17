import React from 'react'
import LoadingSpinner from '../ui/LoadingSpinner'
export const PurpleButton = ({isLoading,text}) => {
    console.log('isLoading',isLoading)
  return (
    <button className='bg-darkPink flex gap-1 items-center rounded-md h-10 hover:bg-darkPink/90 capitalize'>
        {isLoading && <LoadingSpinner className='h-1' width='26' height='26' /> }
        <span>{text}</span>
    </button>
  )
}
