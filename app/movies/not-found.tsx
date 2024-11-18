import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      This page could not be found.
      <Link href="/movies">Go back to the movies page</Link>    
    </div>
  )
}

export default NotFound
