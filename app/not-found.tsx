import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      This page could not be found.
      <Link href="/" className='mt-4 text-blue-500 hover:underline hover:underline-offset-8'>Go back to the home page</Link>    
    </div>
  )
}

export default NotFound
